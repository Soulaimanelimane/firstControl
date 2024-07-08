import { createSlice, current } from "@reduxjs/toolkit"



const FruitSlice = createSlice({
    name: 'fruit', 
    initialState : []  ,
    reducers :{
        Addfruits:(state , action ) =>{
            const {id, name, price , time }= action.payload
           state.push({id, name, price, time}) ; 
          
        }
        ,
        ModifyFruit: (state , action )=>{
            const {id, name, price , time}= action.payload

            const index = state.findIndex(fr => fr.id ===id ) ; 

            state[index] = {id, name, price , time} ;  

            console.log(current(state));





            
        },
        DeleteFruit:(state, action)=>{
             const {id} = action.payload ;   
             const index = state.findIndex(fr => fr.id === id ) ; 

             if (index !== -1) {
                 state.splice(index ,1 ) ; 
             }

        }
              
            
        }
    }
)
export const  {Addfruits, ModifyFruit , DeleteFruit} = FruitSlice.actions
export default FruitSlice.reducer