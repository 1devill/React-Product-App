import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setFilteredProductsLaptops,
  setFilteredProductsPhones,
  setFilteredProductsWatch,
  setFilteredProductsAll
} from "../../store/actions/products";
import { setFavorite } from "../../store/actions/filter";

import { Layout, Menu, Icon } from "antd";
import PrimaryButton from "../../components/BasicUI/Button/PrimaryButton";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    let btn = <PrimaryButton clicked={this.props.toggleFavorite}>Show Favorites</PrimaryButton>;
    if (this.props.isFavorite) {
      btn = <PrimaryButton clicked={this.props.toggleFavorite}>Hide Favorites</PrimaryButton>;
    }
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="menu" />
                <span>Categories</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <div onClick={this.props.setAllProducts}>All</div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={this.props.setWatch}>Watch</div>
            </Menu.Item>
            <Menu.Item key="3">
              <div onClick={this.props.setLaptops}>Laptops</div>
            </Menu.Item>
            <Menu.Item key="4">
              <div onClick={this.props.setPhones}>Phones</div>
            </Menu.Item>
          </SubMenu>
        </Menu>
        {!this.state.collapsed 
          ? btn
          : <PrimaryButton clicked={this.props.toggleFavorite}><Icon type="star" /></PrimaryButton>}
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFavorite: state.filter.isFavorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: () => dispatch(setFavorite()),
    setAllProducts: () => dispatch(setFilteredProductsAll()),
    setLaptops: () => dispatch(setFilteredProductsLaptops()),
    setPhones: () => dispatch(setFilteredProductsPhones()),
    setWatch: () => dispatch(setFilteredProductsWatch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
