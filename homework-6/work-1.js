import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

function InputElement(props) {
  return props.type === 'text' ?
    <input type={props.type} onChange={props.onChange} value={props.value} /> :
    <div><input type={props.type} onChange={props.onChange} checked={props.checked} /><label>Only show products in stocked</label></div>
}

function TableElement(props) {
  return (
    <table>
      <th><td>name</td><td>price</td></th>
      {props.productsElement}
    </table>
  )
}

function TableHead(props) {
  return <tr>{props.category}</tr>
}

function TableBody(props) {
  return props.type === 'red' ?
    <tr style={{color:'red'}}><td>{props.name}</td><td>{props.price}</td></tr> :
    <tr><td>{props.name}</td><td>{props.price}</td></tr>
}

class App extends Component {
  state = {
    searchText: '',
    isChecked: false,
    resultProducts: []
  }

  componentWillMount() {
    this.setState({
      resultProducts: this.props.products
    })
  }

  filterProducts(prev) {
    const { searchText, isChecked } = prev
    const { products } = this.props
    return products.filter(i => !isChecked || i.stocked).filter(i => i.name.includes(searchText))
  }

  inputChange = (event) => {
    let searchText = event.target.value
    this.setState(prev => ({ searchText: searchText }))
    this.setState(prev => ({ resultProducts: this.filterProducts(prev) }))
  }

  checkboxChange = (event) => {
    let isChecked = event.target.checked
    this.setState(prev => ({ isChecked: isChecked }))
    this.setState(prev => ({ resultProducts: this.filterProducts(prev) }))
  }
  render() {
    const { searchText, isChecked, resultProducts } = this.state
    let temp
    const productsElement = []
    resultProducts.forEach(i => {
      if (temp != i.category) {
        productsElement.push(<TableHead category={i.category} />)
        temp = i.category
      }
      if (i.stocked) {
        productsElement.push(<TableBody name={i.name} price={i.price} />)
      } else {
        productsElement.push(<TableBody type='red' name={i.name} price={i.price} />)
      }
    })
    return (
      <div>
        <InputElement type='text' onChange={this.inputChange} value={searchText} />
        <InputElement type='checkbox' onChange={this.checkboxChange} checked={isChecked} />
        <TableElement productsElement={productsElement} />
      </div>
    )
  }
}

var PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99,99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399,99',
    stocked: false,
    name: 'iPhone 5'
  },
  {
    category: 'Electronics',
    price: '$199,99',
    stocked: true,
    name: 'Nexus 7'
  }
]

ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'))