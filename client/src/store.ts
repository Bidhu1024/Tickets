import { configureStore } from '@reduxjs/toolkit';
import authReducer from './rtk/slices/authSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer
  }, 
});