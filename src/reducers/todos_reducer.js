import {FETCH_TODOS} from '../actions/index'

export default function(state = [], action){
    
    switch(action.type){
        case FETCH_TODOS:
            console.log('reducer action.data : ', action.data)
            return Object.assign({}, state, {todos:action.data})
    }
    
    return state
    
}