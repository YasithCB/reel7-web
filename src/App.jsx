import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TvSeries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search-result" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
