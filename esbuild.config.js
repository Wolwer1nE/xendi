#!/usr/bin/env node

import * as esbuild from 'esbuild'
import sveltePlugin from "esbuild-svelte";

const start = performance.now();

let ctx = await esbuild.context({
    entryPoints: ["app/javascript/application.js"],
    bundle: true,
    outfile: "app/assets/builds/application.js",
    plugins: [sveltePlugin()],
    logLevel: "info"
})

await ctx.watch()
const end = performance.now();
console.log('✨ Build succeeded.');
console.log(`Execution time: ${end - start} ms`);
console.log('watching...')