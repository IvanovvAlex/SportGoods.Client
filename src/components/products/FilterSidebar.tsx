import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  searchQuery: string;
  onApplyFilters: (filters: {
    category?: string | null;
    search?: string;
    minPrice?: number | null;
    maxPrice?: number | null;
    rating?: number | null;
  }) => void;
}

const FilterSidebar = ({
  categories,
  selectedCategory,
  searchQuery,
  onApplyFilters,
}: FilterSidebarProps) => {
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleApplyAllFilters = () => {
    onApplyFilters({
      search: searchInput.trim(),
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      rating: selectedRating || null,
    });
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedRating(0);
    onApplyFilters({
      category: null,
      search: "",
      minPrice: null,
      maxPrice: null,
      rating: null,
    });
  };

  const handleCategoryChange = (categoryId: string | null) => {
    onApplyFilters({ category: categoryId });
  };

  const handleRatingChange = (rating: number) => {
    const newRating = rating === selectedRating ? 0 : rating;
    setSelectedRating(newRating);
    onApplyFilters({ rating: newRating || null });
  };

  return (
    <div className="w-full space-y-6 md:w-64">
      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
        <button
          onClick={handleApplyAllFilters}
          className="w-full rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
        >
          Apply filters
        </button>
        <button
          onClick={handleClearFilters}
          className="flex w-full items-center justify-center space-x-1 rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-primary-400"
        >
          <XMarkIcon className="h-5 w-5" />
          <span>Clear filters</span>
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-dark-700">Price range</h3>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
            className="w-1/2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            className="w-1/2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-dark-700">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`w-full rounded-md px-4 py-2 text-left ${
              !selectedCategory
                ? "bg-primary-100 text-primary-700"
                : "hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            All categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full rounded-md px-4 py-2 text-left ${
                selectedCategory === category.id
                  ? "bg-primary-100 text-gray-900"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-dark-700">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`w-full rounded-md px-4 py-2 text-left ${
                selectedRating === rating
                  ? "bg-primary-100 text-gray-900"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {Array(rating).fill("★").join("")} & up
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
