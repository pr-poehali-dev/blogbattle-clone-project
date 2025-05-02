
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UserInventory from '@/components/UserInventory';
import { CaseItem } from '@/data/types';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<CaseItem[]>([]);
  const navigate = useNavigate();
  
  // Загрузка инвентаря пользователя
  useEffect(() => {
    const handleStorageChange = () => {
      const storedItems = localStorage.getItem('userInventory');
      if (storedItems) {
        setInventoryItems(JSON.parse(storedItems));
      }
    };
    
    // Первичная загрузка
    handleStorageChange();
    
    // Слушаем изменения в localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Устанавливаем интервал для проверки изменений
    const interval = setInterval(handleStorageChange, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  
  const handleUpgradeClick = (item: CaseItem) => {
    navigate('/upgrade');
  };
  
  return (
    <header className="bg-card shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <Icon name="Box" className="mr-2 text-primary" size={24} />
            ContentCase
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-white hover:bg-muted"
              onClick={() => navigate('/')}
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Кейсы
            </Button>
            
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-white hover:bg-muted"
              onClick={() => navigate('/upgrade')}
            >
              <Icon name="ArrowUp" size={20} className="mr-2" />
              Апгрейды
            </Button>
            
            <UserInventory 
              inventoryItems={inventoryItems}
              onUpgradeClick={handleUpgradeClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
