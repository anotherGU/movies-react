import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    trends: [],
  },
  reducers: {
    setSeriesTrends(state, action) {
      state.trends = action.payload;
    },
  },
});

export const { setSeriesTrends } = seriesSlice.actions;
export default seriesSlice.reducer;
