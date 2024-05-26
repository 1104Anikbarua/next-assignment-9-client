import { baseApi } from "@/redux/baseApi/baseApi";
import { IMeta } from "@/types/global";

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
    }),
    // get all travel ends here
    //add a travel start here
    addTravel: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/trips/create-travel",
          method: "POST",
          data,
        };
      },
      transformResponse: (response: TTravel) => {
        return { response };
      },
    }),
    // add travel ends here
  }),
});

export const { useGetTravelsQuery, useAddTravelMutation } = tripApi;
