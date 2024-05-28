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
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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
import Filter from "./components/TravelFilter";

const AllTravels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [check, setCheck] = useState(false);
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
  query["searchTerm"] = searchTerm.length ? searchTerm : {};
  query["destination"] = filter.destination?.length ? filter.destination : {};
  query["startDate"] = filter.startDate?.length ? filter.startDate : {};
  query["endDate"] = filter.endDate?.length ? filter.endDate : {};
  query["travelType"] = filter.travelType?.length ? filter.travelType : {};

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
  console.log(query);
  type Anchor = "right";
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
  return (
    <Container>
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
      />
      <Stack sx={{ py: 10 }} rowGap={2}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            onClick={toggleDrawer("right", true)}
            startIcon={<FilterAltIcon />}
          />
          <Box>
            <TextField
              size="small"
              type="text"
              name="searchTerm"
              placeholder="Search"
              label={"Search"}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button color="success">Search</Button>
          </Box>
        </Stack>

        <Grid container rowGap={2}>
          {travels?.map((travel) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={travel.id}>
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
