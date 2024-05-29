import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Checkbox, Stack, Typography } from "@mui/material";
import { TTravel } from "@/types/travel.types";

type Anchor = "right";

interface IFilterProps {
  destinations:
    | ({
        key: keyof TTravel;
        value: string;
      } | null)[]
    | undefined;
  travelTypes:
    | ({
        key: keyof TTravel;
        value: string;
      } | null)[]
    | undefined;
  startDates:
    | ({
        key: keyof TTravel;
        value: string;
      } | null)[]
    | undefined;
  endDates:
    | ({
        key: keyof TTravel;
        value: string;
      } | null)[]
    | undefined;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer: (
    anchor: "right",
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  filter: {
    destination?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    travelType?: string | undefined;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      destination?: string | undefined;
      startDate?: string | undefined;
      endDate?: string | undefined;
      travelType?: string | undefined;
    }>
  >;
}

export default function Filter({
  destinations,
  travelTypes,
  startDates,
  endDates,
  state,
  toggleDrawer,
  filter,
  setFilter,
}: IFilterProps) {
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      px={2}
      py={7}
    >
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
                setFilter((prev) => ({
                  ...prev,
                  destination:
                    prev?.destination === destination?.value
                      ? ""
                      : destination?.value,
                }))
              }
            ></Checkbox>
            <Typography>{destination?.value}</Typography>
          </Stack>
        ))}
      </Stack>
      <Divider />
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
                setFilter((prev) => ({
                  ...prev,
                  travelType:
                    prev?.travelType === travelType?.value
                      ? ""
                      : travelType?.value,
                }))
              }
            ></Checkbox>
            <Typography>{travelType?.value}</Typography>
          </Stack>
        ))}
      </Stack>
      <Divider />
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
                setFilter((prev) => ({
                  ...prev,
                  startDate: prev?.startDate === date?.value ? "" : date?.value,
                }))
              }
            ></Checkbox>
            <Typography>{date?.value}</Typography>
          </Stack>
        ))}
      </Stack>
      <Divider />
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
                setFilter((prev) => ({
                  ...prev,
                  endDate: prev?.endDate === date?.value ? "" : date?.value,
                }))
              }
            ></Checkbox>
            <Typography>{date?.value}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
