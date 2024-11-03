
import React, { useState } from 'react';

function SearchFilters({ onSearch }) {

  const [storyType, setStoryType] = useState('stories');
  const [sortOrder, setSortOrder] = useState('popularity');
  const [timeRange, setTimeRange] = useState('all-time');

  return (
    <div className="search-filter">
      <select value={storyType} onChange={(e) => setStoryType(e.target.value)}>
        <option value="stories">Stories</option>
        <option value="comments">Comments</option>
        <option value="polls">Polls</option>
      </select>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="popularity">by Popularity</option>
        <option value="date">by Date</option>
      </select>
      <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
        <option value="all-time">for All Time</option>
        <option value="last-24h">Last 24h</option>
        <option value="past-week">Past Week</option>
        <option value="past-month">Past Month</option>
        <option value="past-year">Past Year</option>
      </select>
      
    </div>
  );
}

export default SearchFilters;
