import { ADD_ITEM,EDIT_ITEM,DELETE_ITEM } from "./TodoType"
export const addItem = (data)=>{
    return {
        type :ADD_ITEM,
        payload :data
    }
}
export const editItem = (data)=>{
    return {
        type :EDIT_ITEM,
        payload :data
    }
}
 export const deleteItem =(id)=>{
    return {
        type:DELETE_ITEM,
         id

    }
}