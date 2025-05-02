
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BattleBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80')] opacity-20 bg-cover bg-center" />
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Блогерские сражения</h2>
            <p className="text-gray-300 max-w-md">
              Выбирайте сторону, открывайте кейсы и побеждайте в битвах. 
              Присоединяйтесь прямо сейчас!
            </p>
          </div>
          
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            <Icon name="Swords" className="mr-2" />
            Присоединиться к битве
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BattleBanner;
