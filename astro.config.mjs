import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	adapter: deno(),
	integrations: [svelte()],
	output: "server",
	server: {
		headers: {
			"Access-Control-Allow-Origin": "https://legacy.rightonhana.dev",
			"Cache-Control": "public, max-age=0, must-revalidate",
			"Content-Security-Policy":
				"base-uri 'self'; block-all-mixed-content; child-src 'self'; connect-src 'self'; default-src 'self'; font-src 'self'; form-action 'self'; frame-ancestors 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; object-src 'none'; report-uri /csp-report; report-to csp-endpoint; require-trusted-types-for 'script'; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-modals allow-top-navigation-by-user-activation; script-src 'self' 'unsafe-inline'; script-src-attr 'self' 'unsafe-inline'; script-src-elem 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; style-src-attr 'self' 'unsafe-inline'; style-src-elem 'self' 'unsafe-inline'; trusted-types 'none'; upgrade-insecure-requests; worker-src 'self';",
			"Permissions-Policy":
				"accelerometer=(), autoplay=(), camera=(), clipboard-read=(), clipboard-write=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(), gamepad=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), window-management=(), xr-spatial-tracking=()",
			"Referrer-Policy": "no-referrer",
			"X-Content-Type-Options": "nosniff",
			"X-Frame-Options": "DENY",
			"X-XSS-Protection": "1; mode=block",
		},
	},
});
