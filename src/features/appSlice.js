import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
  },
  reducers: {
    //enterRoom action
    enterRoom: (state, action) => { 
      // change room id
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

// selector - to get the dispatched ingo
export const selectRoomId = state => state.app.roomId;

export default appSlice.reducer;
