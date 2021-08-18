import React from 'react'
import { useGetPokemonByNameQuery } from '../../services/pokemon'
import { useDispatch } from 'react-redux'
import { setOpponent} from '../game/gameSlice'


export const PokeImage =  () =>{
    const randomPokeImage = Math.floor((Math.random() *100) +1)
    const dispatch = useDispatch()
    const { data, error, isLoading} = useGetPokemonByNameQuery(randomPokeImage)
    dispatch(setOpponent(data))

    return (
        <>
            {error ? (
                <p>Oh no there was an error</p>
            ) : isLoading ? (
                <>Loading</>
            ) : data ? (
                <img alt="random pokemon" src={`${data.sprites.front_default}`}></img>
            ) : null
            }
            
        </>
    )
}