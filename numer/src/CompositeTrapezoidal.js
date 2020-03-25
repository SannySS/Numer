import React, { Component } from 'react';
import { Form } from 'antd'
import { Container, Row, Col } from 'reactstrap';
var allInput = [], ans;
const axios = require("axios")
class CompositeTrapezoidal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            A: '',
            B: '',
            FA: '',
            FB: '',
            showAns:false
        }
        this.doFun = this.doFun.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.Auto = this.Auto.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    Auto() {
        console.log("sss")
        axios.get("http://localhost:3001/users/1")
            .then((response) => {
                this.setState({ A: response.data });
                this.setState({ B: this.state.API.n,FA: true })
                console.log(response)
            })
    }
    doFun(A,B,FA,FB){
         ans=0.5*(B-A)*(FA+FB)

        this.setState({showAns:true})
    }
    render() {
        return (
            <div>
                <label style={{ alignItems: "center" }}>Newton</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <Form onChange={this.handleChange}>
                        <input id="A" name="A" type="double" value={this.state.A} className="form-control" placeholder="A"></input>
                        <input id="B" name="B" type="double" value={this.state.B} className="form-control" placeholder="B"></input>
                        <input id="FA" name="A" type="double" value={this.state.FA} className="form-control" placeholder="FA"></input>
                        <input id="FB" name="B" type="double" value={this.state.FB} className="form-control" placeholder="FB"></input>
                        <button onClick={() => this.Auto()}>AUTO</button>
                        <button onClick={() => this.createInput(this.state.point)}>Submit</button>

                        {this.state.showInput && allInput}
                        {this.state.showInput && <button onClick={() => this.doFun(parseFloat(this.state.A), parseFloat(this.state.B),parseFloat(this.state.FA), parseFloat(this.state.FB))}>Submit</button>}
                        <Row>
                            <Col span={4}>col-8</Col>
                            <Col span={16}> {this.state.showInput && <input style={{ width: "50%", position: 'center' }} name="x" type="double" value={this.state.x} className="form-control" placeholder="x"></input>}
                            </Col>
                            <Col span={4}>col-8</Col>
                        </Row>
                    </Form>
                    {this.state.showAns && <h1>พื้นที่ใต้กราฟ = {ans}</h1>}
                </div>
            </div>
        )
    }
}
export default CompositeTrapezoidal;