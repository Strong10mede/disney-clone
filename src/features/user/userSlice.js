import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};
//userSlice returns a object containing actions,caseReducers,getInitialState,name,reducer
//actions
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

//below {1,2} are the actions of the userSlice
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

//below user is the name of slice
//below functions are used to retrieve the data from current state
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export { userSlice };
export default userSlice.reducer;
