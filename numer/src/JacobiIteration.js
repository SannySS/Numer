import React, { Component } from 'react';
import { Form } from 'antd'
var matrixA = [], matrixB = [], i, j;
class JacobiIteration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: '',
            collum: '',
            showMatrixForm: false
        }
        this.createMatrix = this.createMatrix.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    createMatrix(row, collum) {
        matrixA = []
        matrixB = []
        for (i = 0; i < this.state.row; i++) {
            for (j = 0; j < this.state.collum; j++) {
                matrixA.push(
                    <input id={"a[" + i + "][" + j + "]"} key={"a[" + i + "][" + j + "]"} placeholder={"a[" + i + "][" + j + "]"} />
                )
            }
            matrixA.push(<br />)
            matrixB.push(
                <input id={"b[" + i + "]"} key={"b[" + i + "]"} placeholder={"b[" + i + "]"} />
            )
        }
        this.setState({ showMatrixForm: true });
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    CramerRuleFun(){
        
    }
    render() {

        return (
            <div>
                <label style={{ alignItems: "center" }}>CramerRule</label>
                <div style={{ paddingLeft: 100, paddingRight: 100 }} >
                    <Form onChange={this.handleChange}>
                        <input name="row" type="double" defaultValue={this.state.row} className="form-control" placeholder="A row"></input>
                        <input name="collum" type="double" defaultValue={this.state.collum} className="form-control" placeholder="A collum"></input>
                        <button onClick={() => this.createMatrix(this.state.row, this.state.collum)}>Submit</button>
                    </Form>
                    {this.state.showMatrixForm && <div><h2>Matrix [A]</h2><br />{matrixA}<h2>Vector [B]<br /></h2>{matrixB}</div>}
                    {this.state.showMatrixForm && <button onClick={() => this.CramerRuleFun()}>Submit</button>}

                </div>
            </div>
        )
    }
}
export default JacobiIteration;