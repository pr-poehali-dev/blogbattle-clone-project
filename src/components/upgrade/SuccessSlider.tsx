
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { formatPrice } from '@/utils/itemUtils';

interface SuccessSliderProps {
  successPercentage: number;
  onChange: (value: number) => void;
  multiplier: number;
  baseValue: number;
  disabled?: boolean;
}

const SuccessSlider: React.FC<SuccessSliderProps> = ({
  successPercentage,
  onChange,
  multiplier,
  baseValue,
  disabled = false
}) => {
  return (
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
        onValueChange={(value) => onChange(value[0])}
        disabled={disabled}
        className="mb-6"
      />
      <div className="flex items-center justify-between mb-4">
        <span className="text-muted-foreground">Риск выше</span>
        <span className="text-muted-foreground">Риск ниже</span>
      </div>
      <div className="flex items-center justify-between text-white">
        <span>Множитель: x{multiplier}</span>
        <span>Результат: {formatPrice(baseValue * multiplier)}</span>
      </div>
    </div>
  );
};

export default SuccessSlider;
