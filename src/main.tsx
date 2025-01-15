import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from './query/QueryProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </BrowserRouter>
  </Provider>
)
