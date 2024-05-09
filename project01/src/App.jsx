import React, { Component } from 'react';
import Navbar from "./components/navbar"
import Product from "./components/products";

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                    <Navbar/>
                    <div className="product-container">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </React.Fragment>;
    }
}
 
export default App;