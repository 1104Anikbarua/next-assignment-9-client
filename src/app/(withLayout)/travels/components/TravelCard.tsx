import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import cardImage from "@/assets/hero/herosection.jpg";
import { TTravel } from "@/types/travel.types";

export default function TravelsCard({
  trip,
  isShow,
  setIsShow,
  handleDeleteConfirm,
  handleEditConfirm,
}: {
  trip: TTravel;
  isShow?: boolean;
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteConfirm?: ((id: string) => void) | undefined;
  handleEditConfirm?: ((id: string) => void) | undefined;
}) {
  // const theme = useTheme();
  console.log(trip);
  return (
    <Box
      sx={{
        py: 1,
        px: 2,
        width: "100%",
        maxWidth: { xs: "100%", sm: 400 },
        position: "relative",
      }}
    >
      <Stack>
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
            src={trip.photos[0] || cardImage}
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
            sx={{
              display: "inline",
              textWrap: "wrap",
              height: { xs: "fit-content", sm: "150px" },
            }}
            variant="h6"
            fontWeight={500}
            component={"h6"}
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
          {isShow ? (
            <Stack direction={"row"} gap={1} justifyContent={"end"}>
              <Button onClick={() => handleEditConfirm?.(trip.id)} color="info">
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteConfirm?.(trip.id)}
                color="error"
              >
                Delete
              </Button>
            </Stack>
          ) : (
            <Button fullWidth color={"success"}>
              Travel Details
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
