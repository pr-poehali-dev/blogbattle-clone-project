
import React, { useState, useRef } from 'react';
import { CaseItem } from '@/data/types';
import Icon from '@/components/ui/icon';
import { useUpgradeCalculations } from '@/hooks/useUpgradeCalculations';
import ItemCard from '@/components/upgrade/ItemCard';
import SuccessSlider from '@/components/upgrade/SuccessSlider';
import SpinningWheel from '@/components/upgrade/SpinningWheel';
import ActionButtons from '@/components/upgrade/ActionButtons';

interface UpgradeGameProps {
  selectedItem: CaseItem;
  onUpgradeSuccess: (multiplier: number) => void;
  onUpgradeFailure: () => void;
  onCancel: () => void;
}

/**
 * Компонент игры улучшения предметов
 */
const UpgradeGame: React.FC<UpgradeGameProps> = ({ 
  selectedItem, 
  onUpgradeSuccess, 
  onUpgradeFailure,
  onCancel
}) => {
  // Состояния и расчеты
  const { 
    successPercentage, 
    setSuccessPercentage, 
    multiplier, 
    calculateUpgradeResult 
  } = useUpgradeCalculations(50);
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [upgradeResult, setUpgradeResult] = useState<'success' | 'failure' | null>(null);
  const [rotationDegree, setRotationDegree] = useState(0);
  const upgradeRef = useRef<HTMLDivElement>(null);
  
  /**
   * Запуск игры улучшения
   */
  const startUpgradeGame = () => {
    setIsSpinning(true);
    setUpgradeResult(null);
    
    // Рассчитываем результат игры
    const { isSuccess, finalRotation, result } = calculateUpgradeResult();
    setRotationDegree(finalRotation);
    setUpgradeResult(result);
    
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
  
  return (
    <div className="max-w-2xl mx-auto bg-card p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Улучшение предмета</h2>
      
      {/* Карточки исходного и улучшенного предметов */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <ItemCard item={selectedItem} title="Ваш предмет" />
        
        <div className="flex items-center justify-center">
          <div className="bg-muted/50 p-2 rounded-full">
            <Icon name="ArrowRight" size={24} className="text-primary" />
          </div>
        </div>
        
        <ItemCard 
          item={selectedItem} 
          upgradeValue={selectedItem.value * multiplier}
          isUpgraded={true}
          title="При успехе получите"
        />
      </div>
      
      {/* Слайдер настройки шанса успеха */}
      <SuccessSlider 
        successPercentage={successPercentage}
        onChange={setSuccessPercentage}
        multiplier={multiplier}
        baseValue={selectedItem.value}
        disabled={isSpinning}
      />
      
      {/* Колесо вращения для игры */}
      <SpinningWheel 
        successPercentage={successPercentage}
        rotationDegree={rotationDegree}
        isSpinning={isSpinning}
        result={upgradeResult}
        wheelRef={upgradeRef}
      />
      
      {/* Кнопки действий */}
      <ActionButtons 
        onCancel={onCancel}
        onUpgrade={startUpgradeGame}
        isSpinning={isSpinning}
      />
    </div>
  );
};

export default UpgradeGame;
