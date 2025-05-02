
import { Case } from '../types';
import { monetizationItems } from '../case-items';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Монетизация кейс - содержит материалы по монетизации блога
 */
export const monetizationCase: Case = {
  id: 'monetization-case',
  title: 'Монетизация кейс',
  price: 34.99,
  image: getUnsplashImageUrl('1579621970795-87facc2f976d', ImageSizes.CASE.width, ImageSizes.CASE.height),
  items: monetizationItems,
  category: 'monetization'
};
