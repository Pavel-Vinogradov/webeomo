<template>
  <GoogleMap
    api-key="AIzaSyA5N7UHT6_K-STVcwug9tBd0eku_JzV7sg"
    style="width: 700px; height: 600px"
    :center="center"
    :zoom="17"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  name: "indexMaps",
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 58.59515481848332, lng: 49.68966170209393 };
    return { center };
  }
};
</script>
