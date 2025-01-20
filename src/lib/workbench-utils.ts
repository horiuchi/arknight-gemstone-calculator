import { BoardItem, Kinds, WorkbenchItem } from './types';

export function convertToString(item: WorkbenchItem): string {
  if (item === 'blank' || item === 'locked') {
    return item;
  }
  return `${item.kind}-${item.grade}-${item.level}`;
}

export function convertFromString(value: string): WorkbenchItem {
  if (value === 'blank' || value === 'locked') {
    return value;
  }
  const [kind, grade, level] = value.split('-') as [Kinds, string, string];
  return {
    kind,
    grade: parseInt(grade, 10) as BoardItem<Kinds>['grade'],
    level: parseInt(level, 10) as BoardItem<Kinds>['level'],
  };
}
