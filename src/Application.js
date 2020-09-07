import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class Application extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 nx-auto col-md-8 mt-4">
                      <h4 className="text-capitaliza text-center">
                          Todo Input
                    </h4>  
                    <TodoInput />
                    <TodoList />
                    </div>
                </div>
            </div>
             
        );
    }
    }


export default Application;