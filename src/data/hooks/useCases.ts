
import { useMemo } from 'react';
import { cases, getCaseById, getCasesByCategory, getCasesSortedByPriceAsc, getCasesSortedByPriceDesc } from '../cases';
import { Case } from '../types';

/**
 * Хук для работы с кейсами, предоставляет различные методы фильтрации и сортировки
 */
export const useCases = () => {
  /**
   * Получить все кейсы
   */
  const getAllCases = useMemo(() => cases, []);

  /**
   * Получить кейс по ID
   */
  const getCaseItemById = (id: string) => getCaseById(id);

  /**
   * Фильтрация и сортировка кейсов
   * @param filter - Фильтр для применения
   * @returns Отфильтрованный и отсортированный массив кейсов
   */
  const getFilteredCases = (filter: string): Case[] => {
    switch(filter) {
      case 'popular':
        // В реальном приложении здесь могла бы быть логика сортировки по популярности
        return cases;
      case 'new':
        // Имитируем сортировку по новизне (просто перемешиваем массив)
        return [...cases].reverse();
      case 'price-asc':
        return getCasesSortedByPriceAsc();
      case 'price-desc':
        return getCasesSortedByPriceDesc();
      case 'all':
      default:
        return cases;
    }
  };

  /**
   * Поиск кейсов по названию
   * @param searchTerm - Поисковый запрос
   * @returns Массив найденных кейсов
   */
  const searchCases = (searchTerm: string): Case[] => {
    if (!searchTerm.trim()) return cases;
    
    const lowercasedTerm = searchTerm.toLowerCase();
    return cases.filter(caseItem => 
      caseItem.title.toLowerCase().includes(lowercasedTerm) ||
      caseItem.items.some(item => item.name.toLowerCase().includes(lowercasedTerm))
    );
  };

  return {
    getAllCases,
    getCaseItemById,
    getFilteredCases,
    searchCases,
    getCasesByCategory
  };
};

export default useCases;
