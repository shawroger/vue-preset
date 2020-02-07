<template>
	<div id="app-footer">
		<p>{{ title }} · 2020</p>
	</div>
</template>

<script lang="ts">
import { title } from "@/utils/config";
import { createComponent } from "@vue/composition-api";

export default createComponent({
	name: "app-footer",
	setup() {
		return {
			title
		};
	}
});
</script>

<style lang="less" scoped>
#app-footer {
	padding: 20px;
}
p {
	font-size: 15px;
	text-align: center;
	color: #c0c4cc;
}
</style>
