<template>
    <img id="text" src="/pages/confession/text.png" draggable="false">
    <img id="text2" src="/pages/confession/text.png" draggable="false">
    
    <video id="video" controls>
        <source src="/pages/confession/evil.mp4" type="video/mp4">
    </video>
</template>

<style scoped>
  #video {
    position: absolute;

    max-width: 100%;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
