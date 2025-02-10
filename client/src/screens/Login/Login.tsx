import { Box, Typography } from "@mui/material";
import LoginImage from "../../assets/cute-rabbit-reading-book-vector-icon-illustration-animal-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3637.avif";
import TextBox from "../../components/TextBox";
import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "gray",
      }}
    >
      <Box
        sx={{
          height: { xs: "20rem", md: "30rem" },
          width: { xs: "90%", md: "60rem" },
          maxWidth: "100%",
          borderRadius: "10px",
          boxShadow: 3,
          bgcolor: "white",
          display: "flex",
        }}
      >
        <img
          src={LoginImage}
          alt="login imsgr"
          height="100%"
          width="50%"
          style={{ borderRadius: "10px" }}
        />
        <Box width="100%">
          <Typography>Welcome Back</Typography>
          <Typography>Please enter your details</Typography>
          <form autoComplete="off">
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
              placeholder="Enter your password"
              title="Password*"
              value={formik.values.password}
              onChange={(value) => formik.setFieldValue("password", value)}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
               type="password"
            />

            
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
