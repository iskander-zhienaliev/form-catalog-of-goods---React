import React, { Component } from "react";
import { goods } from "../goods";
import "./ListOfGoods.scss";
import Product from "./Product";
import Pagination from "./Pagination";

class ListOfGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [],
      renderedGoods: [],
      page: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const renderedGoods = this.state.goods.slice((page - 1) * 10, (page - 1) * 10 + 10);
    this.setState({ page, renderedGoods });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ goods, renderedGoods: goods.slice(0, 10), total: goods.length });
    });
  }

  render() {
    const { page, total, renderedGoods } = this.state;
    return (
      <div className="container-goods">
        <div className="list">{renderedGoods.map((val, i) => <Product key={i} {...val} />)}</div>
        <Pagination
          margin={2}
          page={page}
          count={Math.ceil(total / 10)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default ListOfGoods;
