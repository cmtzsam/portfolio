<template>
  <div id="loading">
    Cargando...
  </div>
</template>
<script>
export default {
  name: "LoadScreen"
};
</script>
<style>
#loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
</style>