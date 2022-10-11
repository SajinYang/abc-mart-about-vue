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
      marker: { position: { lat: 25.06406983739738, lng: 121.65225416432492 } },
      center: { lat: 25.06406983739738, lng: 121.65225416432492 },
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