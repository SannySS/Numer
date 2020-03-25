import React, { Component } from 'react';
import * as math from 'mathjs';
import { Form,Card } from 'antd'
var matrixA = [], matrixB = [], i,j, answer =[], A = [], B = [];
class GaussElimination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: 0,
            collum: 0,
            showMatrixForm: false,
            showOutputCard:false
        }
        this.createMatrix = this.createMatrix.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.CramerRuleFun=this.CramerRuleFun.bind(this);
    }
    CramerRuleFun() {
        B=[];
        for(let i=0;i<this.state.row;i++){
            A[i]=[];
            for(let j=0;j<this.state.collum;j++){
                A[i][j]=parseFloat(document.getElementById("A["+i+"]["+j+"]").value)
            }
            B[i]=parseFloat(document.getElementById("B["+i+"]").value)
        }
        let counter=0; 
        while (counter !== this.state.row) { 
            let transformMatrix = JSON.parse(JSON.stringify(A));
            for (let i=0 ; i<this.state.row ; i++) {
                for (let j=0 ; j<this.state.collum ; j++) {
                    if (j === counter) {
                        transformMatrix[i][j] = B[i]
                        break;
                    }
                }
            }
            counter++;
            answer.push(<h2>X<sub>{counter}</sub>={Math.round(math.det(transformMatrix))/Math.round(math.det(A))}</h2>)
            answer.push(<br/>)
    }
    this.setState({showOutputCard:true})
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
                        <input name="row"  className="form-control" placeholder="A row"></input>
                        <input name="collum"  className="form-control" placeholder="A collum"></input>
                        <button onClick={() => this.createMatrix(this.state.row, this.state.collum)}>Submit</button>
                    </Form>
                    {this.state.showMatrixForm && <div><h2>Matrix [A]</h2><br />{matrixA}<h2>Vector [B]<br /></h2>{matrixB}</div>}
                    {this.state.showMatrixForm && <button onClick={() => this.CramerRuleFun()}>Submit</button>}
                    {this.state.showOutputCard &&
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{ width: "100%", background: "#3d683d", color: "#FFFFFFFF", float:"left"}}
                        onChange={this.handleChange}>
                        <p style={{fontSize: "24px", fontWeight: "bold"}}>{answer}</p></Card>}
                </div>
            </div>
        )
    }
}
export default GaussElimination