// @ts-ignore
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectBasket,remove } from '../Store/Basketslice'
import {ProductType} from '../Types/Global'

export const Basket = () => {
           const Basket=useSelector(SelectBasket);
              const dispatch=useDispatch();
           console.log(Basket.BasketProduct);
    return (
        <div>
            <div>
                {
                    Basket.BasketProduct.map((item:ProductType,key:number)=>{
                           return(
                           <div key={key}>
                               <p>{item.price}</p>
                               <button
                         
                               type="button" onClick={()=>dispatch(remove({id:item.id}))}>Delete</button>
                           
                           </div>
                           )
                    })
                }
            </div>
        </div>
    )
}
