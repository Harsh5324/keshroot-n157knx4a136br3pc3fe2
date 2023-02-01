import { configureStore } from "@reduxjs/toolkit";

import { homeApiReducer } from "./slices";

export default configureStore({
    reducer: {
        homeApi: homeApiReducer,
    }
})