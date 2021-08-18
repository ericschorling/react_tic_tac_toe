import React from 'react'
import { useSelector } from 'react-redux'

export const TicTacToeContainer =(props) =>{
    const gameBoard = useSelector((state) => state.tictactoe.gameboard)
    return (
        <div className="tttContainer">
            {gameBoard[props.row][props.position]}
        </div>
    )
}