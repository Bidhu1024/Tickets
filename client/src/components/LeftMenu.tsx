import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { SoldRedCircle } from "../components/svg/Red";
import { SoldGreenCircle } from "./svg/Green";
import { SoldYellowCircle } from "./svg/Yellow";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../rtk/slices/authSlice";

const menuItemsList = [
  { name: "Menu", path: "/dashboard" },
  { name: "Shows", path: "/shows" },
  { name: "My space", path: "/myspace" },
  { name: "Support", path: "/support" },
];

const LeftMenu = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("Menu");

  const handleMenuClick = (menuItem: { name: string; path: string }) => {
    setSelectedMenu(menuItem.name);
    navigate(menuItem.path);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    localStorage.clear();
  };

  return (
    <Stack
      bgcolor={"#443c9c"}
      height={"100vh"}
      width={"20%"}
      borderRadius={"10px"}
      p={2}
      position="relative"
    >
      <Box display="flex" gap="10px" mb={2}>
        <SoldRedCircle />
        <SoldYellowCircle />
        <SoldGreenCircle />
      </Box>

      <Typography color="white" fontSize="1.5rem" fontWeight="bold" mb={2}>
        Tickets
      </Typography>

      <TextField
        placeholder="Search"
        size="small"
        fullWidth
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          mb: 3,
          input: { padding: "8px" },
        }}
      />
      <Stack flexGrow={1} gap={1}>
        {menuItemsList.map((element, idx) => (
          <Box
            key={idx}
            onClick={() => handleMenuClick(element)}
            sx={{
              padding: "10px 15px",
              borderRadius: "8px",
              color: selectedMenu === element.name ? "#443c9c" : "white",
              backgroundColor:
                selectedMenu === element.name ? "white" : "transparent",
              fontWeight: selectedMenu === element.name ? "bold" : "normal",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor:
                  selectedMenu === element.name
                    ? "white"
                    : "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            {element.name}
          </Box>
        ))}
      </Stack>

      <Box position="absolute" bottom="20px" width="80%" left="10%">
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            borderRadius: "8px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      </Box>
    </Stack>
  );
};

export default LeftMenu;
