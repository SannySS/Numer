import React, { Component } from 'react';
import { Form } from 'antd'
import { compile, abs } from 'mathjs';
import { Container, Row, Col } from 'reactstrap';
const axios = require("axios")
var Algebrite = require('algebrite')
class Trapezoidal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fx:'',
            A: '',
            B: '',
            cal: '',
            real: '',
            error: '',
            showAns: false
        }
        this.doFun = this.doFun.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.Auto = this.Auto.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    Auto() {
        axios.get("http://localhost/users/Trap")
            .then((response) => {
                let obj = response.data[0]
                console.log(obj)
                this.setState({
                    fx: obj.fx,
                    A: obj.A,
                    B: obj.B
                })
            })
    }
    Integrate(A, B) {
        var expr = compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({ x: B }) - expr.eval({ x: A })
    }
    doFun(a, b) {
        let h = b - a;
        let Cal = (h / 2) * (this.func(a) + this.func(b))
        let I = this.Integrate(a,b)
        let e = abs((I-Cal)/I)
        this.setState({
            cal: Cal,
            real: I,
            error: e
        })
        this.setState({ showAns: true })
    }
    func(X) {
        var expr = compile(this.state.fx);
        var scope = { x: parseFloat(X) };
        return expr.evaluate(scope);
    }
    render() {
        return (
            <div>
                <label style={{ alignItems: "center" }}>Newton</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <Form onChange={this.handleChange}>
                        <input id="fx" name="fx" type="double" value={this.state.fx} className="form-control" placeholder="fx"></input>
                        <input id="A" name="A" type="double" value={this.state.A} className="form-control" placeholder="A"></input>
                        <input id="B" name="B" type="double" value={this.state.B} className="form-control" placeholder="B"></input>
                        <button onClick={() => this.Auto()}>AUTO</button>
                        <button onClick={() => this.doFun(this.state.A, this.state.B)}>Submit</button>
                    </Form>
                    {this.state.showAns &&
                        <div>
                            <h1>พื้นที่ใต้กราฟที่คำนวน = {this.state.cal}</h1>
                            <h1>พื้นที่ใต้กราฟจริง = {this.state.real}</h1>
                            <h1>Error = {this.state.error}</h1>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default Trapezoidal;