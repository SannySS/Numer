import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bisection from './Bisection';
import OnePoint from './OnePoint'
import FalsePosition from './FalsePosition';
import NewtonRaphson from './NewtonRaphson';
import { Menu, Icon } from 'antd';
import { Layout, Carousel } from 'antd';
import Secant from './Secant';
import CramerRule from './CramerRule';
import GaussElimination from './GaussElimination';
import GaussJordan from './GaussJordan';
import LUDecomposition from './LUDecomposition';
import CholeskyDecomposition from './CholeskyDecomposition';
import JacobiIteration from './JacobiIteration';
import GauseScidelIteration from './GauseScidelIteration';
import Newton from './Newton';
import Lagrang from './Lagrang'
import Trapezoidal from './Trapezoidal'
import './App.css'

const axios = require("axios")
//import wall from './wall.png';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Main extends Component {
    showPage = (v) => {
        ReactDOM.render(<div></div>, document.getElementById("table"));
        switch (v.key) {
            case "Bisection Method": ReactDOM.render(<Bisection />, document.getElementById("Page")); break; //Graph
            case "False Position Method": ReactDOM.render(<FalsePosition />, document.getElementById("Page")); break; //Graph
            //case "One Point Iteration Method": ReactDOM.render(<OnePoint />, document.getElementById("Page")); break; //Graph
            case "Newton Raphson Method": ReactDOM.render(<NewtonRaphson />, document.getElementById("Page")); break; //Graph
            case "Secant Method": ReactDOM.render(<Secant />, document.getElementById("Page")); break; //Graph
            case "Cramer's Rule": ReactDOM.render(<CramerRule />, document.getElementById("Page")); break;
            case "Gauss Elimination Method": ReactDOM.render(<GaussElimination />, document.getElementById("Page")); break;
            case "Gauss Jordan Method": ReactDOM.render(<GaussJordan />, document.getElementById("Page")); break;
            case "LU Decomposition Method": ReactDOM.render(<LUDecomposition />, document.getElementById("Page")); break;
            case "Cholesky Decomposition Method": ReactDOM.render(<CholeskyDecomposition />, document.getElementById("Page")); break; //Graph+Algor
            case "Jacobi Iteration Method": ReactDOM.render(<JacobiIteration />, document.getElementById("Page")); break; //Graph+Algor
            case "Gause Scidel Iteration Method": ReactDOM.render(<GauseScidelIteration />, document.getElementById("Page")); break; //Graph+Algor
            case "Newton's Method": ReactDOM.render(<Newton />, document.getElementById("Page")); break;
            case "Lagrang's Method": ReactDOM.render(<Lagrang />, document.getElementById("Page")); break;
            case "Trapezoidal": ReactDOM.render(<Trapezoidal />, document.getElementById("Page")); break;
            case "CompositeTrapezoidal": ReactDOM.render(<Trapezoidal />, document.getElementById("Page")); break;
            /*case "Bisection Method":ReactDOM.render(<Bisection/>, document.getElementById("Page"));break;
            case "Bisection Method":ReactDOM.render(<Bisection/>, document.getElementById("Page"));break;
            case "Bisection Method":ReactDOM.render(<Bisection/>, document.getElementById("Page"));break;
            case "Bisection Method":ReactDOM.render(<Bisection/>, document.getElementById("Page"));break;*/
            default: ReactDOM.render(<div />, document.getElementById("Page"));
        }
    }
    fun() {
        axios.get("http://localhost:3001/users")
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {

            })

    }
    render() {
        return (
            <div>
                <Layout >
                    <header className='App-header'>
                        <h1 style={{ color: 'white' }} fontSize='200'>NUMERICAL METHOD</h1>
                    </header>
                    <Layout style={{ minHeight: 1024, color: "red" }} >
                        <Sider className='App-sider' color="white" width="20%" >
                            <Menu
                                mode="inline"
                                color="#ffa39e"
                                onClick={this.showPage}
                                className='App-menu'
                                theme="dark"
                            >

                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span style={{ fontSize: 20 }} >
                                            <Icon type="mail" />
                                            <span >Root of Equation</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="Bisection Method">Bisection Method</Menu.Item>
                                    <Menu.Item key="False Position Method">False Position Method</Menu.Item>
                                    <Menu.Item key="One Point Iteration Method">One Point Iteration Method</Menu.Item>
                                    <Menu.Item key="Newton Raphson Method">Newton Raphson Method</Menu.Item>
                                    <Menu.Item key="Secant Method">Secant Method</Menu.Item>
                                </SubMenu>
                                <SubMenu

                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span >Solution of Linear Algebra Equations</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="Cramer's Rule" >Cramer's Rule</Menu.Item>
                                    <Menu.Item key="Gauss Elimination Method">Gauss Elimination Method</Menu.Item>
                                    <Menu.Item key="Gauss Jordan Method">Gauss Jordan Method</Menu.Item>
                                    <Menu.Item key="LU Decomposition Method">LU Decomposition Method</Menu.Item>
                                    <Menu.Item key="Cholesky Decomposition Method">Cholesky Decomposition Method</Menu.Item>
                                    <SubMenu title="Iteration Method">
                                        <Menu.Item key="Jacobi Iteration Method">Jacobi Iteration Method</Menu.Item>
                                        <Menu.Item key="Gause Scidel Iteration Method">Gause Scidel Iteration Method</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>Interpolation</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="Newton's Method">Newton's Method</Menu.Item>
                                    <Menu.Item key="Lagrang's Method">Option 10</Menu.Item>
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub5"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>Exact Integrate</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="Trapezoidal">Trapezoidal</Menu.Item>
                                    <Menu.Item key="CompositeTrapezoidal">CompositeTrapezoidal</Menu.Item>
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </Menu>
                            <div className="App-menu2">

                            </div>
                        </Sider>
                        <Layout>
                            <Content >
                                <div id="Page">
                                    <Carousel autoplay>
                                        <div className="photo">
                                            <br />
                                            <h1 className="center" color='red'>What is Numerical Method</h1>
                                            <br />
                                            <h3 className="center" >numerical method is a mathematical tool designed to solve numerical problems. The implementation of a numerical method with an appropriate convergence check in a programming language is called a numerical algorithm</h3>
                                        </div>
                                        <div className="photo">
                                            <h3>2</h3>
                                        </div>
                                        <div className="photo">
                                            <h3>3</h3>
                                        </div>
                                        <div className="photo">
                                            <h3>4</h3>
                                        </div>
                                    </Carousel>
                                </div>
                            </Content><div id="table" />
                        </Layout>
                    </Layout>
                    <Layout>
                        <Footer>
                            Thanasan Ruangchai
                            </Footer>
                    </Layout>
                </Layout>
            </div>

        );
    }
}
export default Main;