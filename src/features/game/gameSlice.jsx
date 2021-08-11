import {createSlice} from '@reduxjs/toolkit'

export const gameSlice = createSlice ({
    name:'game',
    initialState: {
        player: '',
        playerAvatar: '',
        opponent:'',
        winState: false
    },
    reducers: {
        setPlayer: (state, action) => {
            state.player = action.payload
        },
        setPlayerAvatar: (state, action) => {
            state.playerAvatar = action.payload
        } ,
        setOpponent: (state, action) =>{
            state.opponent = action.payload
        },
        setWinState: (state, action) => {
            state.winState = action.payload
        }
    }
})

export const { setPlayer, setPlayerAvatar, setOpponent, setWinState} = gameSlice.actions

export default gameSlice.reducer