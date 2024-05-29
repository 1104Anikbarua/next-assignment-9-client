"use client";
import { useGetTravelsQuery } from "@/redux/features/trip/tripApi";
import { styled, alpha } from "@mui/material/styles";
import {
  // styled,
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
  InputBase,
} from "@mui/material";
import { FilterAlt, Search as SearchIcon } from "@mui/icons-material";
import React, { useState } from "react";
import TravelsCard from "./components/TravelCard";
import Filter from "./components/TravelFilter";
import dayjs from "dayjs";
import { TTravel } from "@/types/travel.types";
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #c6c6c6",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
        <Stack
          direction={{ xs: "row", sm: "row" }}
          justifyContent={"space-between"}
          rowGap={{ xs: 1, sm: 1 }}
        >
          <Box>
            <Button
              onClick={toggleDrawer("right", true)}
              startIcon={<FilterAlt />}
            />
          </Box>
          <Search sx={{ ml: 0.5 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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