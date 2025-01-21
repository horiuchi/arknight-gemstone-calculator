import { BoardItem, BoardPattern, Kinds } from './types';

export function getBoardPattern<K extends Kinds>(
  board: BoardItem<K>,
): BoardPattern {
  switch (board.kind) {
    case 'fire':
      switch (board.grade) {
        case 0:
          return {
            inputs: [{ kind: 'fire', level: 0 }],
            output: [{ kind: 'fire', level: 1 }],
          };
        case 1:
          return {
            inputs: [{ kind: 'fire', level: 1 }],
            output: [{ kind: 'fire', level: 2 }],
          };
        case 2:
          return {
            inputs: [{ kind: 'fire', level: 2 }],
            output: [{ kind: 'fire', level: 3 }],
          };
        case 3:
          return {
            inputs: [{ kind: 'fire', level: 3 }],
            output: [{ kind: 'fire', level: 4 }],
          };
        default:
          return null as never;
      }
    case 'sky':
      switch (board.grade) {
        case 0:
          return {
            inputs: [{ kind: 'sky', level: 0 }, { kind: 'sand' }],
            output: [{ kind: 'sky', level: 1 }],
          };
        case 1:
          return {
            inputs: [
              { kind: 'sky', level: 1 },
              { kind: 'grass', level: 1 },
            ],
            output: [{ kind: 'sky', level: 2 }],
          };
        case 2:
          return {
            inputs: [
              { kind: 'sky', level: 2 },
              { kind: 'fire', level: 3 },
            ],
            output: [{ kind: 'sky', level: 3 }],
          };
        default:
          return null as never;
      }
    case 'grass':
      switch (board.grade) {
        case 0:
          if (board.level === 2) {
            return {
              inputs: [{ kind: 'grass', level: 0 }],
              output: [{ kind: 'grass', level: 1 }],
            };
          } else {
            return {
              inputs: [{ kind: 'grass', level: 0 }],
              output: [{ kind: 'grass', level: 1 }, { kind: 'sand' }],
            };
          }
        case 1:
          return {
            inputs: [{ kind: 'grass', level: 1 }],
            output: [{ kind: 'grass', level: 2 }, { kind: 'sand' }],
          };
        case 2:
          return {
            inputs: [{ kind: 'grass', level: 2 }],
            output: [{ kind: 'grass', level: 3 }, { kind: 'sand' }],
          };
        default:
          return null as never;
      }
    case 'sand':
      return {
        inputs: [{ kind: 'sand' }],
        output: [{ kind: 'sand' }],
      };
    default:
      return null as never;
  }
}
