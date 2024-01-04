import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/list" element={<ListPage/>} />
            <Route path="/detail" element={<DetailPage/>} />
        </Routes>
    </Router>
  );
};