import {
  Kinds,
  LevelPerKind,
  ValuePerKinds,
  ValuePerKindsWithLevel,
} from '../lib/types';
import { Input } from './ui/input';
import { ElementIcon } from './element-icon';
import { Fragment } from 'react/jsx-runtime';

interface OutputCountProps {
  values: ValuePerKindsWithLevel;
}

export function OutputCount({ values }: OutputCountProps) {
  return (
    <div className='flex flex-col items-center gap-y-2'>
      <h2>刻印産物</h2>
      {Object.keys(values).map((k) => {
        const kind = k as keyof ValuePerKinds;
        const value = values[kind];
        return (
          <div className='flex items-center gap-x-2' key={kind}>
            {Object.entries(value).map(([level, value]) => {
              if (value <= 0) {
                return null;
              }

              return (
                <Fragment key={`${kind}-${level}`}>
                  <ElementIcon
                    item={{ kind, level: Number(level) as LevelPerKind[Kinds] }}
                  />
                  <Input
                    key={kind}
                    value={value}
                    className='w-24 text-center'
                    readOnly
                  />
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
