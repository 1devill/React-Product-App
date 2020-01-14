import React, { Component } from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "../../containers/Sidebar/Sidebar";
import MainContent from "../../routes/MainContent";

class LayoutComponent extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <MainContent />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;
