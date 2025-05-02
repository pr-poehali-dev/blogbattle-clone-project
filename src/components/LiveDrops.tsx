
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LiveDrop {
  id: string;
  username: string;
  avatar: string;
  itemName: string;
  itemImage: string;
  rarity: string;
  caseName: string;
  caseImage: string;
  timestamp: string;
}

const liveDrops: LiveDrop[] = [
  {
    id: '1',
    username: 'user123',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
    itemName: 'ТОП-10 лучших статей',
    itemImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    rarity: 'legendary',
    caseName: 'Премиум кейс',
    caseImage: 'https://images.unsplash.com/photo-1586892478025-2b5472316ea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    timestamp: '2 мин. назад',
  },
  {
    id: '2',
    username: 'blogmaster',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
    itemName: 'Гайд по SEO',
    itemImage: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    rarity: 'rare',
    caseName: 'SEO кейс',
    caseImage: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    timestamp: '5 мин. назад',
  },
  {
    id: '3',
    username: 'writer2025',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80',
    itemName: 'Копирайтинг 101',
    itemImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    rarity: 'uncommon',
    caseName: 'Текстовый кейс',
    caseImage: 'https://images.unsplash.com/photo-1606636660488-16a8646f012c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    timestamp: '7 мин. назад',
  }
];

const LiveDrops: React.FC = () => {
  return (
    <div className="bg-card rounded-xl p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center">
          <Icon name="Zap" className="mr-2 text-primary" size={18} />
          Живые дропы
        </h3>
        <Button variant="ghost" size="sm" className="text-primary">
          Все дропы
          <Icon name="ChevronRight" size={16} />
        </Button>
      </div>
      
      <div className="space-y-3">
        {liveDrops.map((drop) => (
          <div key={drop.id} className="bg-muted rounded-lg p-3 flex items-center gap-3 hover:bg-muted/80 transition-colors">
            <img 
              src={drop.avatar} 
              alt={drop.username} 
              className="w-8 h-8 rounded-full object-cover" 
            />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{drop.username}</p>
              <p className="text-xs text-gray-400">выбил из {drop.caseName}</p>
            </div>
            
            <div className={`w-12 h-12 rounded-md overflow-hidden border-2 ${
              drop.rarity === 'legendary' ? 'border-yellow-500' :
              drop.rarity === 'rare' ? 'border-purple-500' :
              drop.rarity === 'uncommon' ? 'border-blue-500' : 'border-gray-500'
            }`}>
              <img src={drop.itemImage} alt={drop.itemName} className="w-full h-full object-cover" />
            </div>
            
            <span className="text-xs text-gray-400">{drop.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveDrops;
