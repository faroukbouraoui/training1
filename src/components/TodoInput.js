import React, { Component } from 'react';
import TodoList from './TodoList';

export default class TodoInput extends Component {
    render() {
        return( <div className="card card-body my-3">
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                          <i class="fas fa-book"></i>
                        </div>
                    </div>
                <input type="text" className="form-control text-capitalize" placeholder="add a todo item" />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                    add item</button>
            </form>
        </div>

        );  
    }
}
