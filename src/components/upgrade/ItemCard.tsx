
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CaseItem } from '@/data/types';
import { cn } from '@/lib/utils';
import { formatPrice, formatRarityName, getRarityColorClasses } from '@/utils/itemUtils';

interface ItemCardProps {
  item: CaseItem;
  upgradeValue?: number;
  isUpgraded?: boolean;
  className?: string;
  title?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ 
  item, 
  upgradeValue, 
  isUpgraded = false,
  className, 
  title = "Ваш предмет" 
}) => {
  const rarityColors = getRarityColorClasses(item.rarity);
  const value = upgradeValue ?? item.value;
  
  return (
    <Card className={cn("flex-1 bg-muted border-none", className)}>
      <CardContent className="p-4">
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <div className={cn(
          "rounded-lg overflow-hidden border-2 mb-3",
          isUpgraded ? "border-green-500" : rarityColors.border
        )}>
          <img src={item.image} alt={item.name} className="w-full aspect-square object-cover" />
        </div>
        <p className="text-white font-semibold">{item.name}</p>
        <p className={isUpgraded ? "text-green-500" : rarityColors.text}>
          {isUpgraded ? "Улучшенный" : formatRarityName(item.rarity)}
        </p>
        <p className="text-white font-bold mt-1">{formatPrice(value)}</p>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
