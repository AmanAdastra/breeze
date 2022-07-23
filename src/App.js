import Layout from './components/Layout/Layout'
import Weather from './pages/Weather/Weather'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './pages/Settings/Settings'
import Roadmap from './pages/Roadmap/Roadmap'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="weather" element={<Weather />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="roadmap" element={<Roadmap />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </>
}

export default App;
