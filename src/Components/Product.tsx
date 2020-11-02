// @ts-ignore
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {SelectBasket,add} from '../Store/Basketslice'
import { ProductType } from '../Types/Global'
export const Product = () => {
           const state = useSelector(SelectBasket)
           const dispatch=useDispatch();
           console.log(state.ProductList)
           console.log(state.BasketProduct)
    return (
        <div>
            <div>
               {
                   state.ProductList.map((item:ProductType,key:number)=>{
                        
                        return(
                            <div key={key}>
                               <button 
                                disabled={item.added}
                               onClick={()=>dispatch(add(item))}>Add</button>

                            </div>
                   )
                   })
               }
            </div>
        </div>
    )
}

