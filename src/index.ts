import './style.css';

import { Plugin, App } from 'vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';

const plugin: Plugin = {
    install(app: App) {
        app.component("ButtonGista", Button);
        app.component("InputGista", Input);
        app.component("SelectGista", Select);
    }
};

export default plugin;