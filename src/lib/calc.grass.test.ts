import { calculate } from './calc';

describe('ろ過精製コース', () => {
  it('round1', () => {
    const [score, result] = calculate(
      {
        fire: 0,
        sky: 0,
        grass: 100,
        sand: 0,
      },
      0,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 0 },
          { kind: 'grass', grade: 1, level: 0 },
          'locked',
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(1080);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 20, 3: 0 },
      sand: { 0: 80 },
    });
  });
  it('round2', () => {
    const [score, result] = calculate(
      {
        fire: 0,
        sky: 0,
        grass: 100,
        sand: 0,
      },
      1080,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 1 },
          { kind: 'grass', grade: 1, level: 1 },
          { kind: 'grass', grade: 2, level: 0 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(8665);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 15 },
      sand: { 0: 85 },
    });
  });
  it('round3', () => {
    const [score, result] = calculate(
      {
        fire: 18,
        sky: 13,
        grass: 50,
        sand: 19,
      },
      8665,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 2 },
          { kind: 'grass', grade: 1, level: 1 },
          { kind: 'grass', grade: 2, level: 0 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(13306);
    expect(result).toMatchObject({
      fire: { 0: 18, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 13, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 9 },
      sand: { 0: 110 },
    });
  });
  it('round4', () => {
    const [score, result] = calculate(
      {
        fire: 14,
        sky: 21,
        grass: 50,
        sand: 15,
      },
      13306,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 2 },
          { kind: 'grass', grade: 1, level: 1 },
          { kind: 'grass', grade: 2, level: 1 },
          { kind: 'sand', grade: 1, level: 0 },
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(21141);
    expect(result).toMatchObject({
      fire: { 0: 14, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 21, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 15 },
      sand: { 0: 300 },
    });
  });
  it('round5', () => {
    const [score, result] = calculate(
      {
        fire: 20,
        sky: 17,
        grass: 50,
        sand: 13,
      },
      21141,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 2 },
          { kind: 'grass', grade: 1, level: 2 },
          { kind: 'grass', grade: 2, level: 2 },
          { kind: 'sand', grade: 1, level: 0 },
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(35841);
    expect(result).toMatchObject({
      fire: { 0: 20, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 17, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 28 },
      sand: { 0: 663 },
    });
  });
});
