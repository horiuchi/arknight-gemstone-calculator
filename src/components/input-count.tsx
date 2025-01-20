import { ChangeEvent, useCallback } from 'react';
import { ValuePerKinds } from '../lib/types';
import { Input } from './ui/input';
import { ElementIcon } from './element-icon';

interface InputCountProps {
  values: ValuePerKinds;
  onChangeValue: (kind: keyof ValuePerKinds, value: number) => void;
}

export function InputCount({ values, onChangeValue }: InputCountProps) {
  const handleChange = useCallback(
    (kind: keyof ValuePerKinds) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      onChangeValue(kind, value);
    },
    [onChangeValue],
  );

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <h2>加工用原料</h2>
      {Object.keys(values).map((k) => {
        const kind = k as keyof ValuePerKinds;
        return (
          <div className='flex items-center gap-x-2' key={kind}>
            <ElementIcon item={{ kind }} />
            <Input
              key={kind}
              value={values[kind]}
              className='w-16 text-center'
              onChange={handleChange(kind)}
            />
          </div>
        );
      })}
    </div>
  );
}
