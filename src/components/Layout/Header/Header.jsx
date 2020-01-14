import React from "react";

import { Layout } from "antd";
import Navigation from "../Navigation/Navigation";

const { Header } = Layout;

const header = () => {
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Navigation />
    </Header>
  );
};

export default header;
