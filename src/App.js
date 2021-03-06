import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';


function App() {
  return (
    <>
      <h1>Star Wars Starships</h1>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
