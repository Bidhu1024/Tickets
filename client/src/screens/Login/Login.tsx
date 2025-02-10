import { Box, Button, Typography } from "@mui/material";
import LoginImage from "../../assets/cute-rabbit-reading-book-vector-icon-illustration-animal-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3637.avif";
import TextBox from "../../components/TextBox";
import logo from "../../assets/Screenshot 2025-02-10 232009.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const Login = ({ setLogin }) => {
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
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("done");
  };
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
        <Box width="100%" padding={"1rem"}>
          <Box>
            <img src={logo} alt="logo" height="10%" width="25%" />
          </Box>
          <Box sx={{ mt: "2rem" }}>
            <Typography fontSize={"1.4rem"} fontWeight={"600"}>
              Welcome Back
            </Typography>
            <Typography fontSize={"1rem"} fontWeight={"500"}>
              Please enter your details
            </Typography>
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                type="password"
              />

              <Button
                sx={{
                  height: "1.8rem",
                  width: "12rem",
                  mt: "2.8rem",
                  padding: "4px 6px",
                  ml: "2.5rem",
                }}
                children="Login"
                variant="contained"
                onClick={handleLogin}
              />
            </form>
          </Box>
          <Typography sx={{ mt: "1rem", ml: "1.8rem" }}>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setLogin(false)}
            >
              Sign up
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
