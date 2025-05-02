
/**
 * Создает URL изображения для Unsplash с нужными параметрами
 * @param id - ID изображения на Unsplash
 * @param width - ширина изображения
 * @param height - высота изображения
 * @param quality - качество изображения (0-100)
 * @returns Полный URL изображения
 */
export const getUnsplashImageUrl = (
  id: string,
  width: number,
  height: number,
  quality: number = 80
): string => {
  return `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
};

/**
 * Константы для размеров изображений
 */
export const ImageSizes = {
  CASE: { width: 400, height: 300 },
  ITEM: { width: 100, height: 100 }
};
