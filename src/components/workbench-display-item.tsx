import { LockKeyhole, Plus } from 'lucide-react';
import { WorkbenchItem } from '../lib/types';
import { getBoardName } from '../lib/workbench-utils';
import { Board } from './board';

interface WorkbenchDisplayItemProps {
  item: WorkbenchItem;
}

export function WorkbenchDisplayItem({ item }: WorkbenchDisplayItemProps) {
  return (
    <div
      className='flex items-center justify-center min-h-48'
      title={getBoardName(item)}
    >
      {item === 'blank' ? (
        <span>
          <Plus />
        </span>
      ) : item === 'locked' ? (
        <span>
          <LockKeyhole />
        </span>
      ) : (
        <Board board={item} />
      )}
    </div>
  );
}
