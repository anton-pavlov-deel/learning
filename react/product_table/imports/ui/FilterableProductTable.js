import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


/*
> FilteredProductTable +
  > SearchBar +
  > ProductTable +
    > ProductCategoryRow +
    > ProductRow +
*/


class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name : (
        <span style={{ color: 'red' }}>
          {product.name}
        </span>
      );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}


class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;

    return (
      <tr>
        <th colSpan='2'>
          {category}
        </th>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    const inStockOnly = this.props.inStockOnly;
    const filterText = this.props.filterText;
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push((
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        ))
      }
      rows.push((
        <ProductRow
          product={product}
          key={product.name}
        />
      ));
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  handleInStockOnlyChange(event) {
    this.props.onInStockOnlyChange(event.target.checked);
  }

  render() {
    return (
      <form className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange.bind(this)}
        />
        <p>
          <label>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockOnlyChange.bind(this)}
            />
            Only show products in stock
          </label>
        </p>
      </form>
    );
  }
}

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText
    });
  }

  handleInStockOnlyChange(inStockOnly) {
    this.setState({
      inStockOnly
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange.bind(this)}
          onInStockOnlyChange={this.handleInStockOnlyChange.bind(this)}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
