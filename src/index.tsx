import React from 'react'
import { ConfigProvider } from 'antd'
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from '@ant-design/cssinjs'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider 
      theme={{ 
        token: { 
          colorTextBase: '#FFFFFF',
          fontFamily:'"Inter", sans-serif',
        },
        components: {
          Steps: {
            dotCurrentSize:16,
            dotSize:16,
          },
          Select: {
            clearBg:'#817CA5',
            colorText:'#413C5F',
            colorTextPlaceholder:'#C0BCDF'
          },
          Input:{
            colorTextPlaceholder:'#C0BCDF'
          },
        } 
      }}
    >
      <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
        <App />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
