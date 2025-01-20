import { calculate } from './calc';

describe('淬火彫刻コース', () => {
  it('round1', () => {
    const [score, result] = calculate(
      {
        fire: 100,
        sky: 0,
        grass: 0,
        sand: 0,
      },
      0,
      {
        bench: [
          { kind: 'fire', grade: 0, level: 0 },
          { kind: 'fire', grade: 1, level: 0 },
          'locked',
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(1000);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 100, 3: 0, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round2', () => {
    const [score, result] = calculate(
      {
        fire: 100,
        sky: 0,
        grass: 0,
        sand: 0,
      },
      1000,
      {
        bench: [
          { kind: 'fire', grade: 0, level: 0 },
          { kind: 'fire', grade: 1, level: 0 },
          { kind: 'fire', grade: 2, level: 0 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(4500);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 100, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round3', () => {
    const [score, result] = calculate(
      {
        fire: 100,
        sky: 0,
        grass: 0,
        sand: 0,
      },
      4500,
      {
        bench: [
          { kind: 'fire', grade: 0, level: 0 },
          { kind: 'fire', grade: 1, level: 0 },
          { kind: 'fire', grade: 2, level: 0 },
          'locked',
          'locked',
          'locked',
        ],
        hands: ['blank', 'blank', 'blank'],
      },
    );
    expect(score).toBe(8000);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 100, 4: 0 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round4', () => {
    const [score, result] = calculate(
      {
        fire: 100,
        sky: 0,
        grass: 0,
        sand: 0,
      },
      8000,
      {
        bench: [
          { kind: 'fire', grade: 2, level: 0 },
          { kind: 'fire', grade: 3, level: 0 },
          'blank',
          'blank',
          'locked',
          'locked',
        ],
        hands: [
          { kind: 'fire', grade: 0, level: 1 },
          { kind: 'fire', grade: 1, level: 2 },
          'blank',
        ],
      },
    );
    expect(score).toBe(25000);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 200 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
  it('round5', () => {
    const [score, result] = calculate(
      {
        fire: 100,
        sky: 0,
        grass: 0,
        sand: 0,
      },
      25000,
      {
        bench: [
          { kind: 'fire', grade: 2, level: 0 },
          { kind: 'fire', grade: 3, level: 2 },
          'blank',
          'blank',
          'blank',
          'locked',
        ],
        hands: [
          { kind: 'fire', grade: 0, level: 1 },
          { kind: 'fire', grade: 1, level: 2 },
          'blank',
        ],
      },
    );
    expect(score).toBe(57000);
    expect(result).toMatchObject({
      fire: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 200 },
      sky: { 0: 0, 1: 0, 2: 0, 3: 0 },
      grass: { 0: 0, 1: 0, 2: 0, 3: 0 },
      sand: { 0: 0 },
    });
  });
});
