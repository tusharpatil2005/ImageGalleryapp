const SearchBar = ({ searchQuery, setSearchQuery, className = "" }) => {
  return (
    <input
      type="text"
      placeholder="Search images..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className={`px-4 py-2 rounded-full outline-none border border-white/40
      bg-white text-black focus:ring-2 focus:ring-white ${className}`}
    />
  );
};

export default SearchBar;
