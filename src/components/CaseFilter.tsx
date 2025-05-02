
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FilterProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

const CaseFilter: React.FC<FilterProps> = ({ onFilterChange, activeFilter }) => {
  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'popular', label: 'Популярные' },
    { id: 'new', label: 'Новые' },
    { id: 'price-asc', label: 'Цена (по возр.)' },
    { id: 'price-desc', label: 'Цена (по убыв.)' }
  ];
  
  return (
    <div className="flex overflow-x-auto gap-2 mb-6 py-2 scrollbar-hide items-center">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? 'default' : 'secondary'}
          size="sm"
          className="rounded-full whitespace-nowrap"
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
      
      <div className="ml-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск..."
            className="pl-10 pr-4 py-2 rounded-full bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Icon
            name="Search"
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseFilter;
