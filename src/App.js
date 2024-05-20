import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Main from './comps/main';
import NoPage from  './comps/nopage';
import Contact from './comps/contact';
import Foot from './comps/foot';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcements from './comps/Announcements';

function App() {
  return (
  <>
    <BrowserRouter>
<Routes>
<Route path="/" element={<Announcements />} />
<Route index element={<Contact />} />

  <Route path="*" element={<NoPage/>} />
</Routes>
</BrowserRouter>

  </>
  );
}

export default App;
