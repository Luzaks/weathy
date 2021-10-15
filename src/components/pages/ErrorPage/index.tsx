import React from 'react';
import {Link,RouteComponentProps} from 'react-router-dom';

interface ErrorPageProps extends RouteComponentProps{
  id: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = () => {
  return(
    <>
      <Link to={'/'}><p>Login</p></Link>
      <h1>Error Page</h1>
    </>
  );
};
