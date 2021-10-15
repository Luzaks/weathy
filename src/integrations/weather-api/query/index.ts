import { secretKey } from "../../../utils";

export const getData = async (location: string) => {
  const APIActions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const submittedPromise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${secretKey}&q=${location}&aqi=no`,
    APIActions
  );
  return await submittedPromise.json();
};
