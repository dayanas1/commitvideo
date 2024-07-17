import { createSlice } from '@reduxjs/toolkit';

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState: {
    selectedImage: null,
  },
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setSelectedImage } = avatarSlice.actions;

export const selectAvatar = (state) => state.avatar.selectedImage;

export default avatarSlice.reducer;