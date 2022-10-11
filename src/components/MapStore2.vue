<template>
  <GmapMap
    :center="center"
    :zoom="15"
    :options="options"
    style="width: 300px; height: 300px"
  >
    <GmapMarker
      :position="marker.position"
      :clickable="false"
      :draggable="false"
    />
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      marker: {
        position: { lat: 25.094645542637245, lng: 121.71711790715405 },
      },
      center: { lat: 25.094645542637245, lng: 121.71711790715405 },
      options: {
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,
        scrollwheel: true,
        clickableIcons: false,
      },
    };
  },
  created: {},
};
</script>