import { Input } from './ui/input';

interface InOutValueProps {
  value: number;
  prev: number;
  onChangePrev: (value: number) => void;
}

export function InOutValue({ value, prev, onChangePrev }: InOutValueProps) {
  return (
    <div className='flex flex-col items-center gap-y-2'>
      <label className='flex items-center gap-x-2'>
        評価値
        <Input className='w-16 text-center' value={value} readOnly />
      </label>
      <label className='flex items-center gap-x-2'>
        前回の値
        <Input
          className='w-16 text-center'
          value={prev}
          onChange={(e) => onChangePrev(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
