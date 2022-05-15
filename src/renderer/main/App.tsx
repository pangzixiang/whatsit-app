import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/appBar/AppBar';
import RouterMapping from './router/routerMapping';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Routes>
          {RouterMapping.map((item) => (
            <Route key={item.path} path={item.path} element={item.component} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
