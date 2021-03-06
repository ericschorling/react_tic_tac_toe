import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import gameReducer from '../features/game/gameSlice'
import { pokemonApi } from '../services/pokemon'
import ticTacToeReducer from '../features/game/ticTacToeSlice'

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        game: gameReducer,
        tictactoe: ticTacToeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)