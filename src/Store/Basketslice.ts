import {createSlice} from '@reduxjs/toolkit';

import { ProductType } from '../Types/Global';
import {ProductList} from './State'
const BasketProuctArray:ProductType[]= [];
const BasketSlice=createSlice({
    name:"Basket",
    initialState:
    {
        ProductList,
        BasketProduct:BasketProuctArray
      
    },
    reducers:{
        add:(state,action)=> {
       
         state.ProductList.map(item=>{
                if(item.id===action.payload.id){
                     state.BasketProduct.push(action.payload)
                     item.added=true
                        
     }
              
            })
          return;
            
            },
       
        remove:(state,action)=>{
          
          const indexFind=(ev:ProductType)=>JSON.stringify(ev.id)===JSON.stringify(action.payload.id)
          const delIndex=JSON.stringify(state.BasketProduct.findIndex(indexFind))
           JSON.stringify(state.BasketProduct.splice(Number(delIndex),1))
        }
   }
});
export const {add,remove} =BasketSlice.actions
export const SelectBasket=(state:any)=>state.Products;
export default BasketSlice.reducer