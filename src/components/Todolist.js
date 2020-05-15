import React from 'react'
export class Todolist extends React.Component{

     
    render(){
        return(
            <ul>
                 {this.props.todoList.map((todo,i)=>{
                    return(
                        <li className={todo.done ?'donetodo':null}
                         onClick={()=>{this.props.liClicked(todo)}} key={i}>
                            <span onClick={()=>{this.props.binClicked(todo)}}><i className="fa fa-trash"></i> </span>
                            {todo.todo}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

