// 引入react 核心庫
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
// 引入App組件
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'








const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
<React.StrictMode>
    <App />
</React.StrictMode>
)