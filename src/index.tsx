import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider, AppState } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";
import { AUTH_CONFIG, APP_CATALOG } from "@dataware-tools/app-common";

import "semantic-ui-less/semantic.less";

export const authConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || AUTH_CONFIG.domain,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || AUTH_CONFIG.clientId,
  apiUrl: process.env.REACT_APP_AUTH0_API_URL || AUTH_CONFIG.apiUrl,
};
export const redirectUri =
  window.location.origin + APP_CATALOG.dataBrowser.urlPrefix + "/callback";

export const onRedirectCallback = (appState: AppState) => {
  window.location.href =
    appState && appState.returnTo ? appState.returnTo : window.location.origin;
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      audience={authConfig.apiUrl}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
