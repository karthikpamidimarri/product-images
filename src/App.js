import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import json from './image';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>
              {json.map(function (productsConnection,prod) {
                  return <ul key={prod}> <ProductsConnection productConnection={productsConnection.productsConnection.edges}/> </ul>
              })}
          </div>
        </p>
      </div>
    );
  }
}

const Variants = (props) => {
  return (
      <span>{props.variant.map(function (variant,i) {
          return <div><li>name && SKU : {variant.name} -- <b>{variant.sku}</b></li> <ImageList imageList ={variant.images}/></div>
      })}</span>
  )
};

const ImageList = (props) => {
    return (
        <div>
            {props.imageList.map(function (image,i){
                return <span> Image : <li key={image.id}><img src={image.url} /></li></span>
            })}
        </div>
    )
};

const ProductsConnection = (props) => {
  return(
      <div>
          {props.productConnection.map(function (Variant,i) {
              return <li key={i}> <Variants variant={Variant.node.variants}/> </li>
          })}
      </div>
  )
};


export default App;
