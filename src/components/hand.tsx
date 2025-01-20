import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from './ui/select';
import { useCallback } from 'react';
import { convertFromString, convertToString } from '../lib/workbench-utils';
import { WorkbenchItem } from '../lib/types';
import { WorkbenchDisplayItem } from './workbench-display-item';

interface HandProps {
  item: WorkbenchItem;
  grade: 0 | 1 | 2;
  onChangeItem: (item: WorkbenchItem) => void;
}

export function Hand({ item, grade, onChangeItem }: HandProps) {
  const handleChange = useCallback(
    (value: string) => {
      onChangeItem(convertFromString(value));
    },
    [onChangeItem],
  );

  return (
    <Select defaultValue={convertToString(item)} onValueChange={handleChange}>
      <SelectTrigger className='size-fit border-primary rounded-full'>
        <WorkbenchDisplayItem item={item} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='blank'>なし</SelectItem>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {grade === 0 ? (
            <>
              <SelectItem value='fire-0-0'>初級淬火彫刻I</SelectItem>
              <SelectItem value='fire-0-1'>中級淬火彫刻I</SelectItem>
              <SelectItem value='fire-0-2'>上級淬火彫刻I</SelectItem>
            </>
          ) : grade === 1 ? (
            <>
              <SelectItem value='fire-1-0'>初級淬火彫刻II</SelectItem>
              <SelectItem value='fire-1-1'>中級淬火彫刻II</SelectItem>
              <SelectItem value='fire-1-2'>上級淬火彫刻II</SelectItem>
            </>
          ) : grade === 2 ? (
            <>
              <SelectItem value='fire-2-0'>初級淬火彫刻III</SelectItem>
              <SelectItem value='fire-2-1'>中級淬火彫刻III</SelectItem>
              <SelectItem value='fire-2-2'>上級淬火彫刻III</SelectItem>
            </>
          ) : null}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
