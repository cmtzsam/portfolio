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
  z-index: 10001;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
  top: 0;
  left:  0;
  overflow: hidden;
}
</style>