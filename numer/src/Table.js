import React, { Component } from 'react';
//import table from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
class Bisection extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        {this.props.head}
                    </thead>
                    <tbody>
                        {this.props.data}
                    </tbody>
                </table>
            </div>
        );
    }




}
export default Bisection;
