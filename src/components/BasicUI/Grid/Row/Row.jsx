import React from 'react';
import { Row } from 'antd';

const grid = (props) => {
    return (
        <Row gutter={[16, 16]}>{props.children}</Row>
    );
}
export default grid;