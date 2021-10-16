import { ReactNode } from "react";
import { RouteComponentProps } from "react-router-dom";

/* Atoms */

export interface PrimaryBoxProps {
  children: ReactNode;
  sx?: any;
}

export interface PrimaryButtonProps {
  title: string;
  onClick: () => void;
}

export interface CardContentProps {
  content: ReactNode;
}

export interface PrimaryDivProps {
  children: ReactNode;
  color?: string;
}

export interface PrimaryTextProps {
  content: string;
  variant?: any;
  color?: any;
  fontSize?: number;
}

/* Molecules */

export interface CardsProps {
  content: string[];
}

export interface UserProps {
  username: string;
  password: string;
}

export interface FormProps {
  username: string;
  password: string;
  handleOnChangeUser: (e: any) => void;
  handleOnChangePass: (e: any) => void;
  handleSaveForm: () => void;
}

export interface WeatherCardProps {
  cityInfo: any;
}

/* Organisms */

export interface DashboardNavbarProps {
  handleLogOut: () => void;
}

/* Templates */

export interface CardsTemplateProps {
  data: any[];
  isLoading: boolean;
}

/* Pages */

export interface PageProps extends RouteComponentProps {}
