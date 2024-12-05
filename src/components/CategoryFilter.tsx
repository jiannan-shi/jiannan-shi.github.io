import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => onCategoryChange('All')}
        className={`text-sm ${
          activeCategory === 'All'
            ? 'text-gray-900'
            : 'text-gray-500 hover:text-gray-900'
        } link-hover`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`text-sm ${
            activeCategory === category
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-900'
          } link-hover`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;