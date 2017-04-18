import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../actions/index'



class Todos extends Component{
    componentWillMount(){
        this.props.fetchTodos()
        
    }
    
    render(){
        console.log('this.props', this.props)
        
        return(
            <div>
                Todos
            </div>
            
        )
    }
}
export default connect(null, {fetchTodos})(Todos)