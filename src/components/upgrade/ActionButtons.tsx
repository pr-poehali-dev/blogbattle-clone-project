
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ActionButtonsProps {
  onCancel: () => void;
  onUpgrade: () => void;
  isSpinning: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCancel,
  onUpgrade,
  isSpinning
}) => {
  return (
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
        onClick={onUpgrade}
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
  );
};

export default ActionButtons;
