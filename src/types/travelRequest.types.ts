import { TTravel } from "./travel.types";

export type TRequestedTravel = {
  createdAt: string;
  id: string;
  status: string;
  travel: TTravel;
  travelId: string;
  tripId: null;
  updatedAt: string;
  userId: string;
};
