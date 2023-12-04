import {combineReducers, configureStore} from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import recommendedReducer from './recommended/recommendedSlice'
import categoriesReducer from './categories/categoriesSlice'
import productsReducer from './products/productsSlice'
const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    recommended: recommendedReducer,
    categories: categoriesReducer,
    products: productsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
    reducer: persistedReducer
})



export const persistor = persistStore(store)