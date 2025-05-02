
import React from 'react';
import { Button } from '@/components/ui/button';
import { CaseItem } from '@/data/types';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface InventoryProps {
  items: CaseItem[];
  onSelectItem: (item: CaseItem) => void;
  className?: string;
}

const Inventory: React.FC<InventoryProps> = ({ items, onSelectItem, className }) => {
  // Функция для получения цвет рамки в зависимости от редкости предмета
  const getRarityBorderColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-500';
      case 'rare': return 'border-purple-500';
      case 'uncommon': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  };
  
  // Функция для получения цвета текста в зависимости от редкости предмета
  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-500';
      case 'rare': return 'text-purple-500';
      case 'uncommon': return 'text-blue-500';
      default: return 'text-gray-400';
    }
  };
  
  if (items.length === 0) {
    return (
      <div className={cn("p-6 text-center text-muted-foreground", className)}>
        <Icon name="Package" className="mx-auto mb-3" size={32} />
        <p>У вас пока нет предметов в инвентаре</p>
        <Button 
          className="mt-4 bg-primary hover:bg-primary/90"
          onClick={() => window.location.href = '/'}
        >
          Открыть кейсы
        </Button>
      </div>
    );
  }
  
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4", className)}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:translate-y-[-4px] cursor-pointer"
          onClick={() => onSelectItem(item)}
        >
          <div 
            className={cn(
              "h-32 border-b-2",
              getRarityBorderColor(item.rarity)
            )}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-3">
            <h4 className="text-sm font-semibold text-white line-clamp-1">{item.name}</h4>
            <p className={cn(
              "text-xs mt-1",
              getRarityTextColor(item.rarity)
            )}>
              {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
            </p>
            <p className="text-white font-medium mt-1">${item.value.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
