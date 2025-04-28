import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LeftMenu from "../../components/LeftMenu"; 

const DashboardLayout = () => {
  return (
    <Box display="flex">
      <LeftMenu />
      <Box flexGrow={1} p={2}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
