import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import LeftMenu from "../../components/LeftMenu";

const Dashboard = () => {
  const user = useSelector((state: any) => state.user);
  console.log(user);
  return <>
 <Box width={"100%"} height={"100vh"}>
<LeftMenu />
{/* <MainContent /> */}
 </Box>
  </>
};

export default Dashboard;
