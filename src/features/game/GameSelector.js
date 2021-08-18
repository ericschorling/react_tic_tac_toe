import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'


export const GameSelector =() =>{
    const history = useHistory()
    let gameNameArray = ['Tic-Tac-Toe','Texas Holdem','Checkers']
    let gameArray =['tictactoe', 'texasholdem', 'checkers']
    
    const _handleChange =(game) => {
        history.push(`/${game}`)
    }
    
    return (
        <>
            <h2>Choose a Game to Play</h2>
            <select name="games" id="game-select" onChange={(e)=>_handleChange(e.target.value)}>
                <option value=''>--Please choose an option</option>
                {gameArray.map((value,key)=>(
                    <option value={value} key={key}>{gameNameArray[key]}</option>
                ))}
            </select>
        </>
    )
}