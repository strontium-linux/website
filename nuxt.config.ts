// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/icon/module',
		'@nuxt/eslint',
		'@nuxtjs/seo',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'@nuxt/content',
		'@nuxt/image',
	],
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	site: {
		name: 'Strontium Linux',
	},

	css: ['~/assets/css/main.css'],

	routeRules: {
		'/': {
			redirect: '/home',
		},
	},
});
