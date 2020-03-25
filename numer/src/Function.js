import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Function extends Component {

    constructor(props) {
        super(props)
        this.state = {
            xl: [],
            xr: [],
            xm: [],
            fx: [],
        }
    }
    calculate = () => {
//----------------------------------Bisection------------------------------------------------------------
        if (this.props.p === "1") {
            var n=0;
            return(
                <h1>ddd</h1>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.calculate()
                }
            </div>
        );
    }






}
export default Function;