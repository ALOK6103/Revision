import React, { useState } from 'react'

const QuizItem = ({question,incorrect_answers,correct_answer,handleTrue

}) => {
  const [se,setSe]=useState(false)
  return (
    <div>
        <h3>Q:{question}</h3>
        <div>
            <p onClick={()=>handleTrue({question,incorrect_answers})} >{incorrect_answers
[0]}</p>
<p onClick={()=>handleTrue({question,incorrect_answers})} >{incorrect_answers
[1]}</p>
<p onClick={()=>handleTrue({question,incorrect_answers})} >{incorrect_answers
[2]}</p>
<p onClick={()=>handleTrue({correct_answer,question},setSe(true))} style={{backgroundColor:se==true? "green":""}} >{correct_answer
}</p>
        </div>
    </div>
  )
}

export default QuizItem