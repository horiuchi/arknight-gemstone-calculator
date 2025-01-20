import { Fragment } from 'react';
import { MoveDown, Plus } from 'lucide-react';
import { getBoardPattern } from '../lib/boardPattern';
import { BoardItem, Kinds } from '../lib/types';
import { ElementIcon } from './element-icon';

interface BoardProps<K extends Kinds> {
  board: BoardItem<K>;
}

export function Board<K extends Kinds>({ board }: BoardProps<K>) {
  const pattern = getBoardPattern(board);

  return (
    <div className='flex flex-col items-center justify-center'>
      {pattern.inputs.map((input, i) => (
        <Fragment key={`${input.kind}-${input.level}`}>
          {i > 0 && (
            <span>
              <Plus />
            </span>
          )}
          <span>
            <ElementIcon item={input} />
          </span>
        </Fragment>
      ))}
      <MoveDown className='my-2' />
      {pattern.output.map((output, i) => (
        <Fragment key={`${output.kind}-${output.level}`}>
          {i > 0 && (
            <span>
              <Plus />
            </span>
          )}
          <span>
            <ElementIcon item={output} />
          </span>
        </Fragment>
      ))}
    </div>
  );
}
