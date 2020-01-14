import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import { addQuantity, subtractQuantity } from "../../store/actions/products";
import PrimaryButton from "../../components/BasicUI/Button/PrimaryButton";

class Cart extends Component {
  render() {
    console.log(this.props);
    let totalPricesArray = [];
    totalPricesArray.push(
      this.props.purchasingProducts.map(item => item.price * item.counter)
    );
    const totalPrice = totalPricesArray.reduce((acc, item) => {
      if (typeof item === "object") {
        let sum = 0;
        item.reduce((acc, item) => {
          sum += item;
          return acc;
        }, 0);
        return acc + sum;
      }
      return acc + item;
    }, 0);
    return (
      <Row>
        {this.props.purchasingProducts.map(item => {
          return (
            <div key={item.id} style={{ marginBottom: "30px" }}>
              <Col span={8}>
                <h4 style={{ color: "#001529" }}>Title</h4>
                <h2>{item.title}</h2>
              </Col>
              <Col span={8}>
                <h4 style={{ color: "#001529" }}>Quantity</h4>
                <h2>{item.counter}</h2>
              </Col>
              <Col span={8}>
                <h4 style={{ color: "#001529" }}>Price</h4>
                <h2>{item.price}$</h2>
              </Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  width: "100%"
                }}
              >
                <div onClick={() => this.props.addCounter(item.id)}>
                  <PrimaryButton>
                    <b>+</b>
                  </PrimaryButton>
                </div>
                <div onClick={() => this.props.subtractCounter(item.id)}>
                  <PrimaryButton>
                    <b>-</b>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          );
        })}
        {this.props.purchasingProducts.length ? (
          <h2>Total Price is: {totalPrice}$</h2>
        ) : null}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    purchasingProducts: state.products.purchasingProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCounter: id => dispatch(addQuantity(id)),
    subtractCounter: id => dispatch(subtractQuantity(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
