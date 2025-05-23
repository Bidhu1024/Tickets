import { Box, Button, Typography } from "@mui/material";
import LoginImage from "../../assets/cute-rabbit-reading-book-vector-icon-illustration-animal-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3637.avif";
import TextBox from "../../components/TextBox";
import logo from "../../assets/Screenshot 2025-02-10 232009.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import useApiCalls from "../../helpers/hooks/useApiCalls";
import User from "../../services/User";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../rtk/slices/authSlice";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

interface LoginProps {
  setLogin: (val: boolean) => void;
}

const Login: FC<LoginProps> = ({ setLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state: any) => {
    return state.auth
  });

  useEffect(() => {
    console.log("User:", user);
    console.log("Token:", token);
  }, [user, token]);

  const handleLogin = useApiCalls({
    fn: User.loginUser,
    onError: (d) => {
      alert(d?.data?.error ?? "Something went wrong");
    },
    onSuccess: (resp) => {
      const { user, token } = resp.data;
      dispatch(loginSuccess({ user, token }));
      navigate("/dashboard");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin.mutate({ data: values });
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
          height: { xs: "auto", md: "30rem" },
          width: { xs: "90%", md: "60rem" },
          maxWidth: "100%",
          borderRadius: "10px",
          boxShadow: 3,
          bgcolor: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "200px", md: "100%" },
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <img
            src={LoginImage}
            alt="login image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            padding: { xs: "1rem", md: "2rem" },
          }}
        >
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{ width: "25%", height: "auto" }}
            />
          </Box>
          <Box sx={{ mt: { xs: "1rem", md: "2rem" } }}>
            <Header title="Welcome Back" />
            <Typography
              fontSize={{ xs: "0.9rem", md: "1rem" }}
              fontWeight={"500"}
            >
              Please enter your details
            </Typography>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
                  height: "2.5rem",
                  width: { xs: "100%", md: "12rem" },
                  mt: "2rem",
                  ml: { xs: "0", md: "2.8rem" },
                  padding: "4px 6px",
                }}
                children="Login"
                variant="contained"
                type="submit"
              />
            </form>
          </Box>
          <Typography sx={{ mt: "1rem", ml: { xs: "0", md: "2rem" } }}>
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

export default memo(Login);