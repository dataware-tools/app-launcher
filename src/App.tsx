import React from "react";
import "./App.css";
import { Card, Icon } from "semantic-ui-react";
import { PageWrapper } from "@dataware-tools/app-common";

const App = () => {
  return (
    <PageWrapper>
      <Card.Group>
        <Card href="/data-browser">
          <Card.Content textAlign="center">
            <Icon
              name="database"
              size="massive"
              color="black"
              style={{ marginBottom: "14px", marginRight: "0" }}
            />
            <Card.Header>Data Browser</Card.Header>
            <Card.Description>Explore data</Card.Description>
          </Card.Content>
        </Card>
        <Card href="/docs">
          <Card.Content textAlign="center">
            <Icon
              name="book"
              size="massive"
              color="black"
              style={{ marginBottom: "14px", marginRight: "0" }}
            />
            <Card.Header>Documents</Card.Header>
            <Card.Description>Read documents</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </PageWrapper>
  );
};

export default App;
