export const KindValues = ['fire', 'sky', 'grass', 'sand'] as const;
export type Kinds = (typeof KindValues)[number];

export type LevelPerKind = {
  fire: 0 | 1 | 2 | 3 | 4;
  sky: 0 | 1 | 2 | 3;
  grass: 0 | 1 | 2 | 3;
  sand: 0;
};

export type GradePerKind = {
  fire: 0 | 1 | 2 | 3;
  sky: 0 | 1 | 2;
  grass: 0 | 1 | 2;
  sand: 0 | 1 | 2;
};

export type ValuePerKinds = {
  [key in Kinds]: number;
};

export type ValuePerKindsWithLevel = {
  [key in Kinds]: {
    [level in LevelPerKind[key]]: number;
  };
};

export type ElementItem<K extends Kinds> = {
  kind: K;
  level?: LevelPerKind[K];
};

export type BoardItem<K extends Kinds> = {
  kind: K;
  grade: GradePerKind[K];
  level: 0 | 1 | 2;
};

export type BoardPattern = {
  inputs: ElementItem<Kinds>[];
  output: ElementItem<Kinds>[];
  // TODO: description: string;
};

export type WorkbenchItem = BoardItem<Kinds> | 'blank' | 'locked';
export type WorkbenchItems = {
  bench: [
    WorkbenchItem,
    WorkbenchItem,
    WorkbenchItem,
    WorkbenchItem,
    WorkbenchItem,
    WorkbenchItem,
  ];
  hands: [WorkbenchItem, WorkbenchItem, WorkbenchItem];
};
