import { createSlice } from "@reduxjs/toolkit";

export const ticTacToeSlice = createSlice ({
    name: 'tictactoe',
    initialState: {
        gameboard: [['','',''],['','',''],['','','']],
        player: 1,
        gameType: 1

    },
    reducers: {
        setPositionValue: (state, action) =>{
            state.gameboard = action.payload
        },
        setPlayerNumber: (state, action) =>{
            state.player = action.payload
        },
        setGameType: (state, action)=>{
            state.gameType = action.payload
        }
    }
})

export const {setPositionValue, setPlayerNumber} =ticTacToeSlice.actions
export default ticTacToeSlice.reducer