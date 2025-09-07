import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // If the search is a text query
    let url = `/search-result?type=mix&query=${encodeURIComponent(query)}`;

    navigate(url);
  };

  return (
    <form className="search-form ms-4 d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="form-control me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
