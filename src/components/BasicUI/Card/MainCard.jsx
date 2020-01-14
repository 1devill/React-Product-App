import React from 'react';

import { Card } from 'antd';
import { Row, Col, Icon } from 'antd';

const mainCard = (props) => {
    const favProducts = props.allProducts.find(item => item.id === props.product.id);
    const purchasingProducts = props.allProducts.find(item => item.id === props.product.id);
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img style={{objectFit: "cover", width: "100%", height: "250px"}} alt="product" src={props.product.image} />}
        >
            <h3>{props.product.title}</h3>
            <p>{props.product.desc}</p>
            <p>Price is: {props.product.price}$</p>
            <Row>
                <Col span={12}>
                    <div onClick={() => props.setFavProducts(favProducts)}>
                        <Icon style={{ fontSize: '24px', color: '#08c' }} type="star" />
                    </div>
                </Col>
                <Col span={12}>
                    <div onClick={() => props.purchase(purchasingProducts)}>
                        <Icon style={{ fontSize: '24px', color: '#08c' }} type="shopping-cart" />
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default mainCard;