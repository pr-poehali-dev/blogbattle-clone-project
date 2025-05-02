
import { Case } from '../types';
import { seoItems } from '../case-items';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * SEO кейс - содержит материалы по SEO-оптимизации
 */
export const seoCase: Case = {
  id: 'seo-case',
  title: 'SEO кейс',
  price: 19.99,
  image: getUnsplashImageUrl('1571171637578-41bc2dd41cd2', ImageSizes.CASE.width, ImageSizes.CASE.height),
  items: seoItems,
  category: 'seo'
};
