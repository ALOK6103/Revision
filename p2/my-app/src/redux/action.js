import * as types from "./actionTypes"
import axios from "axios"
export const getProducts=()=>async(dispatch)=>{
    dispatch({type:types.REQ_DATA})

    return axios.get(`https://opentdb.com/api.php?amount=10`)
    .then((r)=>{
        dispatch({type:types.GET_DATA,payload:r.data})
    })
    .then((r)=>{
        dispatch({type:types.ERR_DATA,payload:r})
    })
}

export const userData=()=>async(dispatch)=>{
    dispatch({type:types.REQ_USER})

    return axios.get(`https://opentdb.com/api.php?amount=10`)
    .then((r)=>{
        dispatch({type:types.GET_USER,payload:r.data})
    })
    .then((r)=>{
        dispatch({type:types.ERR_USER,payload:r})
    })
}

export const userAdd=(payload)=>async(dispatch)=>{
    dispatch({type:types.REQ_USER})

    return axios.post(`https://opentdb.com/api.php?amount=10`,payload)
    .then((r)=>{
        dispatch({type:types.ADD_USER,payload:r.data})
    })
    .then((r)=>{
        dispatch({type:types.ERR_USER,payload:r})
    })
}


