
import { CaseItem } from '../types';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Предметы для контент кейса
 */
export const contentItems: CaseItem[] = [
  {
    name: 'Техники создания вирального контента',
    image: getUnsplashImageUrl('1611162616305-c69b3fa7fbe0', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'legendary',
    value: 79.99
  },
  {
    name: 'Стратегия контент-маркетинга',
    image: getUnsplashImageUrl('1551288049-bebda4e38f71', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'rare',
    value: 49.99
  },
  {
    name: 'Шаблоны заголовков',
    image: getUnsplashImageUrl('1494537176433-7a3c4ef2046f', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'uncommon',
    value: 24.99
  },
  {
    name: 'Календарь публикаций',
    image: getUnsplashImageUrl('1507925921958-8a62f3d1a50d', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'common',
    value: 12.99
  }
];
