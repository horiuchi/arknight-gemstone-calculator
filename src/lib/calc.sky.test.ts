import { calculate } from './calc';

describe('融合再誕コース', () => {
  it('round1', () => {
    const [score, result] = calculate(
      {
        fire: 0,
        sky: 50,
        grass: 0,
        sand: 50,
      },
      0,
      {
        bench: [
          { kind: 'sky', grade: 0, level: 0 },
          { kind: 'sky', grade: 1, level: 0 },
          'locked',
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(150);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 50, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round2', () => {
    const [score, result] = calculate(
      {
        fire: 0,
        sky: 30,
        grass: 70,
        sand: 0,
      },
      150,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 0 },
          { kind: 'sky', grade: 0, level: 1 },
          { kind: 'sky', grade: 1, level: 1 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(1381);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 33, 3: 0 },
      grass: { 0: 0, 1: 2, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round3', () => {
    const [score, result] = calculate(
      {
        fire: 18,
        sky: 50,
        grass: 13,
        sand: 19,
      },
      1381,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 2 },
          { kind: 'sky', grade: 0, level: 1 },
          { kind: 'sky', grade: 1, level: 1 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(2384);
    expect(result).toMatchObject({
      fire: { 0: 18, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 28, 2: 13, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round4', () => {
    const [score, result] = calculate(
      {
        fire: 14,
        sky: 50,
        grass: 21,
        sand: 15,
      },
      2384,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 2 },
          { kind: 'sky', grade: 0, level: 2 },
          { kind: 'sky', grade: 1, level: 1 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(3786);
    expect(result).toMatchObject({
      fire: { 0: 14, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 22, 2: 21, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round5', () => {
    const [score, result] = calculate(
      {
        fire: 20,
        sky: 50,
        grass: 17,
        sand: 13,
      },
      3786,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 2 },
          { kind: 'sky', grade: 0, level: 2 },
          { kind: 'sky', grade: 1, level: 1 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(5049);
    expect(result).toMatchObject({
      fire: { 0: 20, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 23, 2: 17, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
});
