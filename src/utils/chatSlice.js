import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessgage: (state, action) => {
            state.messages.push(action.payload)
        },
        clearMessages: (state) => {
            state.messages = []
        },
    },
});

export const { addMessgage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
