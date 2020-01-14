import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";

import { getProducts } from "../store/actions/products";
import Products from "../containers/Products/Products";
import Cart from "../containers//Cart/Cart";
const { Content }  = Layout;

class MainContent extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <Content style={{ margin: "0 16px" }}>
                <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                    <Switch>
                        <Route exact path="/" component={Products} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>
            </Content>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}


export default connect(null, mapDispatchToProps)(MainContent);