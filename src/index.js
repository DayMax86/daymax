import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Crochet from './pages/crochet';
import LsPrivacyPolicy from "./pages/linguasyne/privacypolicy";
import LsDeleteAccount from "./pages/linguasyne/deleteaccount";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="crochet" element={<Crochet />}/>
        </Route>
      </Routes>
      <Routes>
        <Route path="/linguasyne/">
          <Route path="privacypolicy" element={<LsPrivacyPolicy/>}/>
          <Route path="deleteaccount" element={<LsDeleteAccount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

