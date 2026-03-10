import React from 'react'
import { ConfigProvider, theme } from 'antd'
import 'antd/dist/reset.css';

import { AuthProvider } from './Context/AuthContext'
import MainRoute from './Routes'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Urbanist, sans-serif',
          colorPrimary: '#78C0DD',
          colorBgContainer: '#FFFFFF',
          colorBgLayout: '#78C0DD',
          colorTextBase: '#212121'
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <AuthProvider>
        <MainRoute />
      </AuthProvider>
    </ConfigProvider>
  )
}

export default App
