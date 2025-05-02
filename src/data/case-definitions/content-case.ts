
import { Case } from '../types';
import { contentItems } from '../case-items';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Контент кейс - содержит материалы по созданию контента
 */
export const contentCase: Case = {
  id: 'content-case',
  title: 'Контент кейс',
  price: 24.99,
  image: getUnsplashImageUrl('1626908013943-df9b848a413c', ImageSizes.CASE.width, ImageSizes.CASE.height),
  items: contentItems,
  category: 'content'
};
