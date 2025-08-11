/**
 * @typedef {import('botasaurus-controls').Controls} Controls
 * @typedef {import('botasaurus-controls').FileTypes} FileTypes
 *
 */

/**
 * @param {Controls} controls
 */
function getInput(controls) {
    controls
        // Render a Link Input
        .link('link', { isRequired: true, defaultValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" })
}
