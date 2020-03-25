import React, { Component } from 'react';
import { Layout } from 'antd';
import Menubar from './Menubar';
import Bisection from './Bisection';
import B from './B';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Router
} from 'react-router-dom';
class Head extends Component {
    constructor(props){
        super(props)
        this.state={
        pagecontent : '',
        };
        this.callback=this.callback.bind(this);
      }
    callback = (v) => {
        this.setState({
            pagecontent : v
        })
    }
    render() {
        const { Header, Sider, Content, Footer } = Layout;
        return (
            <div>
                <Layout>
                    <div>
                        <Header>
                            <h2 style={{textAlign:"center"}}>aaa</h2>
                        </Header>
                    </div>
                    <Layout>
                        <Sider>
                            <div>
                                <Menubar pagecontent = {this.callback} />
                            </div>
                        </Sider>
                        <Layout>
                            <Content style={{padding: 1,margin: 5,minHeight: 10}}>
                                <B page={this.state.pagecontent}/>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>


        );
    }
}
export default Head;