<template>
  <div id="app-logo">
    <img v-no-drag class="logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "app-logo"
};
</script>

<style scoped>
#app-logo {
  display: flex;
  justify-content: center;
  margin: 10px 0px;
}
.logo {
  width: 100px;
  height: 100px;
  animation: logoRotate 4s;
}

@keyframes logoRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
}
</style>
