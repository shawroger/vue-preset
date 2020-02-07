import { Ref, ref, onMounted, onUnmounted } from "@vue/composition-api";

/*
	useWindow
*/
export function useWindow(): {
	width: Ref<number>;
	height: Ref<number>;
} {
	const width = ref(0);
	const height = ref(0);
	const resizeAction = () => {
		return (() => {
			width.value = document.body.clientWidth;
			height.value = document.body.clientHeight;
		})();
	};
	onMounted(() => {
		width.value = document.body.clientWidth;
		height.value = document.body.clientHeight;
		window.addEventListener("resize", resizeAction);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", resizeAction);
	});

	return { width, height };
}

/*
	useStyles
*/
interface UseStyles {
	[key: string]: string;
}
function useStylesAsCreated(styles: string): Ref<UseStyles> {
	let stylesObject: UseStyles = {};

	const toHump = (str: string) =>
		str.replace(/-(\w)/g, (_, val) => val.toUpperCase());
	const stylesArr = styles
		.split(";")
		.map(v => v.replace(/[\r\n]/g, "").replace(/\s+/g, ""))
		.filter(v => v.length > 0)
		.map(v => toHump(v));
	stylesArr.forEach(v => {
		const styleFragment = v.split(":");
		const key = styleFragment[0];
		const val = styleFragment[1];
		stylesObject[key] = val;
	});
	return ref(stylesObject);
}

function useStylesAsChanged(styles: Ref<UseStyles>, newStyles: string): void {
	const newStylesArr = useStylesAsCreated(newStyles).value;
	styles.value = { ...styles.value, ...newStylesArr };
}

export function useStyles(styles: string): Ref<UseStyles>;
export function useStyles(styles: Ref<UseStyles>, newStyles: string): void;
export function useStyles(styles: string | Ref<UseStyles>, newStyles?: string) {
	if (arguments.length === 1) {
		return useStylesAsCreated(styles as string);
	} else {
		return useStylesAsChanged(styles as Ref<UseStyles>, newStyles!);
	}
}

/*
	useKeyup
*/

export function useKeyup(keyCode: number | string, callback?: any) {
	const keyupAction = (e: { keyCode: number; key: string }) => {
		if (e.keyCode === keyCode || e.key === keyCode) {
			if (callback) {
				callback();
			}
		}
	};
	onMounted(() => {
		window.addEventListener("keyup", keyupAction);
	});

	onUnmounted(() => {
		window.removeEventListener("keyup", keyupAction);
	});
}

/*
	useScript 
*/

export function useScript(params: {
	src?: string;
	text?: string;
}): void {
	function loadScriptBySrc(link: string) {
		let script = document.createElement("script");
		script.type = "text/javascript";
		script.src = link;
		document.getElementsByTagName("head")[0].appendChild(script);
	}

	function loadScriptByText(text: string) {
		let script = document.createElement("script");
		script.type = "text/javascript";
		script.text = text;
		document.getElementsByTagName("head")[0].appendChild(script);
	}

	onMounted(() => {
		if(params.src) {
			loadScriptBySrc(params.src);
		}

		if(params.text) {
			loadScriptByText(params.text);
		}
	});
}
