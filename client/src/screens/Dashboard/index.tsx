import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import LeftMenu from "../../components/LeftMenu";

const Dashboard = () => {
  const user = useSelector((state: any) => state.user);
  return <>
 <Box width={"100%"} height={"100vh"} p={2}>

This is for dashboard
 </Box>
  </>
};

export default Dashboard;
