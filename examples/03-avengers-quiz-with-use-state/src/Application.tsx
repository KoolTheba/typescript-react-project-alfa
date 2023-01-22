import { useState } from 'react'
import questions from "./questions";

import './App.css'

type QuestionProps = {
  question: string,
  answer: string,
  style?: React.CSSProperties
}

const QuestionBlock = ({ question, answer }: QuestionProps) => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <>
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={!isHidden ? "blurred" : "clear"}>{answer}</span>
      </p>
      <footer>
        <button
          type='submit'
          onClick={() => setIsHidden(!isHidden)}
        >Toggle Answer</button>
      </footer>
    </article>
    </>
  )
}

const Application = () => {
  return (
    <main>
      {questions.map((item) => (
        <QuestionBlock question={item.question} answer={item.answer} key={item.id}/>
      ))}
    </main>
  )
}

export default Application;
