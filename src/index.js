import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Crochet from './pages/crochet';
import LsPrivacyPolicy from "./pages/linguasyne/privacypolicy";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/crochet" element={<Crochet />}/>
        </Route>
      </Routes>
      <Routes>
        <Route path="/linguasyne/">
          <Route path="privacypolicy" element={<LsPrivacyPolicy/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

