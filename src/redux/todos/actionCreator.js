import { ADDED, CLEARCOMPLETED, COMPLETEALL, DELETED, PRIORITY, TOGGLED } from "./actionType"

export const added = (todoText)=>{
    return{
        type:ADDED,
        payload:todoText
    }
}

export const toggled = (todoID)=>{
    return{
        type:TOGGLED,
        payload:todoID
    }
}

export const priority = (todoColor,todoID)=>{
    return{
        type:PRIORITY,
        payload:{
            todoID ,
            todoColor,
        }
    }
}

export const deleted = (todoID)=>{
    return {
        type:DELETED,
        payload:todoID
    }
}

export const completeAll = ()=>{
    return{
        type:COMPLETEALL
    }
}

export const clearCompleted = ()=>{
    return{
        type:CLEARCOMPLETED
    }
}