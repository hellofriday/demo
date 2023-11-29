import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MetaMaskProvider } from '@metamask/sdk-react';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {Demo} from "./Demo";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <MetaMaskProvider debug={false} sdkOptions={{
      logging:{
          developerMode: false,
        },
        communicationServerUrl: process.env.REACT_APP_COMM_SERVER_URL,
        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
        dappMetadata: {
          name: "Demo React App",
          url: window.location.host,
        }
    }}>
        <BrowserRouter basename={'/'} >
            <Routes>
                <Route path="/" element={<App/>} /> {/* 👈 Renders at /app/ */}
                <Route path="/demo" element={<Demo/>} />
            </Routes>
        </BrowserRouter>
    </MetaMaskProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
