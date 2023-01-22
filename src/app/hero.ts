export interface Hero {
  id: number;
  name: string;
}

export class HeroInfo {

    constructor(
      public id: number,
      public name: string,
      public superName: string,
      public superPower: string,
      public element: string
    ) {  }
  
  }

  const firstHero =  new HeroInfo(42, 'Roma', 'Romashka', 'Create flowers', 'nature');