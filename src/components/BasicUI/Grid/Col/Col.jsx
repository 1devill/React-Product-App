import React from 'react'

import { Col } from "antd";

const col = (props) => {
    return (
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6}}>{props.children}</Col>
    );
}

export default col;