import { useEffect } from "react";
import { Box } from "@mui/material";
import { m } from "framer-motion";

const { kakao } = window;

export default function MapSection() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.538459, 126.994257),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(37.538459, 126.994257);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);
  return (
    <Box>
      <m.div
        id="map"
        style={{ height: "500px", filter: "grayscale(1%)" }}
      ></m.div>
    </Box>
  );
}
