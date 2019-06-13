import { createSlice, PayloadAction } from "redux-starter-kit";

export const counterInitialState = 0;

const counterModule = createSlice({
    slice: "counter",
    initialState: counterInitialState,
    reducers: {
        increment: (state, action: PayloadAction<void>) => state + 1,
        decrement: (state, action: PayloadAction<void>) => state - 1
    }
});

export default counterModule;
