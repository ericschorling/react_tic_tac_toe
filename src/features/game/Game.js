import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayer, setPlayerAvatar, setOpponent, setWinState } from './gameSlice'

export const Game =()=>{
    const player = useSelector((state) => state.game.player)
    console.log(player)
    const dispatch = useDispatch()

    return (
        <>
            <form>
                <input type='text' onChange={(e)=> dispatch(setPlayer(e.target.value))}>What's your name?</input>
            </form>
        </>
    )
}