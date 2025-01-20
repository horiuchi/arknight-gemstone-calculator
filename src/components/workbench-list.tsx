import { useCallback } from 'react';
import { WorkbenchItem, WorkbenchItems } from '../lib/types';
import { Workbench } from './workbench';
import { Hand } from './hand';

interface WorkbenchListProps {
  items: WorkbenchItems;
  onChangeItems: (f: (prev: WorkbenchItems) => WorkbenchItems) => void;
}

export function WorkbenchList({ items, onChangeItems }: WorkbenchListProps) {
  const handleChangeBenchItem = useCallback(
    (index: number) => (item: WorkbenchItem) => {
      onChangeItems((prev) => {
        const next: WorkbenchItems['bench'] = [...prev.bench];
        next[index] = item;
        return { ...prev, bench: next };
      });
    },
    [onChangeItems],
  );
  const handleChangeHandItem = useCallback(
    (index: number) => (item: WorkbenchItem) => {
      onChangeItems((prev) => {
        const next: WorkbenchItems['hands'] = [...prev.hands];
        next[index] = item;
        return { ...prev, hands: next };
      });
    },
    [onChangeItems],
  );

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <h2>作業台</h2>
      <div className='flex items-center gap-x-4'>
        {items.bench.map((item, i) => (
          <Workbench
            key={i}
            item={item}
            onChangeItem={handleChangeBenchItem(i)}
          />
        ))}
      </div>
      <h2>
        手札 <span className='text-sm'>(設置せずとも発動する もののみ)</span>
      </h2>
      <div className='flex items-center gap-x-4'>
        <Hand
          item={items.hands[0]}
          grade={0}
          onChangeItem={handleChangeHandItem(0)}
        />
        <Hand
          item={items.hands[1]}
          grade={1}
          onChangeItem={handleChangeHandItem(1)}
        />
        <Hand
          item={items.hands[2]}
          grade={2}
          onChangeItem={handleChangeHandItem(2)}
        />
      </div>
    </div>
  );
}
