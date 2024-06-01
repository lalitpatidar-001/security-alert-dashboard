import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"
import OverviewReducer from "./slices/overviewSlice";


const rootReducer = combineReducers({
    Overview : OverviewReducer
});

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    blacklist:["Overview"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewate) => getDefaultMiddlewate({
        serializableCheck: false,
        immutableCheck: false
    }),
});

const persistor = persistStore(store);

export { store, persistor }