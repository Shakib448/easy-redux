import { Grid, Typography, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useYupValidationResolver } from "src/hooks/useYupValidationResolver";
import { loginSchema } from "src/validation";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const resolver = useYupValidationResolver(loginSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
              label="Email"
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
      </Grid>
    </Grid>
  );
};

export default Login;
