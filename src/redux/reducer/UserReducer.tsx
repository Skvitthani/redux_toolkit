import {createSlice} from '@reduxjs/toolkit';

interface UserItem {
  name: string;
  age: number;
  city: string;
}

interface UserState {
  userData: UserItem[];
}
const initialState: UserState = {
  userData: [],
};

const userReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    useraction: (state, action) => {
      state.userData.push(action.payload);
    },
  },
});

export const {useraction} = userReducer.actions;

export default userReducer.reducer;
