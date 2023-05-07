import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://645776130c15cb1482092a28.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact",
    async (content, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", {
                name: content.name,
                number: content.number
            }
        );

            return response.data
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);  
    }
    })

    export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
});