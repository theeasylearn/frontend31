import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIE_FILE } from './common';

const WithHook = (MyComponent) => {
  // Define a new functional component inside the HOC
  const WrappedComponent = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(COOKIE_FILE);

    // Pass the hooks as props to the wrapped component
    return (
      <MyComponent
        {...props}
        params={params}
        navigate={navigate}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
    );
  };

  // Return the new component
  return WrappedComponent;
};

export default WithHook;