
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CaseItem } from '@/data/types';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface CaseOpeningProps {
  isOpen: boolean;
  onClose: () => void;
  caseTitle: string;
  items: CaseItem[];
  onItemDrop: (item: CaseItem) => void;
}

const CaseOpening: React.FC<CaseOpeningProps> = ({ 
  isOpen, 
  onClose, 
  caseTitle, 
  items, 
  onItemDrop 
}) => {
  const [isRolling, setIsRolling] = useState(false);
  const [droppedItem, setDroppedItem] = useState<CaseItem | null>(null);
  const [rollingItems, setRollingItems] = useState<CaseItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Подготовка предметов для анимации
  useEffect(() => {
    if (isOpen && items.length > 0) {
      // Создаем массив из случайных предметов для анимации
      const randomItems: CaseItem[] = [];
      for (let i = 0; i < 50; i++) {
        randomItems.push(items[Math.floor(Math.random() * items.length)]);
      }
      
      // Выбираем выпавший предмет (с учетом вероятности в будущем)
      const resultItem = items[Math.floor(Math.random() * items.length)];
      
      // Добавляем выпавший предмет в определенную позицию
      const resultPosition = 35;
      randomItems[resultPosition] = resultItem;
      
      setRollingItems(randomItems);
      setDroppedItem(resultItem);
    }
  }, [isOpen, items]);
  
  // Функция для начала анимации открытия кейса
  const startOpeningAnimation = () => {
    if (containerRef.current && rollingItems.length > 0) {
      setIsRolling(true);
      
      // Анимация прокрутки предметов
      setTimeout(() => {
        setIsRolling(false);
        if (droppedItem) {
          onItemDrop(droppedItem);
        }
      }, 5000); // Длительность анимации
    }
  };
  
  // Функция для получения цвет рамки в зависимости от редкости предмета
  const getRarityBorderColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-500 shadow-yellow-500/50';
      case 'rare': return 'border-purple-500 shadow-purple-500/50';
      case 'uncommon': return 'border-blue-500 shadow-blue-500/50';
      default: return 'border-gray-500';
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={() => !isRolling && onClose()}>
      <DialogContent className="sm:max-w-2xl bg-card text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Открытие кейса: {caseTitle}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 mb-8">
          <div className="relative overflow-hidden h-24 mb-6 mx-auto bg-muted rounded-md">
            {/* Индикатор результата (стрелка) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-full">
              <div className="h-full w-1 bg-primary"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                border-l-8 border-r-8 border-b-8 
                border-l-transparent border-r-transparent border-b-primary"></div>
            </div>
            
            {/* Контейнер для прокрутки предметов */}
            <div 
              ref={containerRef}
              className="flex items-center h-full transition-transform duration-5000 ease-out"
              style={{ 
                transform: isRolling ? 'translateX(-4300px)' : 'translateX(0)',
                transition: isRolling ? 'transform 5s cubic-bezier(0.2, 0.9, 0.1, 1)' : undefined
              }}
            >
              <div className="flex space-x-4 pl-[600px]">
                {rollingItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 shadow-md",
                      getRarityBorderColor(item.rarity)
                    )}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Результат выпадения */}
          {!isRolling && droppedItem && (
            <div className="text-center animate-fade-in">
              <div 
                className={cn(
                  "mx-auto w-32 h-32 rounded-md overflow-hidden border-4 shadow-lg",
                  getRarityBorderColor(droppedItem.rarity)
                )}
              >
                <img src={droppedItem.image} alt={droppedItem.name} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="mt-4 text-lg font-bold">{droppedItem.name}</h3>
              <p className={cn(
                "text-sm",
                droppedItem.rarity === 'legendary' ? 'text-yellow-500' :
                droppedItem.rarity === 'rare' ? 'text-purple-500' :
                droppedItem.rarity === 'uncommon' ? 'text-blue-500' : 'text-gray-400'
              )}>
                {droppedItem.rarity.charAt(0).toUpperCase() + droppedItem.rarity.slice(1)}
              </p>
              <p className="text-xl font-bold mt-2">${droppedItem.value.toFixed(2)}</p>
            </div>
          )}
          
          {/* Кнопка запуска или закрытия */}
          <div className="mt-6 flex justify-center">
            {!isRolling && !droppedItem && (
              <Button 
                onClick={startOpeningAnimation} 
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8"
                size="lg"
              >
                Крутить
                <Icon name="Pocket" className="ml-2" size={20} />
              </Button>
            )}
            
            {!isRolling && droppedItem && (
              <div className="space-x-4">
                <Button 
                  onClick={onClose} 
                  className="bg-secondary hover:bg-secondary/90 text-white py-3 px-6"
                >
                  Забрать предмет
                </Button>
                <Button 
                  onClick={() => window.location.href = '/upgrade'} 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-6"
                >
                  Улучшить
                  <Icon name="ArrowUp" className="ml-2" size={18} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseOpening;
