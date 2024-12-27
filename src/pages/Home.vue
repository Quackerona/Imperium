<script setup lang="ts">
  document.body.style.backgroundImage = 'url("/bg.png")';
  document.body.style.overflowY = "auto";
</script>

<template>
  <img ref="pattern" id="pattern" src="/pattern.png" draggable="false">
  <img ref="pattern2" id="pattern2" src="/pattern.png" draggable="false">

  <img ref="logo" id="logo" src="/logo.png" draggable="false">

  <div>
    <img ref="detail" id="detail" src="/pages/home/homeDetail.png" draggable="false">

    <RouterLink to="/buy"><img ref="interested" id="interested" src="/pages/home/interested.png"></RouterLink>

    <video id="ad" ref="ad" controls width="800">
      <source src="/pages/home/ad.mp4" type="video/mp4">
    </video>

    <div>
      <RouterLink to="/"><img ref="homeBtn" id="homeBtn" src="/home.png"></RouterLink>
      <RouterLink to="/about"><img ref="aboutBtn" id="aboutBtn" src="/about.png"></RouterLink>
    </div>
  </div>
</template>

<style scoped>
  #ad {
    position: absolute;

    max-width: 78.5%;

    left: 50%;
    transform: translate(-50%, 190%);
  }

  #interested {
    position: absolute;

    max-width: 60.33%;

    left: 50%;
    transform: translate(-50%, 2770%);
  }
</style>
