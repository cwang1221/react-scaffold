import React from 'react'
import ReactDOM from 'react-dom'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ErrorBoundaryPage } from './pages'
import { AppProvider } from './contexts'

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
    <AppProvider>
      <App />
    </AppProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
