import React from 'react'
import { useGetPokemonByNameQuery } from '../../services/pokemon'


export const PokeImage =  () =>{
    const randomPokeImage = Math.floor((Math.random() *100) +1)
    const { data, error, isLoading} = useGetPokemonByNameQuery(randomPokeImage)
    // let imageUrl = setImage()
    // console.log(imageUrl)
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