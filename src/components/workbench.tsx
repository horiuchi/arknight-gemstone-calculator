import { GradePerKind, Kinds, WorkbenchItem } from '../lib/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from './ui/select';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { WorkbenchDisplayItem } from './workbench-display-item';
import {
  convertFromString,
  convertToString,
  getBoardName,
} from '../lib/workbench-utils';
import { getBoardPattern } from '../lib/boardPattern';
import { MoveRight, Plus } from 'lucide-react';
import { ElementIcon } from './element-icon';

interface WorkbenchProps {
  item: WorkbenchItem;
  onChangeItem: (item: WorkbenchItem) => void;
}

export function Workbench({ item, onChangeItem }: WorkbenchProps) {
  const [value, setValue] = useState<string>(convertToString(item));
  useEffect(() => {
    setValue(convertToString(item));
  }, [item]);

  const handleChange = useCallback(
    (value: string) => {
      setValue(value);
      onChangeItem(convertFromString(value));
    },
    [onChangeItem],
  );

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className='size-fit border-primary rounded-full'>
        <WorkbenchDisplayItem item={item} />
      </SelectTrigger>
      <SelectContent>
        <SelectWorkbenchItem item='blank' />
        <SelectWorkbenchItem item='locked' />

        <SelectSeparator />

        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='fire' grade={0} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 0, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 0, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 0, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='fire' grade={1} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 1, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 1, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 1, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='fire' grade={2} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 2, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 2, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 2, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='fire' grade={3} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 3, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 3, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'fire', grade: 3, level: 2 }} />
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='sky' grade={0} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 0, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 0, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 0, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='sky' grade={1} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 1, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 1, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 1, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='sky' grade={2} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 2, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 2, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'sky', grade: 2, level: 2 }} />
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='grass' grade={0} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 0, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 0, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 0, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='grass' grade={1} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 1, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 1, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 1, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='grass' grade={2} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 2, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 2, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'grass', grade: 2, level: 2 }} />
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='sand' grade={0} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 0, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 0, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 0, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='sand' grade={1} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 1, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 1, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 1, level: 2 }} />
        </SelectGroup>
        <SelectGroup>
          <SelectWorkbenchGroupLabel kind='sand' grade={2} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 2, level: 0 }} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 2, level: 1 }} />
          <SelectWorkbenchItem item={{ kind: 'sand', grade: 2, level: 2 }} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

interface SelectWorkbenchItemProps {
  item: WorkbenchItem;
}

function SelectWorkbenchItem({ item }: SelectWorkbenchItemProps) {
  return (
    <SelectItem value={convertToString(item)}>{getBoardName(item)}</SelectItem>
  );
}

interface SelectWorkbenchGroupLabelProps<K extends Kinds> {
  kind: K;
  grade: GradePerKind[K];
}

function SelectWorkbenchGroupLabel<K extends Kinds>({
  kind,
  grade,
}: SelectWorkbenchGroupLabelProps<K>) {
  const pattern = getBoardPattern({ kind, grade, level: 0 });
  return (
    <SelectLabel>
      <div className='flex items-center -ml-6'>
        {pattern.inputs.map((input, i) => (
          <Fragment key={`${input.kind}-${input.level}`}>
            {i > 0 && (
              <span>
                <Plus className='size-4' />
              </span>
            )}
            <span>
              <ElementIcon item={input} size='small' />
            </span>
          </Fragment>
        ))}
        <MoveRight className='size-4 mx-1' />
        {pattern.output.map((output, i) => (
          <Fragment key={`${output.kind}-${output.level}`}>
            {i > 0 && (
              <span>
                <Plus className='size-4' />
              </span>
            )}
            <span>
              <ElementIcon item={output} size='small' />
            </span>
          </Fragment>
        ))}
      </div>
    </SelectLabel>
  );
}
