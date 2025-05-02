
export interface CaseItem {
  name: string;
  image: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  value: number;
}

export interface Case {
  id: string;
  title: string;
  price: number;
  image: string;
  items: CaseItem[];
}

export const cases: Case[] = [
  {
    id: 'premium-case',
    title: 'Премиум кейс',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1586892478025-2b5472316ea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    items: [
      {
        name: 'ТОП-10 лучших статей',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'legendary',
        value: 99.99
      },
      {
        name: 'Курс по контент-маркетингу',
        image: 'https://images.unsplash.com/photo-1553484771-0a384d19a6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'rare',
        value: 69.99
      },
      {
        name: 'Шаблоны для блога',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'uncommon',
        value: 39.99
      },
      {
        name: 'Чек-лист для статей',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'common',
        value: 19.99
      }
    ]
  },
  {
    id: 'seo-case',
    title: 'SEO кейс',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    items: [
      {
        name: 'Полный курс по SEO',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'legendary',
        value: 89.99
      },
      {
        name: 'Гайд по SEO-анализу',
        image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'rare',
        value: 59.99
      },
      {
        name: 'Инструменты для SEO',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'uncommon',
        value: 29.99
      },
      {
        name: 'Основы ключевых слов',
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'common',
        value: 14.99
      }
    ]
  },
  {
    id: 'content-case',
    title: 'Контент кейс',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1626908013943-df9b848a413c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    items: [
      {
        name: 'Техники создания вирального контента',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'legendary',
        value: 79.99
      },
      {
        name: 'Стратегия контент-маркетинга',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'rare',
        value: 49.99
      },
      {
        name: 'Шаблоны заголовков',
        image: 'https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'uncommon',
        value: 24.99
      },
      {
        name: 'Календарь публикаций',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'common',
        value: 12.99
      }
    ]
  },
  {
    id: 'monetization-case',
    title: 'Монетизация кейс',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    items: [
      {
        name: 'Монетизация блога: от 0 до 100к',
        image: 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'legendary',
        value: 99.99
      },
      {
        name: 'Партнерский маркетинг для блогеров',
        image: 'https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'rare',
        value: 69.99
      },
      {
        name: 'Стратегии рекламы в блоге',
        image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'uncommon',
        value: 39.99
      },
      {
        name: 'Настройка Google AdSense',
        image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'common',
        value: 19.99
      }
    ]
  },
  {
    id: 'copywriting-case',
    title: 'Копирайтинг кейс',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    items: [
      {
        name: 'Копирайтинг мастер-класс',
        image: 'https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'legendary',
        value: 69.99
      },
      {
        name: 'Техники убеждения в тексте',
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'rare',
        value: 49.99
      },
      {
        name: 'Копирайтинг 101',
        image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'uncommon',
        value: 24.99
      },
      {
        name: 'Основы редактирования текста',
        image: 'https://images.unsplash.com/photo-1596697612270-0798a7dc8203?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'common',
        value: 14.99
      }
    ]
  },
  {
    id: 'social-media-case',
    title: 'Соцсети кейс',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    items: [
      {
        name: 'Полный курс по SMM',
        image: 'https://images.unsplash.com/photo-1579103769354-8575fc097386?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'legendary',
        value: 89.99
      },
      {
        name: 'Инструменты для планирования постов',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'rare',
        value: 54.99
      },
      {
        name: 'Создание привлекательного профиля',
        image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'uncommon',
        value: 29.99
      },
      {
        name: 'Чек-лист для соцсетей',
        image: 'https://images.unsplash.com/photo-1559227706-31fff9e500e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        rarity: 'common',
        value: 14.99
      }
    ]
  }
];
