import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { SnackbarProvider } from 'notistack';
import ReportComplete from './components/notistack/SampleNoti.jsx';
import DarkNotification from './components/notistack/Dark.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider Components={{rc: ReportComplete, darktest: DarkNotification}}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </BrowserRouter>,
)
