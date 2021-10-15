import { UserProps } from "../../utils";

const handleSetItem = (obj?: UserProps) => {
  const userInfo: UserProps = obj ? obj : { username: "", password: "" };

  localStorage.setItem("usr", JSON.stringify(userInfo));
};

export const handleLogin = (username: string, password: string) => {
  const obj = {
    username,
    password,
  };
  handleSetItem(obj);
};

export const handleSession = () => {
  const storage = localStorage.getItem("usr");
  let session: boolean;
  if (storage) {
    const usr = JSON.parse(storage);
    session = !!usr.username;
  } else {
    handleSetItem();
    session = false;
  }
  return session;
};

export const handleLogout = () => {
  handleSetItem();
};
