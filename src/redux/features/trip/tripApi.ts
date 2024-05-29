import { baseApi } from "@/redux/baseApi/baseApi";
import { IMeta } from "@/types/global";
import { TTravel } from "@/types/travel.types";

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
      transformResponse: (response: TTravel[], meta: IMeta) => {
        return { response, meta };
      },
      providesTags: ["trips"],
    }),
    // get all travel ends here
    //add a travel start here
    addTravel: build.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "/trips/create-travel",
          method: "POST",
          data,
        };
      },
      transformResponse: (response: TTravel) => {
        return { response };
      },
      invalidatesTags: ["trips"],
    }),
    // add travel ends here
    // get travel start here
    getTravel: build.query({
      query: (args) => {
        console.log(args);
        return {
          url: `/trips/${args.id}`,
        };
      },
      transformResponse: (response: TTravel) => {
        return {
          response,
        };
      },
      providesTags: ["trips"],
    }),
    // get travel ends here
    addBuddyRequest: build.mutation({
      query: (args) => {
        console.log(args);
        return {
          url: `/travel/${args?.travelId}/request`,
          method: "POST",
          // args,
        };
      },
      transformResponse: (response: TTravel) => {
        return {
          response,
        };
      },
      // invalidatesTags:[]
    }),
  }),
});

export const {
  useGetTravelsQuery,
  useAddTravelMutation,
  useGetTravelQuery,
  useAddBuddyRequestMutation,
} = tripApi;
