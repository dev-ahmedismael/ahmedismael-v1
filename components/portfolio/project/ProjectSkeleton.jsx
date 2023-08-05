import { Box, Skeleton, Grid } from "@mui/material";
import React from "react";

const ProjectSkeleton = () => {
  return (
    <Box>
      <Box display="flex" justifyContent={"center"} mb={7}>
        <Skeleton variant="rounded" width={250} height={40} />
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Skeleton variant="rounded" width={"100%"} height={350} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            minHeight="100%"
          >
            <Skeleton variant="rounded" width={"100%"} height={40} />
            <Skeleton variant="rounded" width={"100%"} height={40} />
            <Skeleton variant="rounded" width={"100%"} height={40} />
            <Skeleton variant="rounded" width={"100%"} height={40} />
            <Skeleton variant="rounded" width={"100%"} height={40} />
            <Skeleton variant="rounded" width={"100%"} height={40} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Box>
  );
};

export default ProjectSkeleton;
