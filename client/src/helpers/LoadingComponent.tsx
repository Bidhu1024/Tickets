import React from "react";
import { CircularProgress, Skeleton, Box, Typography } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="background.paper"
    >
      {/* Loading Spinner */}
      <CircularProgress color="primary" size={60} />
      <Typography variant="body1" mt={2}>
        Loading...
      </Typography>

      {/* Skeleton Loader */}
      <Box mt={4} width="80%">
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </Box>
    </Box>
  );
};

export default LoadingComponent;