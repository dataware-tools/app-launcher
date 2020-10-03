import React from "react";
import { storiesOf } from "@storybook/react";
import Launcher from "./Launcher";

storiesOf("App/Launcher", module).add("default", () => (
  <div>
    <Launcher />
  </div>
));
