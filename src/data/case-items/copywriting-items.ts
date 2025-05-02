
import { CaseItem } from '../types';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Предметы для копирайтинг кейса
 */
export const copywritingItems: CaseItem[] = [
  {
    name: 'Копирайтинг мастер-класс',
    image: getUnsplashImageUrl('1504691342899-4d92b50853e1', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'legendary',
    value: 69.99
  },
  {
    name: 'Техники убеждения в тексте',
    image: getUnsplashImageUrl('1456324504439-367cee3b3c32', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'rare',
    value: 49.99
  },
  {
    name: 'Копирайтинг 101',
    image: getUnsplashImageUrl('1506784365847-bbad939e9335', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'uncommon',
    value: 24.99
  },
  {
    name: 'Основы редактирования текста',
    image: getUnsplashImageUrl('1596697612270-0798a7dc8203', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'common',
    value: 14.99
  }
];
