
import { Case } from './types';
import {
  premiumCase,
  seoCase,
  contentCase,
  monetizationCase,
  copywritingCase,
  socialMediaCase
} from './case-definitions';

/**
 * Все доступные кейсы в приложении
 */
export const cases: Case[] = [
  premiumCase,
  seoCase,
  contentCase,
  monetizationCase,
  copywritingCase,
  socialMediaCase
];

/**
 * Получение кейса по его ID
 * @param id - Идентификатор кейса
 * @returns Кейс или undefined если не найден
 */
export const getCaseById = (id: string): Case | undefined => {
  return cases.find(caseItem => caseItem.id === id);
};

/**
 * Получение кейсов по категории
 * @param category - Категория кейсов
 * @returns Массив кейсов данной категории
 */
export const getCasesByCategory = (category: string): Case[] => {
  return cases.filter(caseItem => caseItem.category === category);
};

/**
 * Сортировка кейсов по цене (по возрастанию)
 * @returns Отсортированный массив кейсов
 */
export const getCasesSortedByPriceAsc = (): Case[] => {
  return [...cases].sort((a, b) => a.price - b.price);
};

/**
 * Сортировка кейсов по цене (по убыванию)
 * @returns Отсортированный массив кейсов
 */
export const getCasesSortedByPriceDesc = (): Case[] => {
  return [...cases].sort((a, b) => b.price - a.price);
};

export default cases;
