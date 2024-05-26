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
    <Box
      sx={{
        p: 1,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Box
        sx={{
          borderRadius: 1,
          width: "100%",
          maxWidth: "100%",
          height: "300px",
          position: "relative",
        }}
      >
        <Image
          src={cardImage}
          layout="fill"
          objectFit="cover"
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
          width={{ xs: "100%", sm: "300px" }}
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
          sx={{ display: "inline", textWrap: "wrap" }}
          variant="h6"
          fontWeight={500}
          component={"p"}
          width={{ xs: "100%", sm: "300px" }}
        >
          Description:
          <Typography
            title={trip?.description}
            sx={{ display: "inline", textWrap: "wrap" }}
            variant="body1"
            component={"p"}
          >
            {" "}
            {`${trip?.description.slice(0, 100)} ${
              trip.description.length > 100 ? "..." : ""
            }`}
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
        <Button fullWidth color={"success"}>
          Travel Details
        </Button>
      </Stack>
    </Box>
  );
}
