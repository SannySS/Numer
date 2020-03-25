import React, { Component } from 'react';
import * as math from 'mathjs';
import { Form, Card } from 'antd'
var matrixA = [], matrixB = [], i, j, A = [], B = [], showAnswer = [];
//const axios = require("axios")
class LUDecomposition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: 0,
            collum: 0,
            showMatrixForm: false,
            showOutputCard: false
        }
        this.createMatrix = this.createMatrix.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.LUDecompositionFun = this.LUDecompositionFun.bind(this);
    }
    LUDecompositionFun() {
        B = [];
        for (i = 0; i < this.state.row; i++) {
            A[i] = [];
            for (j = 0; j < this.state.collum; j++) {
                A[i][j] = parseFloat(document.getElementById("A[" + i + "][" + j + "]").value)
            }
            B[i] = parseFloat(document.getElementById("B[" + i + "]").value)
        }
        var counter = 0;
        console.log(A)
        console.log(B)
        var answer = math.lusolve(A, B);
        while (counter !== this.state.row) {
            showAnswer.push(<h2>X<sub>{counter + 1}</sub>={answer[counter]}</h2>);
            showAnswer.push(<br />)
            counter++;
        }
        this.setState({ showOutputCard: true })
    }
    createMatrix(row, collum) {
        matrixA = [];
        matrixB = [];
        for (i = 0; i < this.state.row; i++) {
            for (j = 0; j < this.state.collum; j++) {
                matrixA.push(
                    <input id={"A[" + i + "][" + j + "]"} key={"A[" + i + "][" + j + "]"} placeholder={"A[" + i + "][" + j + "]"} />
                )
            }
            matrixA.push(<br />)
            matrixB.push(
                <input id={"B[" + i + "]"} key={"B[" + i + "]"} placeholder={"B[" + i + "]"} />
            )
        }
        this.setState({ showMatrixForm: true });
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {

        return (
            <div>
                <label style={{ alignItems: "center" }}>CramerRule</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <Form onChange={this.handleChange}>
                        <input name="row" className="form-control" placeholder="A row"></input>
                        <input name="collum" className="form-control" placeholder="A collum"></input>
                        <button onClick={() => this.createMatrix(this.state.row, this.state.collum)}>Submit</button>
                    </Form>
                    {this.state.showMatrixForm && <div><h2>Matrix [A]</h2><br />{matrixA}<h2>Vector [B]<br /></h2>{matrixB}</div>}
                    {this.state.showMatrixForm && <button onClick={() => this.LUDecompositionFun()}>Submit</button>}
                    {this.state.showOutputCard &&<div>{showAnswer}</div>}
                </div>
            </div>
        )
    }
}
export default LUDecomposition