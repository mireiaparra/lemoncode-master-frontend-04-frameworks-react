import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { SearchContextProvider } from "./searchContext";

export const App = () => {
  return (
      <Router>
        <SearchContextProvider>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/list" element={<ListPage/>} />
            <Route path="/detail/:id" element={<DetailPage/>} />
        </Routes>
         </SearchContextProvider>
    </Router>
  );
};