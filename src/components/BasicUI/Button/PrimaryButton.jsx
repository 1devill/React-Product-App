import React from "react";

import { Button } from "antd";

const primaryButton = props => {
  return (
    <div onClick={props.clicked} style={{ padding: "10px" }}>
      <Button type="primary">{props.children}</Button>
    </div>
  );
};

export default primaryButton;
