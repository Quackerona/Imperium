<template>
  <img id="logo" src="/logo.png" draggable="false">

  <img id="homeDetail" src="/pages/home/homeDetail.png" draggable="false">

  <RouterLink to="/buy"><img id="interested" src="/pages/home/interested.png"></RouterLink>

  <video id="ad" ref="ad" controls width="800" draggable="false">
    <source src="/pages/home/ad.mp4" type="video/mp4">
  </video>
</template>

<style scoped>
  #homeDetail {
    position: absolute;

    max-width: 100%;
    
    left: 50%;
    transform: translate(-50%, 31.5%);
  }

  #ad {
    position: absolute;

    max-width: 78.5%;

    left: 50%;
    transform: translate(-50%, 250%);
  }

  #interested {
    position: absolute;

    max-width: 60.33%;

    left: 50%;
    transform: translate(-50%, 3420%);
  }

  #logo {
      position: relative;

      left: 50%;

      max-width: 100%;

      animation-name: logoSwing;
      animation-timing-function: ease-in-out;
      animation-duration: 3s;
      animation-iteration-count: infinite;
  }

  @keyframes logoSwing {
      0% {
          transform: translateX(-50%) rotate(-3deg);
      }
      50% {
          transform: translateX(-50%) rotate(3deg);
      }
      100% {
          transform: translateX(-50%) rotate(-3deg);
      }
  }
</style>
