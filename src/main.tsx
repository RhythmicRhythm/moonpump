import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store.ts';
import { Provider } from 'react-redux'

import App from './App.tsx'
import { config } from './wagmi.ts'

import './index.css'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>  
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
