import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LineChart from "./App";
import Test from "./pages/Test";
import Login from "./pages/Login";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/diagram" element={<Home />} />
          <Route path={"/diagram/1337" } element={<LineChart />} />
          <Route path="test" element={<Test />} />     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);