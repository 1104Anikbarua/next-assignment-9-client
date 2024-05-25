import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Typography,
  IconButton,
  CardContent,
  Button,
} from "@mui/material";
import Image from "next/image";
import cardImage from "@/assets/hero/herosection.jpg";

export default function MediaControlCard({ trip }: { trip: TTravel }) {
  const theme = useTheme();
  console.log(trip);
  return (
    <Card sx={{ p: 1, backgroundColor: "red" }}>
      <Box sx={{ borderRadius: 1 }}>
        <Image
          src={cardImage}
          width={300}
          height={300}
          alt="Destination image"
          style={{ borderRadius: "8px" }}
        />
      </Box>
      <Stack>
        <Typography
          sx={{ display: "inline-block" }}
          variant="h6"
          fontWeight={500}
          component={"p"}
        >
          Destination:
          <Typography
            sx={{ display: "inline-block" }}
            variant="body1"
            component={"p"}
          >
            {trip?.destination}
          </Typography>
        </Typography>
        <Typography
          sx={{ display: "inline-block" }}
          variant="h6"
          fontWeight={500}
          component={"p"}
        >
          Start Date:
          <Typography
            sx={{ display: "inline-block" }}
            variant="body1"
            component={"p"}
          >
            {trip?.startDate}
          </Typography>
        </Typography>
        <Typography
          sx={{ display: "inline-block" }}
          variant="h6"
          fontWeight={500}
          component={"p"}
        >
          End Date:
          <Typography
            sx={{ display: "inline-block" }}
            variant="body1"
            component={"p"}
          >
            {trip?.endDate}
          </Typography>
        </Typography>
        <Button color={"success"}>Travel Details</Button>
      </Stack>
    </Card>
  );
}
