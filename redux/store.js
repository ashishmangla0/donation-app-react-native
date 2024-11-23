// Importing the configureStore function from the Redux Toolkit
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Importing the User reducer from the ./reducers/User file
import UserReducer from "./reducers/userSlice";
import CategoriesReducer from "./reducers/categoriesSlice";
import DonationReducer from "./reducers/donationSlice";

// import logger from 'redux-logger'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";




const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const rootReducer = combineReducers({
  user: UserReducer,
  categories:CategoriesReducer,
  donations: DonationReducer
  
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },

});

// Exporting the store to be used in the app
export default store;
export const persistor = persistStore(store);
persistor.purge();