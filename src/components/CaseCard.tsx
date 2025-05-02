
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CaseOpening from '@/components/CaseOpening';
import { CaseItem } from '@/data/types';
import { toast } from '@/components/ui/use-toast';

interface CaseCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  items: CaseItem[];
}

const CaseCard: React.FC<CaseCardProps> = ({ id, title, price, image, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpeningCase, setIsOpeningCase] = useState(false);
  
  const handleOpenCase = () => {
    setIsOpeningCase(true);
  };
  
  const handleCloseCase = () => {
    setIsOpeningCase(false);
  };
  
  const handleItemDrop = (item: CaseItem) => {
    // Получаем текущий инвентарь пользователя
    const userInventory = JSON.parse(localStorage.getItem('userInventory') || '[]');
    
    // Добавляем выпавший предмет
    userInventory.push(item);
    
    // Сохраняем обновленный инвентарь
    localStorage.setItem('userInventory', JSON.stringify(userInventory));
    
    // Показываем уведомление
    toast({
      title: "Вы получили предмет!",
      description: `${item.name} - $${item.value.toFixed(2)}`,
      variant: "default",
    });
  };
  
  return (
    <>
      <div 
        className="relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="bg-muted px-3 py-1 rounded-full text-primary font-medium text-sm">
              ${price.toFixed(2)}
            </span>
          </div>
          
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            />
          </div>
          
          <div className="flex overflow-x-auto gap-2 mb-4 scrollbar-hide">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 ${
                  item.rarity === 'legendary' ? 'border-yellow-500' :
                  item.rarity === 'rare' ? 'border-purple-500' :
                  item.rarity === 'uncommon' ? 'border-blue-500' : 'border-gray-500'
                }`}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
            size="lg"
            onClick={handleOpenCase}
          >
            Открыть кейс
            <Icon name="ChevronRight" size={18} />
          </Button>
        </div>
      </div>
      
      <CaseOpening 
        isOpen={isOpeningCase}
        onClose={handleCloseCase}
        caseTitle={title}
        items={items}
        onItemDrop={handleItemDrop}
      />
    </>
  );
};

export default CaseCard;
