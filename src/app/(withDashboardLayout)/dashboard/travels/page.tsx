"use client";
import MediaControlCard from "@/components/Ui/Card/Card";
import WrapperForm from "@/components/Ui/Form/WrapperForm";
import { useGetTravelsQuery } from "@/redux/features/trip/tripApi";
import {
  Checkbox,
  Stack,
  Box,
  Container,
  TextField,
  Button,
  Pagination,
  Radio,
  Grid,
  Typography,
} from "@mui/material";
// show all the travel with search fucntiolity
// See More Button: Button at the bottom of the cards that redirects to the Travels page, displaying all trips with search functionality.
// Features:
// Search and Filter Options:
// Destination
// Travel dates
// Travel type
// Keywords in description
// Travel Cards: Display all travel posts in card format with pagination.
import React, { useState } from "react";
import TravelsCard from "./components/TravelCard";

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

  // store all the filter query
  const query: Record<string, unknown> = {};
  query["page"] = page;
  query["limit"] = limit;
  query["searchTerm"] = searchTerm;

  // console.log(searchTerm);
  const handleSearh = () => {};
  // get all travel api start
  const { data, isLoading } = useGetTravelsQuery({ ...query });
  // get all travel api end
  const travels = data?.response;
  const meta = data?.meta;
  console.log(travels, meta);

  // pagination page change handler
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  // page count
  // let count: number;
  // if (meta?.total) {
  //   count = Math.ceil(meta.total / limit);
  // }

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
  const startDates = getUniqueValues("startDate");
  const endDates = getUniqueValues("endDate");
  const travelTypes = getUniqueValues("travelType");
  console.log(filter);
  return (
    <Container>
      <Stack sx={{ py: 10 }} rowGap={2}>
        <Stack direction={"row"} justifyContent={"end"}>
          <TextField
            size="small"
            type="text"
            name="searchTerm"
            placeholder="Search"
            label={"Search"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button color="success">Search</Button>
        </Stack>
        <Stack>
          <Typography>Filter By Travel Destination</Typography>
          {destinations?.map((destination) => (
            <Stack
              key={destination?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.destination === destination?.value}
                onChange={() =>
                  setFilter({
                    destination: destination?.value ? destination?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{destination?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography>Filter By Travel Type</Typography>
          {travelTypes?.map((travelType) => (
            <Stack
              key={travelType?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.travelType === travelType?.value}
                onChange={() =>
                  setFilter({
                    travelType: travelType?.value ? travelType?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{travelType?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography>Filter By Start Date</Typography>
          {startDates?.map((date) => (
            <Stack
              key={date?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.startDate === date?.value}
                onChange={() =>
                  setFilter({
                    startDate: date?.value ? date?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{date?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography>Filter By End Date</Typography>
          {endDates?.map((date) => (
            <Stack
              key={date?.value}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Checkbox
                checked={filter.endDate === date?.value}
                onChange={() =>
                  setFilter({
                    endDate: date?.value ? date?.value : "",
                  })
                }
              ></Checkbox>
              <Typography>{date?.value}</Typography>
            </Stack>
          ))}
        </Stack>
        <Grid container rowGap={2}>
          {travels?.map((travel) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={travel.id}>
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
