import { calculate } from './calc';

describe('結晶増殖コース', () => {
  it('round1', () => {
    const [score, result] = calculate(
      {
        fire: 0,
        sky: 0,
        grass: 0,
        sand: 100,
      },
      0,
      {
        bench: [
          { kind: 'sand', grade: 0, level: 0 },
          { kind: 'sand', grade: 1, level: 0 },
          'locked',
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(600);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 600 },
    });
  });
  it('round2', () => {
    const [score, result] = calculate(
      {
        fire: 0,
        sky: 0,
        grass: 50,
        sand: 50,
      },
      600,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 0 },
          { kind: 'sand', grade: 0, level: 1 },
          { kind: 'sand', grade: 1, level: 1 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(1850);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 25, 2: 0, 3: 0 },
      sand: { 0: 1125 },
    });
  });
  it('round3', () => {
    const [score, result] = calculate(
      {
        fire: 18,
        sky: 19,
        grass: 13,
        sand: 50,
      },
      1850,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 0 },
          { kind: 'sand', grade: 0, level: 2 },
          { kind: 'sand', grade: 1, level: 2 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(4162);
    expect(result).toMatchObject({
      fire: { 0: 18, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 19, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 7, 2: 0, 3: 0 },
      sand: { 0: 2240 },
    });
  });
  it('round4', () => {
    const [score, result] = calculate(
      {
        fire: 14,
        sky: 15,
        grass: 21,
        sand: 50,
      },
      4162,
      {
        bench: [
          { kind: 'grass', grade: 0, level: 1 },
          { kind: 'sand', grade: 0, level: 2 },
          { kind: 'sand', grade: 1, level: 2 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(6436);
    expect(result).toMatchObject({
      fire: { 0: 14, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 15, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 17, 2: 0, 3: 0 },
      sand: { 0: 2160 },
    });
  });
  it('round5', () => {
    const [score, result] = calculate(
      {
        fire: 20,
        sky: 13,
        grass: 17,
        sand: 50,
      },
      6436,
      {
        bench: [
          { kind: 'sand', grade: 0, level: 2 },
          { kind: 'sand', grade: 1, level: 2 },
          { kind: 'sand', grade: 2, level: 2 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(42486);
    expect(result).toMatchObject({
      fire: { 0: 20, 1: 0, 2: 0, 3: 0, 4: 0 },
      sky: { 0: 13, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 17, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 18000 },
    });
  });
});
