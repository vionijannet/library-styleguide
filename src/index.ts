import './style.css';

import { Plugin, App } from 'vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';

const plugin: Plugin = {
    install(app: App) {
        app.component("ButtonGista", Button);
        app.component("InputGista", Input);
    }
};

export * from "./types";
export default plugin;