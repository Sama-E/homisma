import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "light" : "dark";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  }
});

export const { setMode, setLogin, setLogout } = globalSlice.actions;

export default globalSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// //Global State
// const initialState = {
//   mode: "light",
//   user: null,
//   token: null,
// };

// //Auth state, Mode state + reducers
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setMode: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//     },
//     setLogin: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     setLogout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     setAssociates: (state, action) => {
//       if (state.user) {
//         state.user.associates = action.payload.associates;
//       } else {
//         console.error("User associates non-existent :(");
//       }
//     },
//   },
// });

// export const { setMode, setLogin, setLogout, setAssociates } =
//   authSlice.actions;
// export default authSlice.reducer;