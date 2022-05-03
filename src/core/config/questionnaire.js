export const questionnaire = {
  residential: {
    from: 'main',
    displayName: 'Для жилых домов',
  },
  metal: {
    from: 'main',
    displayName: 'Металлические конструкции',
  },
  capacity: {
    from: 'metal',
    displayName: 'Емкости',
  },
  structures: {
    from: 'metal',
    displayName: 'Сооружения',
  },
  smart: {
    from: 'main',
    displayName: 'Оборудование из нержавеющей стали',
  },
  separators: {
    from: 'smart',
    displayName: 'Сепараторы',
  },
  mixers: {
    from: 'smart',
    displayName: 'Миксеры',
  },
  details: {
    from: 'metal',
    displayName: 'Вспомогательные детали',
  },
  playground: {
    from: 'residential',
    displayName: 'Игровые площадки',
  },
  overhaul: {
    from: 'residential',
    displayName: 'Капитальный ремонт',
  },
  sieves: {
    from: 'details',
    displayName: 'Сита',
  },
  metalProcces: {
    from: 'details',
    displayName: 'Обработка металла',
  },
  cones: {
    from: 'details',
    displayName: 'Обечайки и конусы',
  },
  craneRunways: {
    from: 'details',
    displayName: 'Подкрановые пути',
  },
  smokePipes: {
    from: 'structures',
    displayName: 'Дымовые металлические трубы',
  },
  powerTreansitionTowers: {
    from: 'structures',
    displayName: 'Опоры ЛЭП',
  },
  cisterns: {
    from: 'capacity',
    displayName: 'Цистерны',
  },
  steelTanks: {
    from: 'capacity',
    displayName: 'Стальные емкости',
  },
  silosCement: {
    from: 'capacity',
    displayName: 'Силосы для цемента',
  },
  bunkers: {
    from: 'capacity',
    displayName: 'Бункеры, контейнеры для ТБО',
  },
  waterTowers: {
    from: 'structures',
    displayName: 'Водонапорные башни',
  },
  bridge: {
    from: 'structures',
    displayName: 'Металлические мосты',
  },
  build: {
    from: 'structures',
    displayName: 'Строительные металлоконструкции',
  },
};
