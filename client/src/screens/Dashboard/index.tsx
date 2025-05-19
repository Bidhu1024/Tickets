import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import OrganizersDashboard from "./Organizer";

const Dashboard = () => {
  const user = useSelector((state: any) => state.auth.user);
  console.log(user.role);
  return (
    <>
      <Box width={"100%"} height={"100vh"} p={2}>
        {user.role === "Organizer" ? (
          <>
          <OrganizersDashboard />
          </>
        ) : (
          <>User Dashboard</>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
