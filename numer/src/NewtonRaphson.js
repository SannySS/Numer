import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as math from 'mathjs';
import Table from './Table';
import { Container, Row, Col } from 'reactstrap';
const axios = require("axios")
const head = (
    <tr>
        <th scope="col">Iteration</th>
        <th scope="col">X</th>
        <th scope="col">FX</th>
        <th scope="col">ERROR</th>
    </tr>)
class NewtonRaphson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fx: '',
            x: '',
            error: '',

        }
        this.xChange = this.xChange.bind(this);
        this.errorChange = this.errorChange.bind(this);
        this.fxChange = this.fxChange.bind(this);
        this.doFun = this.doFun.bind(this);
        this.createTable = this.createTable.bind(this);
        this.Auto=this.Auto.bind(this)
    }
    Auto() {
        console.log("sss")
        axios.get("http://localhost/users/Newton-Rahpson")
            .then((response) => {
                let obj=response.data[0]
                this.setState({
                    fx:obj.fx,
                    x:obj.x,
                    error:obj.error
                })
            })
    }
    createTable(x) {
        ReactDOM.render(<Table data={x} head={head} hello="5" />, document.getElementById("table"));
    }
    xChange(event) {
        this.setState({ x: event.target.value });
    }
    errorChange(event) {
        this.setState({ error: event.target.value });
    }
    fxChange(event) {
        this.setState({ fx: event.target.value });
    }
    doFun() {
        var i = 0;
        var g = [];
        var data = {
            'x': [],
            'error': [],
            'fx': []
        }
        var x=parseFloat(this.state.x);
        var error=parseFloat(this.state.error);
        data.x[i] = parseFloat(x);
        data.error[i] = 0;
        do {
            data.fx[i] = this.func(x).toFixed(9);
            data.x[i + 1] = (data.x[i] - (this.func(x) / this.funcdif(x))).toFixed(9);
            if (i > 0) {
                data.error[i] = math.abs(((this.func(x) - this.func(data.x[i - 1])) / this.func(x))).toFixed(9);
            }
            g.push(
                <tr>
                    <th scope="row">{i}</th>
                    <td>{data.x[i]}</td>
                    <td>{data.fx[i]}</td>
                    <td>{data.error[i]}</td>
                </tr>
            );
            if (data.fx[i] === 0) {
                break;
            }
            x=data.x[i+1];
            i++;
        } while ((i === 1 || math.abs(data.error[i - 1]) > error) && i < 60);
        this.createTable(g);
    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.evaluate(scope);
    }
    funcdif(X) {
        var expr=math.derivative(this.state.fx,'x');
        let scope = { x: parseFloat(X) };
        return expr.evaluate(scope);
    }
    render() {
        return (
            <div>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <input type="double" value={this.state.fx} className="form-control" id="Function" placeholder="Enter Function" onChange={this.fxChange}></input>
                    <input type="double" value={this.state.x} className="form-control" id="xl" placeholder="xl" onChange={this.xChange}></input>
                    <input type="double" value={this.state.error} className="form-control" id="error" placeholder="error" onChange={this.errorChange}></input>
                    <Row>
                        <Col span={2}/>
                        <Col>
                            <button onClick={() => this.doFun()}>Submit</button>
                            <button onClick={() => this.Auto()}>AUTO</button>
                        </Col>
                        <Col span={2}/>
                    </Row>
                </div>
            </div>
        )
    }



}
export default NewtonRaphson;