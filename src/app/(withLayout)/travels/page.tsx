"use client";
import { useGetTravelsQuery } from "@/redux/features/trip/tripApi";

import {
  Stack,
  Box,
  Container,
  Button,
  Pagination,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import React, { useState } from "react";
import TravelsCard from "./components/TravelCard";
import Filter from "./components/TravelFilter";
import dayjs from "dayjs";
import { TTravel } from "@/types/travel.types";
import TbSearchBar from "@/components/Ui/Form/TbSearchBar";
import SkeletonCard from "@/components/Ui/Skeleton/SkeletonCard";
// show all the travel with search fucntiolity
// See More Button: Button at the bottom of the cards that redirects to the Travels page, displaying all trips with search functionality.
// Features:
// Search and Filter Options:
// Destination
// Travel dates
// Travel type
// Keywords in description
// Travel Cards: Display all travel posts in card format with pagination.

type Anchor = "right";
const AllTravels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [filter, setFilter] = useState<{
    destination?: string;
    startDate?: string;
    endDate?: string;
    travelType?: string;
  }>({
    destination: "",
    startDate: "",
    endDate: "",
    travelType: "",
  });
  const [state, setState] = React.useState(false);
  // store all the filter query
  const query: Record<string, unknown> = {};
  query["page"] = page;
  query["limit"] = limit;
  query["searchTerm"] = searchTerm?.length ? searchTerm : {};
  query["destination"] = filter.destination?.length ? filter.destination : {};
  query["startDate"] = filter.startDate?.length ? filter.startDate : {};
  query["endDate"] = filter.endDate?.length ? filter.endDate : {};
  query["travelType"] = filter.travelType?.length ? filter.travelType : {};
  // console.log(searchTerm);
  const handleSearh = () => {};
  // get all travel api start
  const { data, isLoading, isFetching } = useGetTravelsQuery({ ...query });
  // get all travel api end
  const travels = data?.response;
  const meta = data?.meta;
  // console.log(travels, meta);

  // pagination page change handler
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  // 00-eslint-disable-next-line 00-@typescript-eslint/no-explicit-any-00
  //remove duplicate values and get uniue value
  const getUniqueValues = (key: keyof TTravel) => {
    const uniqueValues = new Set<string>();

    const filters = data?.response
      ?.map((item: TTravel) => {
        const value = String(item[key]) || "";
        if (!uniqueValues.has(value)) {
          uniqueValues.add(value);
          return {
            // text: value,
            key,
            value: value,
          };
        }
        return null;
      })
      .filter((filter) => filter !== null); //remove null and send not null object
    return filters;
  };
  const destinations = getUniqueValues("destination");
  const startDates = getUniqueValues("startDate")?.sort(
    (
      a: { key: keyof TTravel; value: string } | null,
      b: { key: keyof TTravel; value: string } | null
    ) => {
      if (a?.value && b?.value) {
        return dayjs(a?.value).valueOf() - dayjs(b?.value).valueOf();
      }
      if (!a?.value && b?.value) {
        return 1;
      }
      if (a?.value && !b?.value) {
        return -1;
      }
      return 0;
    }
  );
  const endDates = getUniqueValues("endDate")?.sort(
    (
      a: { key: keyof TTravel; value: string } | null,
      b: { key: keyof TTravel; value: string } | null
    ) => {
      if (a?.value && b?.value) {
        return dayjs(a?.value).valueOf() - dayjs(b?.value).valueOf();
      }
      if (!a?.value && b?.value) {
        return 1;
      }
      if (a?.value && !b?.value) {
        return -1;
      }
      return 0;
    }
  );
  const travelTypes = getUniqueValues("travelType");
  // right side filter drawer
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };
  //

  // console.log(filter);
  return (
    <Container>
      {/* drawer  */}
      <Filter
        destinations={destinations}
        startDates={startDates}
        endDates={endDates}
        travelTypes={travelTypes}
        toggleDrawer={toggleDrawer}
        filter={filter}
        setFilter={setFilter}
        state={state}
        setState={setState}
        setSearchTerm={setSearchTerm}
      />
      <Stack sx={{ py: 10 }} rowGap={2}>
        <Stack
          direction={{ xs: "row", sm: "row" }}
          justifyContent={"space-between"}
          rowGap={{ xs: 1, sm: 1 }}
        >
          {/* drawer open button  */}
          <Box>
            <Button
              onClick={toggleDrawer("right", true)}
              startIcon={<FilterAlt />}
            />
          </Box>
          {/* search bar  */}
          <TbSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Stack>
        {/* card container  */}
        <Grid container rowGap={2}>
          {isFetching
            ? // card skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : travels?.map((travel) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={travel.id}>
                  {/* card  */}
                  <TravelsCard trip={travel} />
                </Grid>
              ))}
        </Grid>
        {/* pagination start here  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            borderBottom: "1px solid white",
          }}
        >
          <Pagination
            page={page}
            count={meta?.total && Math.ceil(meta.total / limit)}
            color="primary"
            onChange={handlePageChange}
            size="small"
          />
        </Box>
        {/* pagination ends here  */}
      </Stack>
    </Container>
  );
};

export default AllTravels;
