<script setup lang="ts">
  document.body.style.backgroundImage = "none";
  document.body.style.overflowY = "hidden";
</script>

<template>
  <img id="text" src="/pages/confession/text.png" draggable="false">
  <img id="text2" src="/pages/confession/text.png" draggable="false">

  <RouterLink to="/evil"><img id="note" src="/pages/confession/note.png" draggable="false"></RouterLink>
</template>

<style scoped>
  #note {
      position: absolute;

      max-width: 50%;

      left: 50%;
      top: 50%;

      transform: translate(-50%, -50%);

      animation-name: goUp;
      animation-timing-function: ease-out;
      animation-duration: 2s;
  }
  @keyframes goUp {
    0% {
      transform: translate(-50%, 500%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
</style>
  