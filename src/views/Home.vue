<template>
	<div id="page-home">
		<home-main></home-main>
	</div>
</template>

<script>
import { createComponent } from "@vue/composition-api";
import homeMain from "@/components/Home/main.vue";

export default createComponent({
	name: "page-home",
	components: {
		homeMain
	}
});
</script>
