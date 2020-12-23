import React from 'react';
import 'semantic-ui-less/semantic.less'
import {Auth0Provider} from "@auth0/auth0-react";
import {authConfig, redirectUri, onRedirectCallback} from "../src";

export const decorators = [
  (story) => {
    return (
      <Auth0Provider
        domain={authConfig.domain}
        clientId={authConfig.clientId}
        audience={authConfig.apiUrl}
        redirectUri={redirectUri}
        onRedirectCallback={onRedirectCallback}
      >
        {story()}
      </Auth0Provider>
    );
  },
];
