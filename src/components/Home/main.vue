<template>
	<div id="home-main">
		<app-logo></app-logo>
		<p>
			Welcome to use Vue Preset from
			<a href="https://github.com/shawroger/vue2.0-preset" target="_blank"
				>shawroger</a
			>
		</p>
		<span>git clone https://github.com/shawroger/vue2.0-preset.git</span>
		<el-collapse value="1" style="width: 80%">
			<el-collapse-item title="使用TypeScript" name="1">
				<div>
					在vue3.0出现前夕，采用最新的composition-api，立刻享受使用TypeScript的快感
				</div>
			</el-collapse-item>
			<el-collapse-item title="装备齐全，开箱即用" name="2">
				<div>
					直接安装最新的vue全家桶，vue-router,vuex开箱即用
				</div>
			</el-collapse-item>
			<el-collapse-item title="高级配备，无需担忧" name="3">
				<div>
					安装element-ui和axios，前端操作无需担忧，默认less.js自动补全前缀，省心省力
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script lang="ts">
import { title } from "@/utils/config";
import { createComponent } from "@vue/composition-api";
import appLogo from "../logo.vue";
export default createComponent({
	name: "home-main",
	components: {
		appLogo
	},
	setup() {
		return {
			title
		};
	}
});
</script>

<style lang="less" scoped>
#home-main {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
  align-items: center;
  span {
    margin:10px;
  }
	p,
	.el-collapse {
		a {
			text-decoration: none;
			color: orange;
		}
		unicode-bidi: isolate;
		font-variant-numeric: tabular-nums;
		margin: 0 0 15px;
		line-height: 1.618;
		font-size: 18px;
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		color: grey;
		font-weight: 300;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	}
}
</style>
