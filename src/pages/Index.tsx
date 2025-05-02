
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseCard from '@/components/CaseCard';
import BattleBanner from '@/components/BattleBanner';
import CaseFilter from '@/components/CaseFilter';
import LiveDrops from '@/components/LiveDrops';
import TopDrops from '@/components/TopDrops';
import { cases } from '@/data/cases';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };
  
  // Функция для фильтрации и сортировки кейсов
  const getFilteredCases = () => {
    let filteredCases = [...cases];
    
    switch(activeFilter) {
      case 'popular':
        // В реальном приложении здесь могла бы быть логика сортировки по популярности
        return filteredCases;
      case 'new':
        // Имитируем сортировку по новизне (просто перемешиваем массив)
        return filteredCases.reverse();
      case 'price-asc':
        return filteredCases.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return filteredCases.sort((a, b) => b.price - a.price);
      default:
        return filteredCases;
    }
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <BattleBanner />
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Открывай кейсы с контентом</h2>
          
          <CaseFilter 
            onFilterChange={handleFilterChange}
            activeFilter={activeFilter}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredCases().map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                id={caseItem.id}
                title={caseItem.title}
                price={caseItem.price}
                image={caseItem.image}
                items={caseItem.items}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <LiveDrops />
          <TopDrops />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
