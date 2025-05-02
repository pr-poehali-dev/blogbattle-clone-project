
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CaseItem } from '@/data/types';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface UserInventoryProps {
  inventoryItems: CaseItem[];
  onUpgradeClick: (item: CaseItem) => void;
}

const UserInventory: React.FC<UserInventoryProps> = ({ inventoryItems, onUpgradeClick }) => {
  // Сортировка предметов по цене (от самых дорогих к самым дешевым)
  const sortedItems = [...inventoryItems].sort((a, b) => b.value - a.value);
  
  // Расчет общей стоимости инвентаря
  const totalValue = inventoryItems.reduce((sum, item) => sum + item.value, 0);
  
  // Функция для получения цвет рамки в зависимости от редкости предмета
  const getRarityBorderColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-500';
      case 'rare': return 'border-purple-500';
      case 'uncommon': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative">
          <Icon name="Backpack" size={20} />
          {inventoryItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {inventoryItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-card border-l border-border">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-white">Ваш инвентарь</SheetTitle>
        </SheetHeader>
        
        {inventoryItems.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <Icon name="Package" className="mx-auto mb-3" size={32} />
            <p>У вас пока нет предметов в инвентаре</p>
            <p className="text-sm mt-2">Откройте кейсы, чтобы получить предметы</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4 px-1">
              <p className="text-sm text-muted-foreground">
                Всего предметов: <span className="text-white font-medium">{inventoryItems.length}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Общая стоимость: <span className="text-white font-medium">${totalValue.toFixed(2)}</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[70vh] pr-2">
              {sortedItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-muted rounded-lg overflow-hidden"
                >
                  <div className={cn(
                    "h-24 border-b-2",
                    getRarityBorderColor(item.rarity)
                  )}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="p-2">
                    <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.rarity}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-white font-medium">${item.value.toFixed(2)}</p>
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2 hover:bg-background"
                        onClick={() => onUpgradeClick(item)}
                      >
                        <Icon name="ArrowUpCircle" className="text-primary" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => window.location.href = '/upgrade'}>
                Улучшить предметы
                <Icon name="ArrowUp" className="ml-2" size={18} />
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default UserInventory;
