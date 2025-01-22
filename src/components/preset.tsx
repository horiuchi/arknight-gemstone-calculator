import { useCallback, useState } from 'react';
import { ValuePerKinds, WorkbenchItems } from '../lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { calculate } from '../lib/calc';

interface PresetProps {
  input: ValuePerKinds;
  setItems: (items: WorkbenchItems) => void;
}

const presets: WorkbenchItems[] = [
  {
    bench: [
      { kind: 'grass', grade: 0, level: 2 },
      { kind: 'sand', grade: 0, level: 2 },
      { kind: 'sand', grade: 1, level: 2 },
      { kind: 'sand', grade: 2, level: 2 },
      { kind: 'sky', grade: 1, level: 2 },
      { kind: 'sky', grade: 0, level: 2 },
    ],
    hands: [
      { kind: 'fire', grade: 0, level: 2 },
      { kind: 'fire', grade: 1, level: 2 },
      { kind: 'fire', grade: 2, level: 2 },
    ],
  },
  {
    bench: [
      { kind: 'grass', grade: 0, level: 2 },
      { kind: 'sand', grade: 0, level: 2 },
      { kind: 'sand', grade: 1, level: 2 },
      { kind: 'sand', grade: 2, level: 2 },
      { kind: 'sky', grade: 0, level: 2 },
      { kind: 'sky', grade: 1, level: 2 },
    ],
    hands: [
      { kind: 'fire', grade: 0, level: 2 },
      { kind: 'fire', grade: 1, level: 2 },
      { kind: 'fire', grade: 2, level: 2 },
    ],
  },
  {
    bench: [
      { kind: 'grass', grade: 0, level: 2 },
      { kind: 'sand', grade: 1, level: 2 },
      { kind: 'sand', grade: 2, level: 2 },
      { kind: 'sky', grade: 0, level: 2 },
      { kind: 'sky', grade: 1, level: 2 },
      { kind: 'sky', grade: 2, level: 2 },
    ],
    hands: [
      { kind: 'fire', grade: 0, level: 2 },
      { kind: 'fire', grade: 1, level: 2 },
      { kind: 'fire', grade: 2, level: 2 },
    ],
  },
  {
    bench: [
      { kind: 'grass', grade: 0, level: 2 },
      { kind: 'grass', grade: 1, level: 2 },
      { kind: 'grass', grade: 2, level: 2 },
      { kind: 'sand', grade: 0, level: 2 },
      { kind: 'sand', grade: 1, level: 2 },
      { kind: 'sand', grade: 2, level: 2 },
    ],
    hands: [
      { kind: 'fire', grade: 0, level: 2 },
      { kind: 'fire', grade: 1, level: 2 },
      { kind: 'fire', grade: 2, level: 2 },
    ],
  },
  {
    bench: [
      { kind: 'fire', grade: 3, level: 2 },
      'blank',
      'blank',
      'blank',
      'blank',
      'blank',
    ],
    hands: [
      { kind: 'fire', grade: 0, level: 2 },
      { kind: 'fire', grade: 1, level: 2 },
      { kind: 'fire', grade: 2, level: 2 },
    ],
  },
  {
    bench: [
      { kind: 'grass', grade: 0, level: 2 },
      { kind: 'sand', grade: 0, level: 2 },
      { kind: 'sand', grade: 1, level: 2 },
      { kind: 'sand', grade: 2, level: 2 },
      { kind: 'sky', grade: 0, level: 2 },
      { kind: 'sky', grade: 1, level: 1 },
    ],
    hands: [
      { kind: 'fire', grade: 0, level: 2 },
      { kind: 'fire', grade: 1, level: 2 },
      { kind: 'fire', grade: 2, level: 2 },
    ],
  },
] as const;

function searchStrongest(input: ValuePerKinds) {
  const results = presets.map((preset) => {
    const [value] = calculate(input, 0, preset);
    return value;
  });
  const max = Math.max(...results);
  return results.findIndex((value) => value === max);
}

export function Preset({ input, setItems }: PresetProps) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleValueChange = useCallback(
    (value: string) => {
      switch (value) {
        case '1':
          setItems(presets[0]);
          break;
        case '2':
          setItems(presets[1]);
          break;
        case '3':
          setItems(presets[2]);
          break;
        case '4':
          setItems(presets[3]);
          break;
        case '5':
          setItems(presets[4]);
          break;
        case '6':
          setItems(presets[5]);
          break;
      }
      setValue(value);
    },
    [setItems],
  );

  const handleSearchStrongest = useCallback(() => {
    const index = searchStrongest(input);
    setItems(presets[index]);
    setValue('' + (index + 1));
  }, [input, setItems]);

  return (
    <div className='flex items-center gap-x-2'>
      <h2 className='text-nowrap'>プリセット</h2>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='プリセットを選択して下さい' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>だいたい最強 (草1砂1砂2砂3空2空1)</SelectItem>
          <SelectItem value='2'>最後が逆の場合 (草1砂1砂2砂3空1空2)</SelectItem>
          <SelectItem value='3'>炎が多い時用 (草1砂2砂3空1空2空3)</SelectItem>
          <SelectItem value='4'>
            空を使わない場合 (草1草2草3砂1砂2砂3)
          </SelectItem>
          <SelectItem value='5'>手抜き (炎4無無無無無)</SelectItem>
          <SelectItem value='6'>
            最後が逆かつ空2が中級 (草1砂1砂2砂3空1空2↓)
          </SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSearchStrongest} variant='secondary'>
        最強のプリセットは？
      </Button>
    </div>
  );
}
