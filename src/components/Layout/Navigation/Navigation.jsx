import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "antd";

import { Row, Col} from "antd";

const navigation = () => {
    return (
        <Row>
            <Col span={12}>
                <Link to="/">
                    <Icon style={{ fontSize: '30px', color: '#08c' }} type="home" />
                </Link>
            </Col>
            <Col span={12}>
                <Link to="/cart">
                    <Icon style={{ fontSize: '30px', color: '#08c' }} type="shopping-cart" />
                </Link>
            </Col> 
        </Row>
    );
};

export default navigation;