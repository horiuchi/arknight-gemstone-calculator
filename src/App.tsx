import { useCallback, useMemo, useState } from 'react';
import { InputCount } from './components/input-count';
import { ValuePerKinds, WorkbenchItems } from './lib/types';
import { OutputCount } from './components/output-count';
import { calculate } from './lib/calc';
import { ArrowRight } from 'lucide-react';
import { WorkbenchList } from './components/workbench-list';

function App() {
  const [values, setValues] = useState<ValuePerKinds>({
    fire: 10,
    sky: 10,
    glass: 10,
    sand: 10,
  });
  const [items, setItems] = useState<WorkbenchItems>({
    bench: ['blank', 'blank', 'locked', 'locked', 'locked', 'locked'],
    hands: ['blank', 'blank', 'blank'],
  });
  const [value, output] = useMemo(
    () => calculate(values, items),
    [items, values],
  );

  const handleChangeValue = useCallback(
    (kind: keyof ValuePerKinds, value: number) => {
      setValues((prev) => ({
        ...prev,
        [kind]: value,
      }));
    },
    [],
  );

  return (
    <main className='flex flex-col items-center justify-center p-8'>
      <h1 className='text-xl mb-4'>アークナイツ 宝石刻印 評価値計算機</h1>
      <div className='flex items-center gap-x-4'>
        <InputCount values={values} onChangeValue={handleChangeValue} />
        <ArrowRight size={32} />
        <WorkbenchList items={items} onChangeItems={setItems} />
        <ArrowRight size={32} />
        <div className='flex flex-col items-center gap-y-2'>
          <h2 className='text-lg'>評価値: {value}</h2>
          <OutputCount values={output} />
        </div>
      </div>
    </main>
  );
}

export default App;
