import {
  Kinds,
  ValuePerKinds,
  ValuePerKindsWithLevel,
  WorkbenchItems,
} from './types';

export const valueMap: Record<Kinds, Record<number, number>> = {
  fire: {
    0: 1,
    1: 2,
    2: 10,
    3: 35,
    4: 85,
  },
  sky: {
    0: 1,
    1: 3,
    2: 22,
    3: 105,
  },
  glass: {
    0: 1,
    1: 5,
    2: 50,
    3: 500,
  },
  sand: {
    0: 1,
  },
};

export function calculate(
  values: ValuePerKinds,
  items: WorkbenchItems,
): [number, ValuePerKindsWithLevel] {
  let totalValue = 0;
  const result: ValuePerKindsWithLevel = {
    fire: { 0: values.fire, 1: 0, 2: 0, 3: 0, 4: 0 },
    sky: { 0: values.sky, 1: 0, 2: 0, 3: 0 },
    glass: { 0: values.glass, 1: 0, 2: 0, 3: 0 },
    sand: { 0: values.sand },
  };

  // 手札から発動するものの処理
  for (const item of items.hands) {
    if (item === 'blank' || item === 'locked') {
      continue;
    }

    const { kind, grade, level } = item;
    if (kind !== 'fire' || grade === 3) {
      continue;
    }

    if (grade === 0) {
      if (level === 0) {
        continue;
      }
      const value = result.fire[0];
      result.fire[0] = 0;
      result.fire[1] = value * (level === 2 ? 2 : 1);
    }
    if (grade === 1) {
      if (level !== 2) {
        continue;
      }
      const value = result.fire[1];
      result.fire[1] = 0;
      result.fire[2] = value * 2;
    }
    if (grade === 2) {
      if (level !== 2) {
        continue;
      }
      const value = result.fire[2];
      result.fire[2] = 0;
      result.fire[3] = Math.ceil(value * 2.4);
    }
  }

  let moreSkyPrice = 0;
  let moreSandPrice = 0;
  let allSkyPrice = false;
  for (const item of items.bench) {
    if (item === 'blank' || item === 'locked') {
      continue;
    }

    const { kind, grade, level } = item;
    switch (kind) {
      case 'fire':
        switch (grade) {
          case 0: {
            const value = result.fire[0];
            result.fire[0] = 0;
            result.fire[1] += value * (level === 2 ? 2 : 1);
            break;
          }
          case 1: {
            const value = result.fire[1];
            result.fire[1] = 0;
            result.fire[2] += value * (level !== 0 ? 2 : 1);
            break;
          }
          case 2: {
            const value = result.fire[2];
            result.fire[2] = 0;
            result.fire[3] += Math.ceil(value * (level !== 0 ? 2.4 : 1));
            break;
          }
          case 3: {
            const value = result.fire[3];
            result.fire[3] = 0;
            result.fire[4] += value;

            if (level > 0) {
              const count = countBlank(items);
              totalValue += count * (level === 1 ? 1500 : 5000);
            }
            break;
          }
        }
        break;

      case 'sky':
        switch (grade) {
          case 0: {
            if (level === 2) {
              moreSkyPrice += 5;
            }

            const value1 = result.sky[0];
            const value2 = result.sand[0];
            if (value1 <= 0 || value2 <= 0) {
              break;
            }

            if (level === 0) {
              const value = Math.min(value1, value2);
              result.sky[0] -= value;
              result.sand[0] -= value;
              result.sky[1] += value;
            } else {
              result.sky[0] = 0;
              result.sand[0] = 0;
              result.sky[1] += Math.ceil((value1 + value2) / 2);
            }
            break;
          }
          case 1: {
            if (level >= 1) {
              moreSkyPrice += 15;
            }

            const value1 = result.sky[1];
            const value2 = result.glass[1];
            if (value1 <= 0 || value2 <= 0) {
              break;
            }

            if (level < 2) {
              const value = Math.min(value1, value2);
              result.sky[1] -= value;
              result.glass[1] -= value;
              result.sky[2] += value;
            } else {
              result.sky[1] = 0;
              result.glass[1] = 0;
              result.sky[2] += Math.ceil((value1 + value2) / 2);
            }
            break;
          }
          case 2: {
            if (level === 2) {
              allSkyPrice = true;
            }

            const value1 = result.sky[2];
            const value2 = result.fire[3];
            if (value1 <= 0 || value2 <= 0) {
              break;
            }

            if (level === 0) {
              const value = Math.min(value1, value2);
              result.sky[2] -= value;
              result.fire[3] -= value;
              result.sky[3] += value;
            } else {
              result.sky[2] = 0;
              result.fire[3] = 0;
              result.sky[3] += Math.ceil((value1 + value2) / 2);
            }
            break;
          }
        }
        break;

      case 'glass':
        switch (grade) {
          case 0: {
            const value = result.glass[0];
            result.glass[0] = 0;
            result.glass[1] += Math.ceil(
              value * (level === 0 ? 0.5 : level === 1 ? 0.8 : 1),
            );
            result.sand[0] += Math.floor(
              value * (level === 0 ? 0.5 : level === 1 ? 0.2 : 0),
            );
            if (level === 2) {
              result.sand[0] += value;
            }
            break;
          }
          case 1: {
            const value = result.glass[1];
            result.glass[1] = 0;
            result.glass[2] += Math.ceil(
              value * (level === 0 ? 0.4 : level === 1 ? 0.6 : 0.8),
            );
            result.sand[0] += Math.floor(
              value * (level === 0 ? 0.6 : level === 1 ? 0.4 : 0.2),
            );
            if (level === 2) {
              result.sand[0] += Math.floor(value * 1.6);
            }
            break;
          }
          case 2: {
            const value = result.glass[2];
            result.glass[2] = 0;
            result.glass[3] += Math.ceil(
              value * (level === 0 ? 0.3 : level === 1 ? 0.5 : 0.7),
            );
            result.sand[0] += Math.floor(
              value * (level === 0 ? 0.7 : level === 1 ? 0.5 : 0.3),
            );
            if (level === 2) {
              result.sand[0] += Math.floor(value * 1.4);
            }
            break;
          }
        }
        break;

      case 'sand':
        {
          const scale = (
            grade === 0 ? [2, 3, 5] : grade === 1 ? [3, 5, 8] : [5, 9, 9]
          )[level];
          result.sand[0] *= scale;

          if (grade === 2 && level === 2) {
            moreSandPrice += 1;
          }
        }
        break;

      default:
        return null as never;
    }
  }

  let count = 0;
  for (const kind of ['fire', 'sky', 'glass', 'sand'] as const) {
    const k = result[kind];
    for (const [l, v] of Object.entries(k)) {
      let up = valueMap[kind][Number(l)] ?? 0;
      if (kind == 'sky') {
        up += moreSkyPrice;
      }
      if (kind == 'sand') {
        up += moreSandPrice;
      }
      totalValue += up * v;
      count += v;
    }
  }
  if (allSkyPrice) {
    if (result.sky[3] === count) {
      totalValue += result.sky[3] * 100;
    }
  }

  return [totalValue, result];
}

function countBlank(items: WorkbenchItems): number {
  let count = 0;
  for (const item of items.bench) {
    if (item === 'blank') {
      count++;
    }
  }
  return count;
}
