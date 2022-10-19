import { UseGeoLocation } from "src/hooks/UseGeoLocation";
import { Grid, Typography } from "@mui/material";
import calender from "src/assets/calendar.png";
import lock from "src/assets/door-lock.png";
import entrance from "src/assets/entrance.png";
import noLift from "src/assets/no-lift.png";
import noPets from "src/assets/no-pets.png";
import noSmoking from "src/assets/no-smoking.png";
import property from "src/assets/property.png";
import camera from "src/assets/security-camera.png";

type Data = {
  alt: string;
  img: string;
};

const data: Data[] = [
  { img: calender, alt: "calender" },
  { img: lock, alt: "lock" },
  { img: entrance, alt: "entrance" },
  { img: noLift, alt: "noLift" },
  { img: noPets, alt: "noPets" },
  { img: noSmoking, alt: "noSmoking" },
  { img: property, alt: "property" },
  { img: camera, alt: "camera" },
];

const Admin = () => {
  const { lat, lng, success } = UseGeoLocation();
  return (
    <Grid container justifyContent="center" sx={{ padding: 2 }}>
      {success && (
        <Typography variant="h6">
          You current location which is Latitude {lat} and Longitude {lng}
        </Typography>
      )}

      <Grid container direction="row" sx={{ marginTop: 5 }} spacing={5}>
        {data.map((item, i) => (
          <Grid container item md={3} key={i} justifyContent="center">
            <img
              src={item.img}
              alt={item.alt}
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Admin;
