import Count from "./Count.tsx";
import Form from "./Form.tsx";
import List from "./List.tsx";
import Order from "./Order.tsx";
import OrderResult from "./OrderResult.tsx";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/style/main.scss";

import Logo from "./Logo";

function App() {
  return (
    <>
      <div className="container text-primary">
        <Logo title="Welcom to Vite + React!" />
        <nav className="d-flex justify-content-center mb-3 gap-3">
          <a href="#/">Count</a>
          <a href="#/form">Form</a>
          <a href="#/list">List</a>
          <a href="#/order">Order</a>
          <a href="#/orderResult">Order Result</a>
        </nav>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Count />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderResult" element={<OrderResult />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
