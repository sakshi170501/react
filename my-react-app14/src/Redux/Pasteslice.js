import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
};

export const Pasteslice = createSlice({
  name: 'paste',
  initialState,

  reducers: {
    addtopaste: (state, action) => {
      // add a check whether the title is added or not
      const paste = action.payload;

      state.pastes.push(paste);

      localStorage.setItem(
        'pastes',
        JSON.stringify(state.pastes)
      );

      toast('Paste created successfully');

      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library.
    },

    updatetopaste: (state, action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>
      item.id==paste._id);
      if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste updated");
      }
      
    },

    resetallpastes: (state, action) => {
      state.pastes=[];
      localStorage.removeItem('pastes');
      
    },

    removefrompastes: (state, action) => {
      const pasteid=action.payload;
      console.log(pasteid);
      const index=state.pastes.findIndex((item)=>
      item._id==pasteid);
      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success('paste deleted');
      }
      
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addtopaste,
  updatetopaste,
  resetallpastes,
  removefrompastes,
} = Pasteslice.actions;

export default Pasteslice.reducer;