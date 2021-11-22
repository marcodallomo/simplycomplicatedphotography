module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,jpg,ico,html,json,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};