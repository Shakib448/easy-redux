import { UseGeoLocation } from "src/hooks/UseGeoLocation";
import { Grid, Typography } from "@mui/material";

const Admin = () => {
  const { lat, lng, success } = UseGeoLocation();
  return (
    <Grid container justifyContent="center" sx={{ padding: 2 }}>
      {success && (
        <Typography variant="h6">
          You current location which is Latitude {lat} and Longitude {lng}
        </Typography>
      )}
    </Grid>
  );
};

export default Admin;
