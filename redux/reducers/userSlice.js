import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
    firstname:'ashish',
    lastname:'mangla',
    iceCream: 20,
    userId: 2,
    profileImage:
      'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        updateFirstName:(state,action) =>{
            state.firstname = action.payload.firstname
        }
    },
    // Create extraReducer, that would wourk on calling the purge after an action
    extraReducers: (builder) => {
        builder.addCase(PURGE, (state) => {
          Object.assign(state, initialState); // Reset state properties
        });
      },
})

// Action creators are generated for each case reducer function
export const {updateFirstName } = userSlice.actions

export default userSlice.reducer