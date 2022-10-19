import { Grid, Typography, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { useYupValidationResolver } from "src/hooks/useYupValidationResolver";
import { authState, registerAction } from "src/redux/slices/authSlice";
import { registerSchema } from "src/validation";
import { useNavigate, Link } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const resolver = useYupValidationResolver(registerSchema);

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
    dispatch(registerAction(data));
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
          <Grid item mb={2}>
            <TextField
              fullWidth
              label="name"
              id="fullWidth"
              inputProps={{
                ...register("name"),
              }}
              placeholder="Name"
              helperText={
                errors.name && (
                  <Typography variant="body1" sx={{ color: "red" }}>
                    {errors.name?.message}
                  </Typography>
                )
              }
            />
          </Grid>
          <Grid item mb={2}>
            <TextField
              fullWidth
              label="email"
              id="fullWidth"
              inputProps={{
                ...register("email"),
              }}
              placeholder="Email"
              helperText={
                errors.email && (
                  <Typography variant="body1" sx={{ color: "red" }}>
                    {errors.email?.message}
                  </Typography>
                )
              }
            />
          </Grid>
          <Grid item mb={2}>
            <TextField
              fullWidth
              label="password"
              id="fullWidth"
              inputProps={{
                ...register("password"),
              }}
              placeholder="Password"
              type="password"
              helperText={
                errors.password && (
                  <Typography variant="body1" sx={{ color: "red" }}>
                    {errors.password?.message}
                  </Typography>
                )
              }
            />
          </Grid>
          <Grid item mb={2}>
            <TextField
              fullWidth
              label="confirmPassword"
              id="fullWidth"
              type="password"
              inputProps={{
                ...register("confirmPassword"),
              }}
              helperText={
                errors.confirmPassword && (
                  <Typography variant="body1" sx={{ color: "red" }}>
                    {errors.confirmPassword?.message}
                  </Typography>
                )
              }
              placeholder="Confirm Password"
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
            Already have an account <Link to="login">Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
