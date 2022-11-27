import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";
import { meetingSlice } from "./slices/MeetingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    meetings: meetingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
