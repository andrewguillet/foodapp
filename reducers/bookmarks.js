import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.value.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.value = state.value.filter(
        (bookmark) => bookmark.id !== action.payload.id
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
