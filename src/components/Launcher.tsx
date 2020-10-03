import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import { APP_CATALOG } from "@dataware-tools/app-common/dist";

const Launcher = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {!isAuthenticated ? (
        <div>Please login to see all of the available tools.</div>
      ) : (
        <div>
          <Card.Group>
            {Object.values(APP_CATALOG).map((app: any) => (
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
            ))}
          </Card.Group>
        </div>
      )}
    </div>
  );
};

export default Launcher;
