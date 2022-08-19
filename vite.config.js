import { sveltekit } from '@sveltejs/kit/node_modules/vite';

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit()]
};

export default config;