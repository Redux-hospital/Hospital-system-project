// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const loginAdmin = createAsyncThunk(
//   'adminAuth/login',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/admin/login',
//         { email, password },
//         { withCredentials: true }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );




// const adminAuthSlice = createSlice({
//   name: 'adminAuth',
//   initialState: {
//     admin: null,
//     isAuthenticated: false,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.admin = null;
//       state.isAuthenticated = false;
//       state.admin = null; // Reset the admin state

//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAdmin.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(loginAdmin.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isAuthenticated = true;
//         state.admin = action.payload;
//       })
//       .addCase(loginAdmin.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.message;
//       });
//   },
// });

// export const { logout } = adminAuthSlice.actions;

// export default adminAuthSlice.reducer;

////////////////////////////////////////////////////////////////////work


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAdmin = createAsyncThunk(
  'adminAuth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/admin/login',
        { email, password },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutAdmin = createAsyncThunk(
  'adminAuth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/admin/logout',
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState: {
    admin: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.admin = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.admin = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default adminAuthSlice.reducer;