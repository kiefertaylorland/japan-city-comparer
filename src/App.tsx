import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import CityDetailPage from './pages/CityDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/city/:cityId" element={<CityDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App