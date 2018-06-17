export interface Diet {
  ID: number;
  QUESDate: Date;
  QUESTime: any;
  DietaryPatterns: DietaryPattern[];
  Behavioral: Behavioral;
  QDietHistory: string;
  QDietOrder: string;
  SSUSR_Name: string;
}

export interface DietaryPattern {
  QTime: string;
  QMeal: string;
  QFoodBeverage: string;
  Childsub: string;
}

export interface Behavioral {
  QBehavioralNA: number;
  QVegetableConsumption: string;
  QVegetableFrequency: string;
  QVegetableNote: string;
  QFruitConsumption: string;
  QFruitFrequency: string;
  QFruitNote: string;
  QTeaType: string;
  QTeaTypeOther: string;
  QTeaConsumption: string;
  QTeaFrequency: string;
  QTeaNote: string;
  QCoffeeType: string;
  QCoffeeTpyeOther: string;
  QCoffeeConsumption: string;
  QCoffeeFrequency: string;
  QCoffeeNote: string;
  QAlcoholType: string;
  QAlcoholTypeOther: string;
  QAlcoholConsumption: string;
  QAlcoholFrequency: string;
  QAlcoholNote: string;
}
