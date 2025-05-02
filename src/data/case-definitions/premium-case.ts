
import { Case } from '../types';
import { premiumItems } from '../case-items';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Премиум кейс - содержит дорогие материалы по контент-маркетингу
 */
export const premiumCase: Case = {
  id: 'premium-case',
  title: 'Премиум кейс',
  price: 29.99,
  image: getUnsplashImageUrl('1586892478025-2b5472316ea4', ImageSizes.CASE.width, ImageSizes.CASE.height),
  items: premiumItems,
  category: 'premium'
};
