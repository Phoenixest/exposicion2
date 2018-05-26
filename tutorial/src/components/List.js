import React, { Component } from 'react';
import Answer from './Answer'
import Question from './Question'

class List extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
            error: null
        }
    }
    
    request(url){
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result, 
                    isLoaded: true
                })
            },
            (error) => {
                isLoaded: true,
                error
            }
        )
    }
    
    
    componentWillMount(){
        const question_id = this.props.question_id
        
        if(question_id){
            this.request()
        }else{
            this.request()
        }
    }
    
    render(){
        const { items, isLoaded, error } = this.state
        const question_id = this.props.question_id
        
        if(isLoaded){
            var list
            if(question_id){
                list = items.map((item) => <Answer key={item.id} item={item} />)
            }else{
                list = items.map((item) => <Question key={item.id} item={item} />)
            }
            return( <ul>{list}</ul> )
        }else{
            return( <h2>Loading...</h2>)
        }
    }
}

export default List