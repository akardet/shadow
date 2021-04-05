const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withTM = require('next-transpile-modules')(['gsap', 'gsap/Draggable'])

module.exports = withPlugins([withSvgr, withTM])
