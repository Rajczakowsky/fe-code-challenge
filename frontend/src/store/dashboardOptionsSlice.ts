import { createSlice } from '@reduxjs/toolkit';

interface StoreState {
  activeSymbol: string | null;
  showCardInfo: boolean;
}

const initialState: StoreState = {
  activeSymbol: '',
  showCardInfo: true
};

export const dashboardOptionsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    toggleShowCardInfo: (state) => {
      state.showCardInfo = !state.showCardInfo;
    },
    setAtiveSymbol: (state, action) => {
      state.activeSymbol = action.payload;
    }
  }
});

export const { toggleShowCardInfo, setAtiveSymbol } = dashboardOptionsSlice.actions;

export const selectShowCardInfo = (state: { store: StoreState }) => state.store.showCardInfo;

export default dashboardOptionsSlice.reducer;
