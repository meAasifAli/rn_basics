import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initial = {
    authUser: null
}


export const setUser = createAsyncThunk('auth/setUser', async (user, { dispatch }) => {

    await AsyncStorage.setItem('user', JSON.stringify(user));


    return user;
});

const userSlice = createSlice({
    name: "user",
    initialState: initial,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(setUser.fulfilled, (state, action) => {
            state.authUser = action.payload
        })
    }
})


export default userSlice.reducer