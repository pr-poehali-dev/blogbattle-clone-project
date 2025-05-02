
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Inventory from '@/components/Inventory';
import UpgradeGame from '@/components/UpgradeGame';
import { CaseItem } from '@/data/types';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Upgrade: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<CaseItem[]>(() => {
    // Загрузка предметов из localStorage, если они есть
    const savedItems = localStorage.getItem('userInventory');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [selectedItem, setSelectedItem] = useState<CaseItem | null>(null);
  const navigate = useNavigate();
  
  // Функция выбора предмета для улучшения
  const handleSelectItem = (item: CaseItem) => {
    setSelectedItem(item);
  };
  
  // Функция при успешном улучшении
  const handleUpgradeSuccess = (multiplier: number) => {
    if (!selectedItem) return;
    
    // Улучшаем предмет, увеличивая его стоимость
    const upgradedItem: CaseItem = {
      ...selectedItem,
      value: selectedItem.value * multiplier,
      name: `${selectedItem.name} (Улучшенный)`
    };
    
    // Удаляем оригинальный предмет из инвентаря
    const newInventory = inventoryItems.filter(item => 
      item.name !== selectedItem.name || item.value !== selectedItem.value
    );
    
    // Добавляем улучшенный предмет
    newInventory.push(upgradedItem);
    
    // Обновляем инвентарь
    setInventoryItems(newInventory);
    localStorage.setItem('userInventory', JSON.stringify(newInventory));
    
    // Сбрасываем выбранный предмет
    setSelectedItem(null);
    
    // Показываем уведомление об успехе
    toast({
      title: "Улучшение успешно!",
      description: `Ваш предмет был улучшен до $${upgradedItem.value.toFixed(2)}`,
      variant: "default",
    });
  };
  
  // Функция при неудачном улучшении
  const handleUpgradeFailure = () => {
    if (!selectedItem) return;
    
    // Удаляем предмет из инвентаря
    const newInventory = inventoryItems.filter(item => 
      item.name !== selectedItem.name || item.value !== selectedItem.value
    );
    
    // Обновляем инвентарь
    setInventoryItems(newInventory);
    localStorage.setItem('userInventory', JSON.stringify(newInventory));
    
    // Сбрасываем выбранный предмет
    setSelectedItem(null);
    
    // Показываем уведомление о неудаче
    toast({
      title: "Улучшение не удалось",
      description: "К сожалению, предмет был потерян во время улучшения",
      variant: "destructive",
    });
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6 flex items-center">
          <Icon name="ArrowUp" className="mr-2 text-primary" size={24} />
          Система улучшения предметов
        </h1>
        
        {selectedItem ? (
          <UpgradeGame 
            selectedItem={selectedItem}
            onUpgradeSuccess={handleUpgradeSuccess}
            onUpgradeFailure={handleUpgradeFailure}
            onCancel={() => setSelectedItem(null)}
          />
        ) : (
          <Tabs defaultValue="inventory" className="w-full">
            <TabsList className="grid w-full md:w-1/2 lg:w-1/3 grid-cols-2 mb-8">
              <TabsTrigger value="inventory">Ваш инвентарь</TabsTrigger>
              <TabsTrigger value="about">Об улучшениях</TabsTrigger>
            </TabsList>
            
            <TabsContent value="inventory">
              <Card className="bg-card border-none mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Выберите предмет для улучшения</CardTitle>
                  <CardDescription>
                    Выберите предмет из своего инвентаря, который хотите улучшить
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Inventory 
                    items={inventoryItems} 
                    onSelectItem={handleSelectItem}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="about">
              <Card className="bg-card border-none">
                <CardHeader>
                  <CardTitle className="text-white">Как работают улучшения?</CardTitle>
                  <CardDescription>
                    Используйте систему улучшения, чтобы увеличить стоимость ваших предметов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-bold text-white mb-2 flex items-center">
                      <Icon name="Info" className="mr-2 text-primary" size={18} />
                      Принцип работы
                    </h3>
                    <p className="text-muted-foreground">
                      Выберите предмет и настройте шанс успеха улучшения. Чем ниже шанс, тем выше будет 
                      множитель стоимости предмета при успешном улучшении.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-bold text-white mb-2 flex items-center">
                      <Icon name="BarChart2" className="mr-2 text-primary" size={18} />
                      Риск и награда
                    </h3>
                    <p className="text-muted-foreground">
                      При неудачном улучшении ваш предмет будет потерян. При успешном - его стоимость 
                      увеличится согласно множителю.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-bold text-white mb-2 flex items-center">
                      <Icon name="Gamepad2" className="mr-2 text-primary" size={18} />
                      Игровой процесс
                    </h3>
                    <p className="text-muted-foreground">
                      После запуска улучшения, стрелка будет вращаться и остановится в случайном месте. 
                      Если она попадет в зеленую зону - улучшение успешно, если в красную - предмет потерян.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Upgrade;
