
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-card border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-white">
                <span className="text-primary">Blog</span>Battle
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white hover:text-primary transition-colors font-medium">
                Все кейсы
              </Link>
              <Link to="/battles" className="text-white hover:text-primary transition-colors font-medium">
                Сражения
              </Link>
              <Link to="/top" className="text-white hover:text-primary transition-colors font-medium">
                Топ дропов
              </Link>
              <Link to="/faq" className="text-white hover:text-primary transition-colors font-medium">
                FAQ
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button variant="secondary" size="sm" className="rounded-full">
                <Icon name="Bell" size={16} />
              </Button>
              
              <Button variant="outline" size="sm" className="gap-2 rounded-full">
                <span>0.00 $</span>
                <Icon name="Plus" size={16} />
              </Button>
              
              <Button className="rounded-full gap-2">
                <Icon name="User" size={16} />
                <span>Войти</span>
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-card rounded-lg p-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-white hover:text-primary transition-colors font-medium">
                Все кейсы
              </Link>
              <Link to="/battles" className="text-white hover:text-primary transition-colors font-medium">
                Сражения
              </Link>
              <Link to="/top" className="text-white hover:text-primary transition-colors font-medium">
                Топ дропов
              </Link>
              <Link to="/faq" className="text-white hover:text-primary transition-colors font-medium">
                FAQ
              </Link>
              <div className="flex items-center gap-3 mt-2">
                <Button variant="secondary" size="sm" className="rounded-full">
                  <Icon name="Bell" size={16} />
                </Button>
                
                <Button variant="outline" size="sm" className="gap-2 rounded-full">
                  <span>0.00 $</span>
                  <Icon name="Plus" size={16} />
                </Button>
                
                <Button className="rounded-full gap-2">
                  <Icon name="User" size={16} />
                  <span>Войти</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
