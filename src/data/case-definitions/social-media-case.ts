
import { Case } from '../types';
import { socialMediaItems } from '../case-items';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Соцсети кейс - содержит материалы по ведению социальных сетей
 */
export const socialMediaCase: Case = {
  id: 'social-media-case',
  title: 'Соцсети кейс',
  price: 21.99,
  image: getUnsplashImageUrl('1611926653458-09294b3142bf', ImageSizes.CASE.width, ImageSizes.CASE.height),
  items: socialMediaItems,
  category: 'social-media'
};
