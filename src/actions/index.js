import axios from 'axios'

export const FETCH_TODOS = 'FETCH_TODOS'
const URL = `https://fast-ocean-85543.herokuapp.com/todos`

export function fetchTodos(){

    return (dispatch)=>{
        axios.get(URL)
          .then(res=>dispatch({
              type:FETCH_TODOS,
              data:res.data
          }))
          .catch(error=>{
              console.log(error)
          })
        
        
        
    }
    
      
      
    
    
    
    
}

