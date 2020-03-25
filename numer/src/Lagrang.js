import React, { Component } from 'react';
import { Form } from 'antd'
import { Container, Row, Col } from 'reactstrap';
var allInput = [], ans;
const axios = require("axios")
class Lagrang extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showInput: false,
            showAns: false,
            point: '',
            haveAuto: false,
            x: '',
            API: ''
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
                this.setState({ API: response.data });
                this.setState({ point: this.state.API.n, showInput: true })
                console.log(response)
            })
    }
    createInput(n) {
        allInput = [];
        for (var i = 0; i < n; i++) {
            allInput.push(
                <Container>
                    <Row>
                        <Col>
                            <input id={"X" + i} className="form-control" placeholder={"X" + i} />
                        </Col>
                        <Col>
                            <input id={"FX" + i} className="form-control" placeholder={"FX" + i} />
                        </Col>
                    </Row>
                </Container>
            )
        }
        allInput.push(<br />);
        this.setState({ showInput: true })
    }
    findL(x0,x1){

    }

    doFun(point, x) {
        let FX = [], X = []
        for (let i = 0; i < point; i++) {
            X[i] = parseInt(document.getElementById("X" + i).value)
            FX[i] = parseInt(document.getElementById("FX" + i).value)
        }
        ans = 0
        this.setState({ showAns: true })
    }
    render() {

        return (
            <div>
                <label style={{ alignItems: "center" }}>Newton</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <Form onChange={this.handleChange}>
                        <input id="pointInput" name="point" type="double" value={this.state.point} className="form-control" placeholder="n point"></input>
                        <button onClick={() => this.Auto()}>AUTO</button>
                        <button onClick={() => this.createInput(this.state.point)}>Submit</button>

                        {this.state.showInput && allInput}
                        {this.state.showInput && <button onClick={() => this.doFun(this.state.point, this.state.x)}>Submit</button>}
                        <Row>
                            <Col span={4}>col-8</Col>
                            <Col span={16}> {this.state.showInput && <input style={{ width: "50%", position: 'center' }} name="x" type="double" value={this.state.x} className="form-control" placeholder="x"></input>}
                            </Col>
                            <Col span={4}>col-8</Col>
                        </Row>
                    </Form>
                    {this.state.showAns && <h1>FX at x = {this.state.x} is {ans}</h1>}
                </div>
            </div>
        )
    }
}
export default Lagrang;