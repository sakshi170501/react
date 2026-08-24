import { configureStore } from '@reduxjs/toolkit'
import { Pasteslice } from './Redux/Pasteslice'

export const store = configureStore({
  reducer: {paste: Pasteslice.reducer,
    
  },
})