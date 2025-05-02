
import { CaseItem } from '../types';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Предметы для монетизация кейса
 */
export const monetizationItems: CaseItem[] = [
  {
    name: 'Монетизация блога: от 0 до 100к',
    image: getUnsplashImageUrl('1565843708714-52ecf69ab81f', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'legendary',
    value: 99.99
  },
  {
    name: 'Партнерский маркетинг для блогеров',
    image: getUnsplashImageUrl('1518135714426-c18f5ffb6f4d', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'rare',
    value: 69.99
  },
  {
    name: 'Стратегии рекламы в блоге',
    image: getUnsplashImageUrl('1557426272-fc759fdf7a8d', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'uncommon',
    value: 39.99
  },
  {
    name: 'Настройка Google AdSense',
    image: getUnsplashImageUrl('1519337265831-281ec6cc8514', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'common',
    value: 19.99
  }
];
