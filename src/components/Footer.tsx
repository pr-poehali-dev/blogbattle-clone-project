
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Blog</span>Battle
            </h3>
            <p className="text-gray-400 text-sm">
              Платформа для открытия кейсов с блогами и статьями, где вы можете выиграть ценные призы.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary">Главная</Link>
              </li>
              <li>
                <Link to="/battles" className="text-gray-400 hover:text-primary">Сражения</Link>
              </li>
              <li>
                <Link to="/top" className="text-gray-400 hover:text-primary">Топ дропов</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary">Условия использования</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-primary">Политика возврата</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-primary">Служба поддержки</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Свяжитесь с нами</h4>
            <p className="text-gray-400 mb-2">
              <Icon name="Mail" size={16} className="inline-block mr-2" />
              support@blogbattle.com
            </p>
            <p className="text-gray-400">
              <Icon name="MapPin" size={16} className="inline-block mr-2" />
              Москва, Россия
            </p>
            <div className="mt-4">
              <div className="bg-muted p-3 rounded-lg inline-flex">
                <img src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=74&h=24&q=80" alt="Payment methods" className="h-6" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 BlogBattle. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
