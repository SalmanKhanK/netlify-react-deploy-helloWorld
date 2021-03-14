// @ts-ignore
import Basketreducer from './Basketslice'
import {configureStore} from '@reduxjs/toolkit'
export const store = configureStore({
     reducer:{
         Products:Basketreducer
     }
});
