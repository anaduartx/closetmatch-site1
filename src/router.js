import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}