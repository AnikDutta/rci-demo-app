import React from 'react';
import { render } from "react-dom";
import Loadble from 'react-loadable';
//import Hello from './component/hello'
import loading from './component/loading';

const AsyncHello = Loadble({
    loader: () => import('./component/hello'),
    loading: loading
})


render(<AsyncHello />, document.getElementById('root'));