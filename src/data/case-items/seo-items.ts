
import { CaseItem } from '../types';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Предметы для SEO кейса
 */
export const seoItems: CaseItem[] = [
  {
    name: 'Полный курс по SEO',
    image: getUnsplashImageUrl('1559028012-481c04fa702d', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'legendary',
    value: 89.99
  },
  {
    name: 'Гайд по SEO-анализу',
    image: getUnsplashImageUrl('1546900703-cf06143d1239', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'rare',
    value: 59.99
  },
  {
    name: 'Инструменты для SEO',
    image: getUnsplashImageUrl('1542744173-8e7e53415bb0', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'uncommon',
    value: 29.99
  },
  {
    name: 'Основы ключевых слов',
    image: getUnsplashImageUrl('1589998059171-988d887df646', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'common',
    value: 14.99
  }
];
