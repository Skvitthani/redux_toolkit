import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fetchProduct', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const res = await response.json();
  return res;
});

const ProductSlice = createSlice({
  name: 'Product',
  initialState: {
    data: null as any,
    isLoader: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;
