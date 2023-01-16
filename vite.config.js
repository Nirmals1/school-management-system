import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": "http://192.168.1.64:8000/api/",
		},
	},
	plugins: [react()],
	commonjsOptions: {
		esmExternals: true,
	},
});
