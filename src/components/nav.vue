<template>
	<div id="app-nav">
		<el-menu
			:default-active="index"
			class="el-menu-demo"
			mode="horizontal"
			:router="true"
		>
			<el-menu-item>
				<a href="./" style="text-decoration: none;font-size: 20px">
					{{ title }}
				</a>
			</el-menu-item>

			<template v-if="width > 750">
				<el-menu-item
					:index="item.router"
					:route="item.router"
					class="right-menu"
					v-for="item in nav"
					:key="item.name"
					>{{ item.name }}</el-menu-item
				>
			</template>

			<template v-else>
				<i class="el-icon-menu icon right-menu" @click="iconClick"></i>
			</template>
		</el-menu>

		<el-drawer
			:visible.sync="showMenu"
			direction="ltr"
			:title="title"
			size="100%"
		>
			<el-menu
				:default-active="index"
				class="el-menu-vertical-demo"
				:router="true"
				@select="menuClick"
			>
				<app-logo></app-logo>
				<el-menu-item
					:index="item.router"
					:route="item.router"
					v-for="item in nav"
					:key="item.name"
					>{{ item.name }}</el-menu-item
				>
			</el-menu>
		</el-drawer>
	</div>
</template>

<script lang="ts">
import { title } from "../utils/config";
import { useWindow } from "../utils/useHooks";
import { createComponent, onMounted, ref } from "@vue/composition-api";
import appLogo from "./logo.vue";
export default createComponent({
	name: "app-nav",
	components: {
		appLogo
	},
	setup(props, ctx) {
		const nav = [
			{
				name: "首页",
				router: "/"
			}
		];
		const { width } = useWindow();
		const index = ctx.root.$route.path;
		const showMenu = ref(false);
		function iconClick() {
			showMenu.value = !showMenu.value;
		}
		function menuClick(key: string) {
			if (key) {
				iconClick();
			}
		}
		return {
			nav,
			title,
			width,
			index,
			menuClick,
			showMenu,
			iconClick
		};
	}
});
</script>

<style lang="less" scoped>
.logo {
	width: 55px;
	padding-right: 5px;
	margin-right: 5px;
	position: relative;
	top: -8px;
}

.right-menu {
	float: right !important;
}

.icon {
	font-size: 35px;
	position: relative;
	top: 15px;
	color: LightGray;
	right: 5px;
}
</style>
