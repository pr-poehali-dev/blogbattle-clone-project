
/**
 * Тип редкости предмета в кейсе
 */
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'legendary';

/**
 * Интерфейс предмета в кейсе
 */
export interface CaseItem {
  /** Название предмета */
  name: string;
  /** URL изображения предмета */
  image: string;
  /** Редкость предмета */
  rarity: ItemRarity;
  /** Ценность предмета в долларах */
  value: number;
}

/**
 * Интерфейс кейса
 */
export interface Case {
  /** Уникальный идентификатор кейса */
  id: string;
  /** Название кейса */
  title: string;
  /** Цена кейса в долларах */
  price: number;
  /** URL изображения кейса */
  image: string;
  /** Предметы, содержащиеся в кейсе */
  items: CaseItem[];
  /** Категория кейса */
  category?: string;
}
