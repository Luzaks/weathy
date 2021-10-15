import React, { useEffect, useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid } from "@mui/material";

import { DashboardNavbar } from "../../organism";
import { CardsTemplate } from "../../templates";
import { getData, handleLogout } from "../../../integrations";
import { locations } from "../../../models";

interface DashboardPageProps extends RouteComponentProps {}

export const DashboardPage: React.FC<DashboardPageProps> = ({ history }) => {
  const [weathers, setWeathers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const apiHandler = useCallback(() => {
    setIsLoading(true);
    locations.map(async (item: string) => {
      return await getData(item)
        .then((r) => {
          setWeathers((prevState: any) => [...prevState, r]);
          setIsLoading(false);
        })
        .catch((er) => {
          console.error(er);
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
      <CardsTemplate data={weathers} isLoading={isLoading} />
    </Grid>
  );
};
