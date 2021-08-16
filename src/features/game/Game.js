import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayer, setPlayerAvatar, setOpponent, setWinState } from './gameSlice'

export const Game =()=>{
    const player = useSelector((state) => state.game.player)
    const [name, setName] = useState('')
    const [clicked, setClicked] = useState(false)
    console.log(name)
    const dispatch = useDispatch()
    console.log(player)

    const _handleClick = (e) => {
        e.preventDefault()
        dispatch(setPlayer(name))
        setName('')
        setClicked(true)

    }
    return (
        <>
            <div className="welcome">
                {clicked ? <h2 id="welcome">Welcome:</h2> : null}
                {player}
            </div>
            <form>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
                <input type="submit" value="Name" onClick={(e)=>_handleClick(e)}></input>
            </form>
        </>
    )
}