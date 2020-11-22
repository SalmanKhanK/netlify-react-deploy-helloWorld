// @ts-ignore
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, Container} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux'
import { SelectBasket,remove } from '../Store/Basketslice'
import {ProductType} from '../Types/Global'

export const Basket = () => {
           const Basket=useSelector(SelectBasket);
              const dispatch=useDispatch();
              var BasketList=Basket.BasketProduct
           if(!BasketList.length){
            return <h1>Empty Cart</h1>
        }
         var Total:number=0;
           for(var i=0;i < BasketList.length;i++){
               console.log(BasketList[i].price)
               Total=Total+BasketList[i].price;
           }
    return (
        <div>
            <h1>Shopping Basket</h1>
            <h3>You have {BasketList.length} items in your basket</h3>
            <div>
                {
                    BasketList.map((item:ProductType,key:number)=>{
                           
                           return(
                           <Container key={key}>
                             <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div>
                               <p>{item.title}</p>
                                   <p><strong>{item.price}$</strong>_{item.description}</p>
                               </div>
                                <Button
                                type="button" onClick={()=>dispatch(remove({id:item.id}))}>
                                    <DeleteIcon fontSize="small" />
                                </Button>
                             </div>
                             <hr/>
                           </Container>
                           )
                    })
                }
            </div>
            <Container>
            <h1 style={{display:"flex",justifyContent:"flex-end"}}>{Total}$</h1>
            </Container>
        </div>
    )
}
