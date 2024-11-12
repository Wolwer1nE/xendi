// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { mount } from 'svelte'

import DemoSvelteComponent from "./svelte/DemoSvelteComponent.svelte";

const container = document.querySelector('.appRoot')
const app = mount(DemoSvelteComponent, {target: container})
export default app;