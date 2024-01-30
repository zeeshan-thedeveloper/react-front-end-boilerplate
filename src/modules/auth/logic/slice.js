import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { loading: false },
    reducers: {
        toggleLoading: (state, action) => {
            state.loading = !state.loading;
        }
    },
});

export const { toggleLoading } = authSlice.actions;
export default authSlice.reducer;
