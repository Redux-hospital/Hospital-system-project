// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../store/authSlice';
// import messageSlice from '../store/messageSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     message:messageSlice,
//   },
// });



import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice';
import messageSlice from '../store/messageSlice';
import doctorReducer from '../store/doctorSlice';  
import adminAuthReducer from '../store/adminAuthSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageSlice,
    doctor: doctorReducer,  
    adminAuth: adminAuthReducer, 

  },
});