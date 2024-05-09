import React, { Component } from 'react';
import Navbar from "./components/navbar"
import Product from "./components/products";

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                    <Navbar/>
                    <div className="product-container">
                        <Product title="Studium" image="assets/img/studium.jpg" describtion="Informatik B. Sc. an der Freien Universität Berlin"/>
                        <Product title="Letzte Projekte" image="assets/img/projekte.jpg" describtion="Softwareprojekt Coding IxD"/>
                        <Product title="Beruf" image="assets/img/beruf.jpg" describtion="Werkstudent in der Technischen Kundenbetreuung bei Projektron GmbH"/>
                    </div>
                </React.Fragment>;
    }
}
 
export default App;