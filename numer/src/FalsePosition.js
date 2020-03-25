import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as math from 'mathjs';
import Table from './Table';
import { Container, Row, Col } from 'reactstrap';
const axios = require("axios")
const head = (
<tr>
    <th scope="col">Iteration</th>
    <th scope="col">XL</th>
    <th scope="col">XR</th>
    <th scope="col">XM</th>
    <th scope="col">FX</th>
    <th scope="col">ERROR</th>
</tr>)
class FalsePosition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fx: '',
            xl: '',
            xr: '',
            xm: '',
            error: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.doFun = this.doFun.bind(this);
        this.createTable = this.createTable.bind(this);
        this.Auto = this.Auto.bind(this);
    }
    Auto() {
        axios.get("http://localhost/users/False-position")
            .then((response) => {
                let obj = response.data[0]
                console.log(obj)
                this.setState({
                    fx: obj.fx,
                    xl: obj.xl,
                    xr: obj.xr,
                    error: obj.error
                })
            })
    }
    createTable(x) {
        ReactDOM.render(<Table data={x} head={head} p='3' />, document.getElementById("table"));
    }
    doFun() {
        let xl = parseFloat(this.state.xl);
        let xr = parseFloat(this.state.xr);
        let fx;
        let xm;
        let error = parseFloat(this.state.error);
        let data = {
            'xl': [],
            'xr': [],
            'xm': [],
            'error': [],
            'fx': []
        }
        let i = 0;
        data.error[0] = 0;
        let g = [];
        do {
            xm = ((xl * this.func(xr) - xr * this.func(xl)) / (this.func(xr) - this.func(xl))).toFixed(6);
            console.log(xm)
            fx = (parseFloat(this.func(xm))).toFixed(6);
            data.xl[i] = xl;
            data.xr[i] = xr;
            data.xm[i] = xm;
            data.fx[i] = fx;
            if (i > 0) {
                data.error[i] = math.abs(((data.xm[i] - data.xm[i - 1]) / data.xm[i]).toFixed(6));
            }
            g.push(
                <tr>
                    <th scope="row">{i}</th>
                    <td>{data.xl[i]}</td>
                    <td>{data.xr[i]}</td>
                    <td>{data.xm[i]}</td>
                    <td>{data.fx[i]}</td>
                    <td>{data.error[i]}</td>

                </tr>
            );
            if (data.fx[i] * this.func(xr) > 0) {
                xr = xm;
            }
            else if (data.fx[i] * this.func(xr) < 0) {

                xl = xm;
            }
            else {
                this.createTable(g);
                return;
            }
            i++;
        } while (i === 1 || data.error[i - 1] > error);
        this.createTable(g);
    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <label style={{ alignItems: "center" }}>Bisection</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <form onChange={this.handleChange}>
                        <input name="fx" type="double" value={this.state.fx} className="form-control" placeholder="Enter Function" ></input>
                        <input name="xl" type="double" value={this.state.xl} className="form-control" placeholder="xl" ></input>
                        <input name="xr" type="double" value={this.state.xr} className="form-control" placeholder="xr" ></input>
                        <input name="error" type="double" value={this.state.error} className="form-control" id="error" placeholder="error"></input>
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
export default FalsePosition;