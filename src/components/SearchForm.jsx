import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Navigate to the search results page with query as URL param
    navigate(`/search?query=${encodeURIComponent(query)}`);
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
