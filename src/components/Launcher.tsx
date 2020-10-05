import React from "react";
import { Card, Icon, Image, Segment } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import { APP_CATALOG } from "@dataware-tools/app-common/dist";

const Launcher = () => {
  const { isAuthenticated } = useAuth0();

  const renderAppCard = (app: any) => {
    return (
      <Card key={"card-" + app.id} href={app.urlPrefix}>
        <Card.Content textAlign="center">
          {app.icon.startsWith("http") ? (
            <Image
              size="tiny"
              src={app.icon}
              style={{ marginBottom: "14px", marginRight: "0" }}
            />
          ) : (
            <Icon
              name={app.icon}
              size="massive"
              color="black"
              style={{ marginBottom: "14px", marginRight: "0" }}
            />
          )}
          <Card.Header>{app.name}</Card.Header>
          <Card.Description>{app.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  const listAppCards = (location: string) => {
    return (
      <Card.Group>
        {!isAuthenticated
          ? Object.values(APP_CATALOG)
              .filter((app: any) => {
                return app.location === location;
              })
              .filter((app: any) => {
                return app.visibility === "public";
              })
              .map((app: any) => renderAppCard(app))
          : Object.values(APP_CATALOG)
              .filter((app: any) => {
                return app.location === location;
              })
              .map((app: any) => renderAppCard(app))}
      </Card.Group>
    );
  };

  return (
    <div>
      {!isAuthenticated && (
        <div>Please login to see all of the available tools.</div>
      )}
      <Segment vertical>
        <h1>Internal tools</h1>
        {listAppCards("internal")}
      </Segment>
      <Segment vertical>
        <h1>External tools</h1>
        {listAppCards("external")}
      </Segment>
    </div>
  );
};

export default Launcher;
