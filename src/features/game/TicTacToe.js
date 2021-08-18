import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerNumber, setPositionValue } from './ticTacToeSlice'
import { TicTacToeContainer } from './TicTacToeContainer'
import { gameUpdater } from './functions/gameUpdater'
import { simplePlayLogic } from './functions/npcTicTacToeLogic'
import { setWinState } from './gameSlice'

export const TicTacToe =() =>{
    const rowPosTop =[0,1,2]
    const rowPosMiddle =[0,1,2]
    const rowPosBottom =[0,1,2]
    const [gameOver, setGameOver] = useState(undefined)
    const dispatch = useDispatch()
    const playerName = useSelector((state) => state.game.player)
    const playerNumber = useSelector((state) => state.tictactoe.player)
    const winState = useSelector((state) => state.game.winState)
    const pokemonOpponent = useSelector((state)=>state.game.opponent)
    const gameBoard = useSelector((state) => state.tictactoe.gameboard)
    let [turn, setTurn] = useState(1)
    
    const _handleResetClick =() =>{
        const reset =[['','',''],['','',''],['','','']]
        dispatch(setPositionValue(reset))
        setTurn(1)
        setGameOver(undefined)
    }
    useEffect(()=>{
        turn === 1 ?
            console.log('first turn')
        :
        setTimeout(()=>{
            let newGameBoardTwo = gameUpdater(gameBoard,simplePlayLogic(gameBoard),2)
            dispatch(setPositionValue(newGameBoardTwo[0]))
            if(newGameBoardTwo[1]){
                setGameOver(1)
                dispatch(setWinState(newGameBoardTwo[2]))
            }},
            1000
        )
    }, [turn, setTurn])
    
    const _handleSelect = (posArray)=>{
        if (!gameOver){
            let newPlayer = playerNumber
            let newGameBoard = gameUpdater(gameBoard,posArray,newPlayer)
            dispatch(setPositionValue(newGameBoard[0]))
            if(newGameBoard[1]){
                setGameOver(1)
                dispatch(setWinState(newGameBoard[2]))
            } else {
                setTurn(turn+=1)
            }
        }
    }
    
    return (
        <>
            <h1>Tic Tac Toe</h1>
            {gameOver ? <h2>Winner Is: {winState}s</h2> : null}
            <div className="tictactoeContainer">
                <div className="playerColumn">
                    <h1>Player 1: {playerName}</h1>
                    <p>You're playing Xs</p>
                </div>
                <div className="gameBoard">
                    <div className="topRow">
                        {rowPosTop.map((value, index)=>
                           <span 
                            className={`top${index}`} 
                            key={index}
                            onClick={()=>_handleSelect([0,value])}>
                                <TicTacToeContainer row={0} position={value} />
                            </span>
                        )}
                    </div>
                    <div className="midRow">
                        {rowPosMiddle.map((value, index)=>
                           <span 
                            className={`mid${index}`} 
                            key={index}
                            onClick={()=>_handleSelect([1,value])}>
                                <TicTacToeContainer row={1} position={value} />
                            </span>
                        )}
                    </div>
                    <div className="bottomRow">
                        {rowPosBottom.map((value, index)=>
                           <span 
                            className={value === 2 ? null : "bot"}
                            key={index}
                            onClick={()=>_handleSelect([2,value])}>
                                <TicTacToeContainer row={2} position={value} />
                            </span>
                        )}
                    </div>
                </div>
                <div className="playerColumn">
                    {pokemonOpponent ? 
                        <>
                            <h1>Opponent: {pokemonOpponent.name.toUpperCase()}</h1>
                            <img alt="random pokemon" src={`${pokemonOpponent.sprites.front_default}`}></img>  
                        </>
                        : null
                    }
                </div>
            </div>
            <div 
                className="resetGame" 
                onClick={(e)=>_handleResetClick(e)}
                >
                reset
            </div>
            {/* <div 
                className="resetGame" 
                onClick={(e)=>_handleEndTurn()}
                >
                end turn
            </div> */}
        </>
    )
}