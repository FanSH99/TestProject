import Vue from 'vue';

import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

let useElement = () => {
    Vue.use(Button);
}

export default useElement;