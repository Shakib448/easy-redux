import { useEffect, useState } from "react";

export const UseGeoLocation = () => {
  const [lat, setLat] = useState<any>(null);
  const [lng, setLng] = useState<any>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setSuccess(true);
      });
    }
  }, []);

  return { lat, lng, success };
};
