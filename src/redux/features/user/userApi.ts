import { baseApi } from "@/redux/baseApi/baseApi";
import { TUser } from "@/types/user.types";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get login user information by token start here
    getMe: build.query({
      query: () => {
        return {
          url: "/user/profile",
        };
      },
      transformResponse: (response: TUser) => {
        return {
          response: response,
        };
      },
      providesTags: ["users"],
      // get login user information by token end here
    }),
  }),
});
export const { useGetMeQuery } = userApi;
