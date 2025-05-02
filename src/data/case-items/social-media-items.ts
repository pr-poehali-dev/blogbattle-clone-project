
import { CaseItem } from '../types';
import { getUnsplashImageUrl, ImageSizes } from '../utils/image-utils';

/**
 * Предметы для соцсети кейса
 */
export const socialMediaItems: CaseItem[] = [
  {
    name: 'Полный курс по SMM',
    image: getUnsplashImageUrl('1579103769354-8575fc097386', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'legendary',
    value: 89.99
  },
  {
    name: 'Инструменты для планирования постов',
    image: getUnsplashImageUrl('1454165804606-c3d57bc86b40', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'rare',
    value: 54.99
  },
  {
    name: 'Создание привлекательного профиля',
    image: getUnsplashImageUrl('1535303311164-664fc9ec6532', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'uncommon',
    value: 29.99
  },
  {
    name: 'Чек-лист для соцсетей',
    image: getUnsplashImageUrl('1559227706-31fff9e500e5', ImageSizes.ITEM.width, ImageSizes.ITEM.height),
    rarity: 'common',
    value: 14.99
  }
];
