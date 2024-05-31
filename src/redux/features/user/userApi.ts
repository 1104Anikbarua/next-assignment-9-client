import { baseApi } from "@/redux/baseApi/baseApi";
import { IReduxResponse } from "@/types/global";
import { TTravel } from "@/types/travel.types";
import { TRequestedTravel } from "@/types/travelRequest.types";
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
      transformResponse: (response: IReduxResponse<TUser>) => {
        console.log(response);
        return {
          response: response,
        };
      },
      providesTags: ["user"],
      // get login user information by token end here
    }),
    // get requested travel start here
    getRequestedTravel: build.query({
      query: () => {
        return {
          url: "/trips/travel-request",
        };
      },
      transformResponse: (response: IReduxResponse<TRequestedTravel[]>) => {
        return {
          response,
        };
      },
    }),
    // get reqested travel ends here
    // get all travels by user id
    getMyPostedTravels: build.query({
      query: () => {
        return {
          url: "/trips/posted-travels",
        };
      },
      transformResponse: (response: IReduxResponse<TTravel[]>) => {
        return {
          response,
        };
      },
    }),
    // get all traveles by user id
    // get all users
    getUsers: build.query({
      query: () => {
        return {
          url: "/user",
        };
      },
      transformResponse: (response: IReduxResponse<TUser[]>) => {
        return {
          response,
        };
      },
      providesTags: ["users"],
    }),
    // get all users
    //set user status
    setStaus: build.mutation({
      query: ({ id, ...data }) => {
        console.log(data);
        return {
          url: `/user/${id}/set-status`,
          method: "PATCH",
          data,
        };
      },
      transformResponse: (response: IReduxResponse<TUser>) => {
        console.log(response);
        return {
          response,
        };
      },
      invalidatesTags: ["users"],
    }),
    //set user status
  }),
});
export const {
  useGetMeQuery,
  useGetRequestedTravelQuery,
  useGetMyPostedTravelsQuery,
  useGetUsersQuery,
  useSetStausMutation,
} = userApi;
