import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: { currentTheme: {}, isThisValidTanent: false },
    reducers: {
        setCurrentTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
        setIsThisValidTanent: (state, action) => {
            state.isThisValidTanent = action.payload;
        },
    },
});

export const { setCurrentTheme, setIsThisValidTanent } = appSlice.actions;
export default appSlice.reducer;
