
import { ItemRarity } from '@/data/types';

/**
 * Получение цвета в зависимости от редкости предмета
 */
export const getRarityColorClasses = (rarity: ItemRarity) => {
  switch (rarity) {
    case 'legendary': return {
      text: 'text-yellow-500',
      border: 'border-yellow-500',
      combined: 'text-yellow-500 border-yellow-500'
    };
    case 'rare': return {
      text: 'text-purple-500',
      border: 'border-purple-500',
      combined: 'text-purple-500 border-purple-500'
    };
    case 'uncommon': return {
      text: 'text-blue-500',
      border: 'border-blue-500',
      combined: 'text-blue-500 border-blue-500'
    };
    default: return {
      text: 'text-gray-400',
      border: 'border-gray-500',
      combined: 'text-gray-400 border-gray-500'
    };
  }
};

/**
 * Форматирование строки цены
 */
export const formatPrice = (value: number): string => {
  return `$${value.toFixed(2)}`;
};

/**
 * Форматирование названия редкости предмета
 */
export const formatRarityName = (rarity: ItemRarity): string => {
  return rarity.charAt(0).toUpperCase() + rarity.slice(1);
};
