import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
  return (
    <Grid item xs={12} sm={5} md={3.7} lg={3.6}>
      <Box
        sx={{
          p: 1,
          width: "100%",
          maxWidth: { xs: "100%", sm: 400 },
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
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Box>
        <Stack spacing={1} mt={1}>
          <Typography variant="h6" fontWeight={500}>
            <Skeleton variant="text" width="80%" />
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            <Skeleton variant="text" width="100%" height="150px" />
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            <Skeleton variant="text" width="60%" />
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            <Skeleton variant="text" width="60%" />
          </Typography>

          <Skeleton variant="rectangular" width="100%" height="40px" />
        </Stack>
      </Box>
    </Grid>
  );
};

export default SkeletonCard;
