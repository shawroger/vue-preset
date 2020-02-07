<template>
	<div id="app">
		<app-nav></app-nav>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import appNav from "./components/nav.vue";
import appFooter from "./components/footer.vue";
export default createComponent({
	name: "app",
	components: {
		appNav,
		appFooter
	}
});
</script>

<style lang="less" scoped></style>
