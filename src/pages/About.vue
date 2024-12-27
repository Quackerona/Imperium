<script setup lang="ts">
  document.body.style.backgroundImage = 'url("/bg.png")';
  document.body.style.overflowY = "auto";
</script>

<template>
    <img ref="pattern" id="pattern" src="/pattern.png" draggable="false">
    <img ref="pattern2" id="pattern2" src="/pattern.png" draggable="false">
    
    <img ref="logo" id="logo" src="/logo.png" draggable="false">
  
    <div>
      <img ref="detail" id="detail" src="/pages/about/aboutDetail.png" draggable="false">

			<RouterLink to="/confession"><img ref="meet" id="meet" src="/pages/about/meet.png"></RouterLink>

      <div>
        <RouterLink to="/"><img ref="homeBtn" id="homeBtn" src="/home.png"></RouterLink>
        <RouterLink to="/about"><img ref="aboutBtn" id="aboutBtn" src="/about.png"></RouterLink>
      </div>
    </div>
</template>

<style scoped>
	#meet {
		position: absolute;

    max-width: 85%;

		left: 50%;
		transform: translate(-50%, 1400%);
	}
</style>
  