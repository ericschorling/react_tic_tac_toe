import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GameSelector } from './GameSelector'
import { setPlayer} from './gameSlice'

export const Game =()=>{
    const player = useSelector((state) => state.game.player)
    const [name, setName] = useState('')
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()

    const _handleClick = (e) => {
        e.preventDefault()
        dispatch(setPlayer(name))
        setName('')
        setClicked(true)
    }

    return (
        <>
            
            {clicked || player ? 
                <div className="welcome">
                    <h2 id="welcome">Welcome:</h2>
                    {player}
                    <GameSelector /> 
                </div> :
                <form>
                    <label for="input">Tell who you are: </label>
                    <input type='text' id="input" value={name} onChange={(e)=> setName(e.target.value)}></input>
                    <input type="submit" value="I am" onClick={(e)=>_handleClick(e)}></input>
                </form>
            }
        </>
    )
}