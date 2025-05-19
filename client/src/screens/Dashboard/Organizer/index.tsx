import {
  Box,
  Stack,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { useNavigate } from "react-router-dom";
import EventModal from "../../Events/EventModal";
const OrganizersDashboard = () => {
  const user = useSelector((state: any) => state.auth.user);
  console.log(user);
  const [search, setSearch] = useState<string>("");
  const [createEvent, setCreateEvent] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Welcome, {user.name}</Typography>
          <Typography>make a event blissfull for everyone</Typography>
        </Box>
        <Box>
          <TextField
            value={search}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setSearch(e.target.value as string)}
            size="small"
            placeholder="Search Events"
          />
        </Box>
        <Box>
          <IconButton
            onClick={() => {
              navigate("/settings");
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <Button variant="contained" onClick={() => setCreateEvent(true)}>
            Create
          </Button>
        </Box>
      </Box>
      {createEvent && (
        <EventModal open={createEvent} onClose={() => setCreateEvent(false)} />
      )}
    </Stack>
  );
};

export default OrganizersDashboard;
