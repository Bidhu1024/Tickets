import { Box, Button, Stack, Typography } from "@mui/material";
import TextBox from "../../components/TextBox";
import logo from "../../assets/Screenshot 2025-02-10 232009.png";
import background from "../../assets/123.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FC } from "react";
import Header from "../../components/Header";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

interface RegisterProps {
  setLogin: (val: boolean) => void;
}

const Register: FC<RegisterProps> = ({ setLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      confirm_password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        overflow:"hidden",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "linear-gradient(135deg, #E3FDFD 10%, #A6E3E9 90%)",
        backgroundImage:`url(${background})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "400px" },
          bgcolor: "white",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />
        </Box>

        {/* Header */}
        <Header title="Register" />

        {/* Form */}
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <Stack spacing={3.5}>
            <TextBox
              placeholder="Enter your Name"
              title="Name*"
              value={formik.values.name}
              onChange={(value) => formik.setFieldValue("name", value)}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              type="text"
            />
            <TextBox
              placeholder="Enter your email"
              title="Email*"
              value={formik.values.email}
              onChange={(value) => formik.setFieldValue("email", value)}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              type="text"
            />
            <TextBox
              placeholder="Enter your Phone Number"
              title="Phone Number*"
              value={formik.values.phone}
              onChange={(value) => formik.setFieldValue("phone", value)}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              type="text"
            />
            <TextBox
              placeholder="Enter your password"
              title="Password*"
              value={formik.values.password}
              onChange={(value) => formik.setFieldValue("password", value)}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type="password"
            />
            <TextBox
              placeholder="Confirm your password"
              title="Confirm Password*"
              value={formik.values.confirm_password}
              onChange={(value) => formik.setFieldValue("confirm_password", value)}
              error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
              helperText={formik.touched.confirm_password && formik.errors.confirm_password}
              type="password"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "primary.main",
                color: "white",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Register
            </Button>
          </Stack>
        </form>

        {/* Login Link */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 2, color: "text.secondary" }}
        >
          Already have an account?{" "}
          <Button
            onClick={() => setLogin(true)}
            sx={{
              color: "primary.main",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
