import React, { Component } from "react";
import { connect } from "react-redux";

import Row from "../../components/BasicUI/Grid/Row/Row";
import Col from "../../components/BasicUI/Grid/Col/Col";
import MainCard from "../../components/BasicUI/Card/MainCard";
import { setFavProducts, purchaseProduct } from "../../store/actions/products";

class Products extends Component {
  render() {
    return (
      <Row>
        {!this.props.isFavorite
          ? this.props.filteredProducts.map(item => {
              return (
                <Col key={item.id}>
                  <MainCard
                    allProducts={this.props.filteredProducts}
                    product={item}
                    setFavProducts={this.props.setFavProducts}
                    purchase={this.props.purchaseProduct}
                  />
                </Col>
              );
            })
          : this.props.favProducts.map(item => {
              return (
                <Col key={item.id}>
                  <MainCard
                    allProducts={this.props.favProducts}
                    product={item}
                    setFavProducts={this.props.setFavProducts}
                    purchase={this.props.purchaseProduct}
                  />
                </Col>
              );
            })}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    favProducts: state.products.favProducts,
    isFavorite: state.filter.isFavorite,
    filteredProducts: state.products.filteredProducts,
    purchasingProducts: state.products.purchasingProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFavProducts: item => dispatch(setFavProducts(item)),
    purchaseProduct: item => dispatch(purchaseProduct(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
