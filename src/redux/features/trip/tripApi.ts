import { baseApi } from "@/redux/baseApi/baseApi";
import { IReduxResponse } from "@/types/global";
import { TTravel } from "@/types/travel.types";
import { TTravelBuddy } from "@/types/travelBuddy.types";

const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all getTravels start here
    getTravels: build.query({
      query: (args) => {
        // console.log(args);
        return {
          url: "/trips",
          params: args,
        };
      },
      transformResponse: (response: IReduxResponse<TTravel[]>) => {
        return { response: response?.data, meta: response?.meta };
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
      invalidatesTags: ["trips", "travels"],
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
    //get popular travel
    getPopularTravel: build.query({
      query: () => {
        return {
          url: "/trips/popular-travel",
        };
      },
      transformResponse: (response: IReduxResponse<TTravel[]>) => {
        return {
          response,
        };
      },
    }),
    //get popular travel ends here
    // add buddy request start here
    addBuddyRequest: build.mutation({
      query: (data) => {
        return {
          url: `/trips/travel/${data.travelId}/request`,
          method: "POST",
          data,
        };
      },
      transformResponse: (response: IReduxResponse<TTravelBuddy>) => {
        console.log(response);
        return {
          response,
        };
      },
      // invalidatesTags:["buddy"]
    }),
    // add buddy request ends here
    // edit travel start here
    setTravel: build.mutation({
      query: ({ travelId, ...data }) => {
        console.log(data);
        return {
          url: `/trips/${travelId}/set-travel`,
          method: "PATCH",
          data,
        };
      },
      transformResponse: (response: IReduxResponse<TTravel>) => {
        return {
          response,
        };
      },
      invalidatesTags: ["trips", "travels"],
    }),
    // edit travel ends here
    // remove travel start here
    removeTravel: build.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/trips/${id}/remove-travel`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["trips", "travels"],
    }),
    // remove travel ends here
  }),
});

export const {
  useGetTravelsQuery,
  useAddTravelMutation,
  useGetTravelQuery,
  useAddBuddyRequestMutation,
  useRemoveTravelMutation,
  useSetTravelMutation,
  useGetPopularTravelQuery,
} = tripApi;
