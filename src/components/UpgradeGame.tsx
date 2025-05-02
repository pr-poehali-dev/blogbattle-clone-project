
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { CaseItem } from '@/data/types';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface UpgradeGameProps {
  selectedItem: CaseItem;
  onUpgradeSuccess: (multiplier: number) => void;
  onUpgradeFailure: () => void;
  onCancel: () => void;
}

const UpgradeGame: React.FC<UpgradeGameProps> = ({ 
  selectedItem, 
  onUpgradeSuccess, 
  onUpgradeFailure,
  onCancel
}) => {
  const [successPercentage, setSuccessPercentage] = useState(50);
  const [isSpinning, setIsSpinning] = useState(false);
  const [upgradeResult, setUpgradeResult] = useState<'success' | 'failure' | null>(null);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [multiplier, setMultiplier] = useState(2.0);
  const upgradeRef = useRef<HTMLDivElement>(null);
  
  // Расчет множителя на основе процента успеха
  useEffect(() => {
    // Чем меньше процент успеха, тем выше множитель
    // При 100% успеха множитель = 1.0 (нет увеличения стоимости)
    // При 1% успеха множитель = ~10.0
    const calculatedMultiplier = (100 / successPercentage).toFixed(2);
    setMultiplier(parseFloat(calculatedMultiplier));
  }, [successPercentage]);
  
  const startUpgradeGame = () => {
    setIsSpinning(true);
    setUpgradeResult(null);
    
    // Генерируем угол вращения
    // В общем случае, крутим на 5-10 полных оборотов плюс позиция результата
    const fullRotations = 1800 + Math.floor(Math.random() * 1800); // 5-10 оборотов (1800-3600 градусов)
    
    // Случайное значение от 0 до 100
    const randomValue = Math.random() * 100;
    let finalPosition = 0;
    
    // Определяем, успешно ли улучшение
    const isSuccess = randomValue < successPercentage;
    
    if (isSuccess) {
      // Стрелка должна остановиться в зеленой зоне
      // Зеленая зона - это процент успеха от всего круга (360 градусов)
      const successAngle = (successPercentage / 100) * 360;
      finalPosition = Math.random() * successAngle;
      setUpgradeResult('success');
    } else {
      // Стрелка должна остановиться в красной зоне
      // Красная зона - это оставшаяся часть круга
      const failureStartAngle = (successPercentage / 100) * 360;
      finalPosition = failureStartAngle + (Math.random() * (360 - failureStartAngle));
      setUpgradeResult('failure');
    }
    
    // Финальный угол поворота: полные обороты + позиция результата
    const finalRotation = fullRotations + finalPosition;
    setRotationDegree(finalRotation);
    
    // Запускаем анимацию
    setTimeout(() => {
      setIsSpinning(false);
      
      // Вызываем соответствующий коллбэк после завершения анимации
      if (isSuccess) {
        onUpgradeSuccess(multiplier);
      } else {
        onUpgradeFailure();
      }
    }, 5000); // Длительность анимации
  };
  
  // Получение цвета в зависимости от редкости предмета
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-500 border-yellow-500';
      case 'rare': return 'text-purple-500 border-purple-500';
      case 'uncommon': return 'text-blue-500 border-blue-500';
      default: return 'text-gray-400 border-gray-500';
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-card p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Улучшение предмета</h2>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Card className="flex-1 bg-muted border-none">
          <CardContent className="p-4">
            <h3 className="text-white font-medium mb-2">Ваш предмет</h3>
            <div className={cn(
              "rounded-lg overflow-hidden border-2 mb-3",
              getRarityColor(selectedItem.rarity).split(' ')[1]
            )}>
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full aspect-square object-cover" />
            </div>
            <p className="text-white font-semibold">{selectedItem.name}</p>
            <p className={getRarityColor(selectedItem.rarity).split(' ')[0]}>
              {selectedItem.rarity.charAt(0).toUpperCase() + selectedItem.rarity.slice(1)}
            </p>
            <p className="text-white font-bold mt-1">${selectedItem.value.toFixed(2)}</p>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-center">
          <div className="bg-muted/50 p-2 rounded-full">
            <Icon name="ArrowRight" size={24} className="text-primary" />
          </div>
        </div>
        
        <Card className="flex-1 bg-muted border-none">
          <CardContent className="p-4">
            <h3 className="text-white font-medium mb-2">При успехе получите</h3>
            <div className="rounded-lg overflow-hidden border-2 border-green-500 mb-3">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full aspect-square object-cover" />
            </div>
            <p className="text-white font-semibold">{selectedItem.name}</p>
            <p className="text-green-500">Улучшенный</p>
            <p className="text-white font-bold mt-1">
              ${(selectedItem.value * multiplier).toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium">Шанс успеха</span>
          <span className="text-primary font-bold">{successPercentage}%</span>
        </div>
        <Slider 
          value={[successPercentage]} 
          min={1} 
          max={95} 
          step={1} 
          onValueChange={(value) => setSuccessPercentage(value[0])}
          disabled={isSpinning}
          className="mb-6"
        />
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted-foreground">Риск выше</span>
          <span className="text-muted-foreground">Риск ниже</span>
        </div>
        <div className="flex items-center justify-between text-white">
          <span>Множитель: x{multiplier}</span>
          <span>Результат: ${(selectedItem.value * multiplier).toFixed(2)}</span>
        </div>
      </div>
      
      <div className="relative mb-8">
        <div className="w-64 h-64 mx-auto relative">
          {/* Круг для игры */}
          <div className="w-full h-full rounded-full overflow-hidden relative">
            {/* Фон круга - градиент от красного к зеленому */}
            <div 
              className="w-full h-full absolute" 
              style={{
                background: `conic-gradient(#22c55e 0% ${successPercentage}%, #ef4444 ${successPercentage}% 100%)`
              }}
            ></div>
            
            {/* Внутренний круг (для эстетики) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full bg-card shadow-inner flex items-center justify-center">
              <span className="text-white font-bold text-2xl">{successPercentage}%</span>
            </div>
          </div>
          
          {/* Стрелка индикатора */}
          <div 
            ref={upgradeRef}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1/2 origin-bottom"
            style={{ 
              transform: `translateX(-50%) rotate(${rotationDegree}deg)`,
              transition: isSpinning ? 'transform 5s cubic-bezier(0.32, 0.94, 0.6, 1)' : 'none'
            }}
          >
            <div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
            <div className="w-1 h-full bg-white absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
        
        {upgradeResult && !isSpinning && (
          <div className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 py-3 rounded-lg animate-fade-in z-10",
            upgradeResult === 'success' ? "bg-green-500/80" : "bg-red-500/80"
          )}>
            <p className="text-white font-bold text-lg">
              {upgradeResult === 'success' ? 'Успешно!' : 'Неудача!'}
            </p>
          </div>
        )}
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button
          onClick={onCancel}
          variant="outline"
          className="bg-secondary hover:bg-secondary/90 text-white border-none"
          disabled={isSpinning}
        >
          Отмена
        </Button>
        <Button
          onClick={startUpgradeGame}
          className="bg-primary hover:bg-primary/90 text-white font-bold"
          disabled={isSpinning}
        >
          {isSpinning ? (
            <>
              <span className="animate-spin mr-2">
                <Icon name="Loader2" size={18} />
              </span>
              Вращение...
            </>
          ) : (
            'Улучшить'
          )}
        </Button>
      </div>
    </div>
  );
};

export default UpgradeGame;
