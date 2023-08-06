import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, logOut } from "services/contactsApi";


export const logInThunk = createAsyncThunk('auth/login', async (body) => {
    return await logIn(body)
})

export const logOutThunk = createAsyncThunk('auth/logOut', async () => {
    return await logOut()
})