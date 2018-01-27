import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import LeftBarNav from "./Components/LeftBarNav.js";
import ProductDetail from "./Components/ProductDetail";


// function OneProduct (itemList) {

// // const item1 = itemList.map( (blah) => {
// //    console.log(blah)
// //     return <blah />;
// //  }
// // ); //end of map

// return itemList[0];

// }  // end of function




function App(props) {

    return (
      <div className="App">



      <Header />


    <div className="container">

        <div className="row">

            <LeftBarNav />

            <div className="col-md-9">

                <div className="row carousel-holder">

                    <div className="col-md-12">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                                <div className="item">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                                <div className="item">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div> 
                
                {/* Begin of products */}

                <div className="row">
                  {/* First Product */}

                       {/*  <ProductDetail  /> */}

                 {props.productList.products.map( (blah) => { 
                        return <ProductDetail item={blah}  />
                    } // end of return
                    ) //end of map
                 }


                  {/* First Proudct */}

               


                </div>  {/* end of Row - Product Detail */}

            </div>

        </div>

    </div>

    <div className="container">

        <hr/>

<Footer/>

    </div>
      </div>
    );
}

export default App;
