import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Docs } from './pages/docs.tsx'
import UseFiltersPage from './pages/usefilter.tsx'
import Introduction from './pages/introduction.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/docs"
          element={<Docs />}
        >
          <Route path='/docs/introduction'
            element={<Introduction />}
          />
          <Route path="/docs/use-filter"
            element={<UseFiltersPage />}
          />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
)

// Dark mode by default
document.body.classList.add("dark")
