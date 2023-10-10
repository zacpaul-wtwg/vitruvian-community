// File: next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@components": "./src/components",
			"@pages": "./src/pages",
			"@contexts": "./src/contexts",
			"@utils": "./src/utils",
		}

		return config
	},
}

module.exports = nextConfig
