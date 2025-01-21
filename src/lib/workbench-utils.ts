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

export function getBoardName(board: WorkbenchItem): string {
  function getKindName(kind: Kinds): string {
    switch (kind) {
      case 'fire':
        return '淬火彫刻';
      case 'sky':
        return '融合再誕';
      case 'grass':
        return 'ろ過精製';
      case 'sand':
        return '結晶増殖';
      default:
        return null as never;
    }
  }
  function getGradeName(grade: number): string {
    switch (grade) {
      case 0:
        return 'I';
      case 1:
        return 'II';
      case 2:
        return 'III';
      case 3:
        return 'IV';
      default:
        return null as never;
    }
  }
  function getLevelName(level: number): string {
    switch (level) {
      case 0:
        return '初級';
      case 1:
        return '中級';
      case 2:
        return '上級';
      default:
        return null as never;
    }
  }

  if (board === 'blank') {
    return '空';
  } else if (board === 'locked') {
    return '未解放';
  }
  return `${getLevelName(board.level)}${getKindName(board.kind)}${getGradeName(board.grade)}`;
}
