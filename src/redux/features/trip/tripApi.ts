import { baseApi } from "@/redux/baseApi/baseApi";
import { IMeta, IReduxResponse } from "@/types/global";
import { TTravel } from "@/types/travel.types";
import { TTravelBuddy } from "@/types/travelBuddy.types";

const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all getTravels start here
    getTravels: build.query({
      query: (args) => {
        console.log(args);
        return {
          url: "/trips",
          params: args,
        };
      },
      transformResponse: (response: IReduxResponse<TTravel[]>) => {
        return { response: response.data, meta: response.meta };
      },
      providesTags: ["trips"],
    }),
    // get all travel ends here
    //add a travel start here
    addTravel: build.mutation({
      query: (data) => {
        return {
          url: "/trips/create-travel",
          method: "POST",
          data,
        };
      },
      transformResponse: (response: IReduxResponse<TTravel>) => {
        console.log(response);
        return { response };
      },
      invalidatesTags: ["trips"],
    }),
    // add travel ends here
    // get travel start here
    getTravel: build.query({
      query: (args) => {
        return {
          url: `/trips/${args.id}`,
        };
      },
      transformResponse: (response: IReduxResponse<TTravel>) => {
        return {
          response,
        };
      },
      providesTags: ["trips"],
    }),
    // get travel ends here
    addBuddyRequest: build.mutation({
      query: (data) => {
        return {
          url: `/trips/travel/${data.travelId}/request`,
          method: "POST",
          data,
        };
      },
      transformResponse: (response: TTravelBuddy) => {
        return {
          response,
        };
      },
      // invalidatesTags:["buddy"]
    }),
  }),
});

export const {
  useGetTravelsQuery,
  useAddTravelMutation,
  useGetTravelQuery,
  useAddBuddyRequestMutation,
} = tripApi;
