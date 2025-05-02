
import { CaseItem } from '../types';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Предметы для премиум кейса
 */
export const premiumItems: CaseItem[] = [
  {
    name: 'ТОП-10 лучших статей',
    image: getUnsplashImageUrl('1499750310107-5fef28a66643', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'legendary',
    value: 99.99
  },
  {
    name: 'Курс по контент-маркетингу',
    image: getUnsplashImageUrl('1553484771-0a384d19a6e9', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'rare',
    value: 69.99
  },
  {
    name: 'Шаблоны для блога',
    image: getUnsplashImageUrl('1517694712202-14dd9538aa97', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'uncommon',
    value: 39.99
  },
  {
    name: 'Чек-лист для статей',
    image: getUnsplashImageUrl('1484480974693-6ca0a78fb36b', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'common',
    value: 19.99
  }
];
