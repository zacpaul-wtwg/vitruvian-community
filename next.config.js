/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache")
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	runtimeCaching,
})

module.exports = {
	...withPWA({
		// other configs
		reactStrictMode: false,
	}),
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@components": "./src/components",
			"@pages": "./src/pages",
			"@contexts": "./src/contexts",
			"@utils": "./src/utils",
			"@inputs": "./src/components/inputs",
			"@ui": "./src/components/ui",
		}

		return config
	},
}
