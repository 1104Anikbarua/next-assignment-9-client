import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { TTravel } from "@/types/travel.types";
const HoverCard = ({ travel }: { travel: TTravel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      key={travel?.id}
      sx={{
        position: "relative",
        justifyContent: "end",
        overflow: "hidden",
        borderRadius: { xs: "12px", md: "24px" },
        display: "flex",
        height: "256px",
        maxWidth: "500px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient box start here */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 20,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.4))",
        }}
      />
      {/* Box hover section */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 20,
          height: "100%",
          width: "100%",
          background: isHovered ? "rgba(0, 0, 0, 0.5)" : "transparent",
          transition: "background-color 0.7s",
        }}
      />
      {/* Image start here */}
      <Image
        src={travel?.photos[0]}
        alt={"popular image"}
        layout="fill"
        objectFit="cover"
        style={{
          transition: "transform 0.7s",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />
      {/* Image start here */}
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 22,
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        p={{ xs: 2, md: 3.5, lg: 4 }}
      >
        {/* User Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            alt="user image"
            src={travel?.user?.profilePhoto}
            width={40}
            height={40}
            style={{ borderRadius: "50%", border: "3px solid white" }}
          />
          <Typography
            variant="h6"
            component={"span"}
            fontWeight={500}
            fontSize={{ xs: 14, sm: 16 }}
            color={"white"}
          >
            {travel?.user?.name}
          </Typography>
        </Box>
        {/* Travel Info */}
        <Box>
          <Typography
            fontWeight={700}
            fontSize={{ xs: 24, md: 30 }}
            component={"h2"}
            color={"white"}
          >
            {travel?.destination}
          </Typography>
          <Typography
            mt={{ xs: 1, sm: 2.5 }}
            fontSize={{ xs: 14, sm: 16 }}
            color={"white"}
          >
            {travel?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default HoverCard;
