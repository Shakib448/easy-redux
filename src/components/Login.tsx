import { Grid, Typography, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { useYupValidationResolver } from "src/hooks/useYupValidationResolver";
import { authState, loginAction } from "src/redux/slices/authSlice";
import { loginSchema } from "src/validation";
import { useNavigate, Link } from "react-router-dom";

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const resolver = useYupValidationResolver(loginSchema);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { isSuccess } = useAppSelector(authState);

  if (isSuccess) {
    navigate("/admin");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(loginAction(data));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid
        container
        maxWidth="sm"
        sx={{ background: "#F7F7F7", padding: 2, borderRadius: 5 }}
        justifyContent="center"
        direction="column"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" fontWeight="bold" mb={4} align="center">
            Login
          </Typography>
          <Grid item mb={4}>
            <TextField
              fullWidth
              label="Username"
              id="fullWidth"
              inputProps={{
                ...register("username"),
              }}
              placeholder="username"
              helperText={
                errors.username && (
                  <Typography variant="body1" sx={{ color: "red" }}>
                    {errors.username?.message}
                  </Typography>
                )
              }
            />
          </Grid>
          <Grid item mb={4}>
            <TextField
              fullWidth
              label="password"
              id="fullWidth"
              type="password"
              inputProps={{
                ...register("password"),
              }}
              helperText={
                errors.password && (
                  <Typography variant="body1" sx={{ color: "red" }}>
                    {errors.password?.message}
                  </Typography>
                )
              }
              placeholder="password"
            />
          </Grid>

          <Grid container justifyContent="center">
            <Grid item md={4}>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid container justifyContent="center">
          <Typography variant="body1" mt={2}>
            If you have no account please visit,{" "}
            <Link to="register">Register</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
