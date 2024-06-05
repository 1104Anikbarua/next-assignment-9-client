// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from "@/helpers/axios/axios";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  // https://next-assignment-9-server.vercel.app/api/v1
  // http://localhost:5000/api/v1
  baseQuery: axiosBaseQuery({
    baseUrl: "https://next-assignment-9-server.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["user", "trips", "users", "travels"],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
