
import { Case } from '../types';
import { copywritingItems } from '../case-items';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Копирайтинг кейс - содержит материалы по созданию текстов
 */
export const copywritingCase: Case = {
  id: 'copywriting-case',
  title: 'Копирайтинг кейс',
  price: 14.99,
  image: getUnsplashImageUrl('1501504905252-473c47e087f8', ImageSizes.CASE.width, ImageSizes.CASE.height),
  items: copywritingItems,
  category: 'copywriting'
};
