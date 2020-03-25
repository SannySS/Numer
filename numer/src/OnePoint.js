import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as math from 'mathjs';
import Table from './Table';
import { Container, Row, Col } from 'reactstrap';
const axios = require("axios")
class OnePoint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fx: '',
            x: '',
            error: '',
        }
        this.doFun = this.doFun.bind(this);
        this.createTable = this.createTable.bind(this);
        this.Auto = this.Auto.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }
    Auto() {
        console.log("sss")
        axios.get("http://localhost/users/One-Point")
            .then((response) => {
                let obj = response.data[0]
                this.setState({
                    fx: obj.fx,
                    x: obj.x,
                    error: obj.error
                })
            })
    }
    createTable(x) {
        ReactDOM.render(<Table data={x} p='4' />, document.getElementById("table"));
    }
    doFun() {
        var x = parseFloat(this.state.x);
        var error = parseFloat(this.state.error);
        var data = {
            'x': [],
            'error': [],
            'fx': []
        }
        var i = 0;
        var g = [];
        data.error[i] = 0;
        data.x[i] = x;
        data.fx[i] = (parseFloat(this.func(data.x[i]))).toFixed(6);
        do {
            /*g.push(
                <tr>
                    <th scope="row">{i}</th>
                    <td>{data.x[i]}</td>
                    <td>{data.fx[i]}</td>
                    <td>{data.error[i]}</td>
                </tr>
            );*/
            if (i > 0) {
                data.x[i] = parseFloat(data.fx[i - 1]);
                data.error[i] = (parseFloat((data.x[i] - data.x[i - 1]) / data.x[i])).toFixed(6);
                data.fx[i] = (parseFloat(this.func(data.x[i]))).toFixed(6);
                //console.log(data.x[i])
            }

            if (data.fx[i] === 0) {
                break;
            }
            i++;
            console.log(data)
        } while ((i === 1 || math.abs(data.error[i - 1]) > this.state.error));
        g.push(
            <tr>
                <th scope="row">{i}</th>
                <td>{data.x[i]}</td>
                <td>{data.fx[i]}</td>
                <td>{data.error[i]}</td>
            </tr>
        );
        this.createTable(g);
    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        return (
            <div>
                <label style={{ alignItems: "center" }}>OnePoint</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <form onChange={this.handleChange}>
                        <input type="double" value={this.state.fx} className="form-control" id="fx" placeholder="Enter Function"></input>
                        <input type="double" value={this.state.x} className="form-control" id="x" placeholder="x"></input>
                        <input type="double" value={this.state.error} className="form-control" id="error" placeholder="error"></input>
                    </form>
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
        );
    }
}
export default OnePoint;
