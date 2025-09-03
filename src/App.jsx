import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TvSeries />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load delay
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
      setLoading(false);
    }, 1000); // 1s delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      {!loading && <Outlet />}
      <Footer />
    </div>
  );
}
