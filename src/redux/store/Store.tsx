import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../reducer/UserReducer';
import ProductSlice from '../reducer/ProducReducer';

const MyStore = configureStore({
  reducer: {
    user: UserReducer as any,
    product: ProductSlice as any,
  },
});

export default MyStore;
