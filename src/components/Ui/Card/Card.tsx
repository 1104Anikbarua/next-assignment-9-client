import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BaseButton from "../Button/Button";
import { TTravel } from "@/types/travel.types";

export default function MediaControlCard({ trip }: { trip: TTravel }) {
  return (
    <Box
      sx={{
        p: 1,
        width: "100%",
        maxWidth: { xs: "100%", sm: 400 },
        // border: "5px solid red",
        boxShadow: 1,
        borderRadius: "6px",
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
          src={trip?.photos[0]}
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
          component={"h6"}
          width={{ xs: "100%" }}
        >
          Destination:
          <Typography
            sx={{ display: "inline-block", textWrap: "wrap" }}
            variant="body1"
            component={"p"}
          >
            {trip?.destination}
          </Typography>
        </Typography>
        <Typography
          sx={{ textWrap: "wrap", height: { xs: "fit-content", sm: "150px" } }}
          variant="h6"
          fontWeight={500}
          component={"h6"}
        >
          Description:
          <Typography
            title={trip?.description}
            sx={{
              display: "inline",
              textWrap: "wrap",
            }}
            variant="body1"
            component={"p"}
          >
            {" "}
            {`${trip?.description?.slice(0, 100)} ${
              trip?.description?.length > 100 ? "..." : ""
            }`}
          </Typography>
        </Typography>
        <Typography
          sx={{ display: "inline-block" }}
          variant="h6"
          fontWeight={500}
          component={"h6"}
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
          component={"h6"}
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
        <BaseButton id={trip?.id} />
      </Stack>
    </Box>
  );
}
