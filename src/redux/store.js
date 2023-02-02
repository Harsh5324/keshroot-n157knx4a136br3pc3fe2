import { configureStore } from "@reduxjs/toolkit";

import { homeApiReducer, authReducer, authPageReducer } from "./slices";

export default configureStore({
    reducer: {
        homeApi: homeApiReducer,
        showAuth: authReducer,
        authPage: authPageReducer,
    }
})