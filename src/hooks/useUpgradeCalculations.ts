
import { useState, useEffect } from 'react';

/**
 * Хук для расчетов, связанных с улучшением предметов
 */
export function useUpgradeCalculations(initialPercentage = 50) {
  const [successPercentage, setSuccessPercentage] = useState(initialPercentage);
  const [multiplier, setMultiplier] = useState(2.0);

  // Расчет множителя на основе процента успеха
  useEffect(() => {
    // Чем меньше процент успеха, тем выше множитель
    // При 100% успеха множитель = 1.0 (нет увеличения стоимости)
    // При 1% успеха множитель = ~10.0
    const calculatedMultiplier = (100 / successPercentage).toFixed(2);
    setMultiplier(parseFloat(calculatedMultiplier));
  }, [successPercentage]);

  /**
   * Расчет результата улучшения
   * @returns Объект с данными о результате
   */
  const calculateUpgradeResult = () => {
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
    } else {
      // Стрелка должна остановиться в красной зоне
      // Красная зона - это оставшаяся часть круга
      const failureStartAngle = (successPercentage / 100) * 360;
      finalPosition = failureStartAngle + (Math.random() * (360 - failureStartAngle));
    }
    
    // Финальный угол поворота: полные обороты + позиция результата
    const finalRotation = fullRotations + finalPosition;
    
    return {
      isSuccess,
      finalRotation,
      result: isSuccess ? 'success' : 'failure'
    };
  };

  return {
    successPercentage,
    setSuccessPercentage,
    multiplier,
    calculateUpgradeResult
  };
}
