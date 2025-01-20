import { useCallback } from 'react';
import { WorkbenchItems } from '../lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface PresetProps {
  setItems: (items: WorkbenchItems) => void;
}

export function Preset({ setItems }: PresetProps) {
  const handleValueChange = useCallback(
    (value: string) => {
      switch (value) {
        case '1':
          setItems({
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
          });
          break;
        case '2':
          setItems({
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
          });
          break;
        case '3':
          setItems({
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
          });
          break;
        case '4':
          setItems({
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
          });
          break;
      }
    },
    [setItems],
  );

  return (
    <div className='flex items-center gap-x-2'>
      <h2 className='text-nowrap'>クレイジーモード用のプリセット</h2>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='プリセットを選択して下さい' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>だいたい最強 (草1砂1砂2砂3空2空1)</SelectItem>
          <SelectItem value='2'>炎が多い時用 (草1砂2砂3空1空2空3)</SelectItem>
          <SelectItem value='3'>
            空を使わない場合 (草1草2草3砂1砂2砂3)
          </SelectItem>
          <SelectItem value='4'>手抜き (炎4無無無無無)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
