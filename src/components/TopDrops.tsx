
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TopDrop {
  id: string;
  username: string;
  avatar: string;
  itemName: string;
  itemImage: string;
  rarity: string;
  value: number;
}

const topDrops: TopDrop[] = [
  {
    id: '1',
    username: 'superseo',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
    itemName: 'Полный курс по SEO',
    itemImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    rarity: 'legendary',
    value: 99.99,
  },
  {
    id: '2',
    username: 'contentcreator',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
    itemName: 'Техники создания вирального контента',
    itemImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    rarity: 'legendary',
    value: 89.99,
  },
  {
    id: '3',
    username: 'blogking',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
    itemName: 'Монетизация блога: от 0 до 100к',
    itemImage: 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    rarity: 'rare',
    value: 79.99,
  }
];

const TopDrops: React.FC = () => {
  return (
    <div className="bg-card rounded-xl p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center">
          <Icon name="Trophy" className="mr-2 text-yellow-500" size={18} />
          Лучшие дропы
        </h3>
        <Button variant="ghost" size="sm" className="text-primary">
          Все топы
          <Icon name="ChevronRight" size={16} />
        </Button>
      </div>
      
      <div className="space-y-3">
        {topDrops.map((drop, index) => (
          <div key={drop.id} className="bg-muted rounded-lg p-3 flex items-center gap-3 hover:bg-muted/80 transition-colors">
            <div className="w-6 h-6 rounded-full bg-card flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
            
            <img 
              src={drop.avatar} 
              alt={drop.username} 
              className="w-8 h-8 rounded-full object-cover" 
            />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{drop.username}</p>
              <p className="text-xs text-gray-400 truncate">{drop.itemName}</p>
            </div>
            
            <div className={`w-12 h-12 rounded-md overflow-hidden border-2 ${
              drop.rarity === 'legendary' ? 'border-yellow-500' :
              drop.rarity === 'rare' ? 'border-purple-500' :
              drop.rarity === 'uncommon' ? 'border-blue-500' : 'border-gray-500'
            }`}>
              <img src={drop.itemImage} alt={drop.itemName} className="w-full h-full object-cover" />
            </div>
            
            <span className="text-sm font-bold text-primary">${drop.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDrops;
