import React, { useEffect, useCallback, useState, FC } from "react";
import { Grid } from "@mui/material";

import { DashboardNavbar } from "../../organism";
import { CardsTemplate, ErrorBoundary } from "../../templates";
import { getData, handleLogout } from "../../../integrations";
import { locations } from "../../../models";
import { PageProps } from "../../../utils";

export const DashboardPage: FC<PageProps> = ({ history }) => {
  const [weathers, setWeathers] = useState<any>([]);
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const apiHandler = useCallback(() => {
    setIsLoading(true);
    locations.map(async (item: string) => {
      return await getData(item)
        .then((r) => {
          if (!r.errors) {
            setWeathers((prevState: any) => [...prevState, r]);
          } else {
            setHasErrors(true);
          }
          setIsLoading(false);
        })
        .catch((er) => {
          console.error(er);
          setHasErrors(true);
          setIsLoading(false);
        });
    });
  }, []);

  useEffect(() => {
    apiHandler();
  }, [apiHandler]);

  const handleLogoutButton = () => {
    handleLogout();
    history.push("/");
  };
  return (
    <Grid
      container
      width={"100vw"}
      height={"100vh"}
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <DashboardNavbar handleLogOut={handleLogoutButton} />
      {!hasErrors && (
        <ErrorBoundary>
          <CardsTemplate data={weathers} isLoading={isLoading} />
        </ErrorBoundary>
      )}
    </Grid>
  );
};
