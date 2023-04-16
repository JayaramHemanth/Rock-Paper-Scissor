import React from 'react'
import {useState} from 'react'
import './game.css'

const Game = () => {
    const [player , setPlayer] = useState(null)
    const [computer , setComputer] = useState(null)
    const [result, setResult] = useState(null)

    const choices = ['rock','paper','scissor']

    const handleClick = (choice) =>{
        const computer = choices[Math.floor(Math.random()*3)]
        const result = getResult(choice,computer)
        console.log(getResult(choice,computer))
        setPlayer(choice)
        setComputer(computer)
        setResult(result)
    }
    const getResult = (player ,computer ) =>{
        if(player === computer){
            return 'tie'
        }
        else if(
            (player === 'rock' && computer === 'scissor') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissor' && computer === 'paper')            
        ){
            return 'you win!'
        }
        else{
            return 'you lose!'
        }
    }

  return (
    <div className='game'>
        <h1>Rock Paper Scissor</h1>
        <div className='player'>
           <button className='btn1' onClick={()=>handleClick('rock')}>Rock</button>
           <button className='btn2' onClick={()=>handleClick('paper')}>Paper</button>
           <button className='btn3' onClick={()=>handleClick('scissor')}>Scissor</button>
        
    </div>
    <div className='content'>
    {player && (
        <>
        <p>
          You chose <span>{player}</span>, computer chose <span>{computer} </span>.
        </p>
        <h1> <span className='result'>{result}</span></h1>
        </>
      )}
    </div>
    </div>
  )
}

export default Game