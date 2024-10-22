import { Plugin, App } from 'vue';
import './style.css';
import Button from './components/Button.vue';

const plugin: Plugin = {
    install(app: App) {
        app.component("ButtonGista", Button);
    }
};

export default plugin;