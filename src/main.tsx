import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/scss/main.scss'


import AppRouter from "@/routes/AppRouter.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
