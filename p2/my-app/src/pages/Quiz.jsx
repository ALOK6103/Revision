import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getProducts } from '../redux/action'
import QuizItem from './QuizItem'
const Quiz = () => {
    const products=useSelector((store)=>store.products.results)||[]
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getProducts())
    },[])

    const handleTrue=({correct_answer,question,incorrect_answers})=>{
      console.log(correct_answer,question)
      for(let i=0;i<products.length;i++){
       if( products[i].question==question){
        if(products[i].correct_answer==correct_answer){
          console.log("yes")
         
         
        }else{
          console.log("No")
          alert("Wrong answer")
        }
       }
      }
    }

    console.log(products)
  return (
    <div>
       <h1>Hello</h1>
       {products.map((el)=>(
         <QuizItem question={el.question} incorrect_answers={el.incorrect_answers} correct_answer={el.correct_answer} handleTrue={handleTrue} />
       ))}
    </div>
  )
}

export default Quiz