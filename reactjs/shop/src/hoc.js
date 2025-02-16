import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {COOKIE_FILE} from './common'
const WithHook = (MyComponent) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(COOKIE_FILE);

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
};

export default WithHook;
