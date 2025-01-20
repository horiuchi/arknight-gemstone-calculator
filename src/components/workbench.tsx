import { WorkbenchItem } from '../lib/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from './ui/select';
import { useCallback } from 'react';
import { WorkbenchDisplayItem } from './workbench-display-item';
import { convertFromString, convertToString } from '../lib/workbench-utils';

interface WorkbenchProps {
  item: WorkbenchItem;
  onChangeItem: (item: WorkbenchItem) => void;
}

export function Workbench({ item, onChangeItem }: WorkbenchProps) {
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
        <SelectItem value='blank'>空</SelectItem>
        <SelectItem value='locked'>未解放</SelectItem>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value='fire-0-0'>初級淬火彫刻I</SelectItem>
          <SelectItem value='fire-0-1'>中級淬火彫刻I</SelectItem>
          <SelectItem value='fire-0-2'>上級淬火彫刻I</SelectItem>
          <SelectItem value='fire-1-0'>初級淬火彫刻II</SelectItem>
          <SelectItem value='fire-1-1'>中級淬火彫刻II</SelectItem>
          <SelectItem value='fire-1-2'>上級淬火彫刻II</SelectItem>
          <SelectItem value='fire-2-0'>初級淬火彫刻III</SelectItem>
          <SelectItem value='fire-2-1'>中級淬火彫刻III</SelectItem>
          <SelectItem value='fire-2-2'>上級淬火彫刻III</SelectItem>
          <SelectItem value='fire-3-0'>初級淬火彫刻IV</SelectItem>
          <SelectItem value='fire-3-1'>中級淬火彫刻IV</SelectItem>
          <SelectItem value='fire-3-2'>上級淬火彫刻IV</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value='sky-0-0'>初級融合再誕I</SelectItem>
          <SelectItem value='sky-0-1'>中級融合再誕I</SelectItem>
          <SelectItem value='sky-0-2'>上級融合再誕I</SelectItem>
          <SelectItem value='sky-1-0'>初級融合再誕II</SelectItem>
          <SelectItem value='sky-1-1'>中級融合再誕II</SelectItem>
          <SelectItem value='sky-1-2'>上級融合再誕II</SelectItem>
          <SelectItem value='sky-2-0'>初級融合再誕III</SelectItem>
          <SelectItem value='sky-2-1'>中級融合再誕III</SelectItem>
          <SelectItem value='sky-2-2'>上級融合再誕III</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value='glass-0-0'>初級ろ過精製I</SelectItem>
          <SelectItem value='glass-0-1'>中級ろ過精製I</SelectItem>
          <SelectItem value='glass-0-2'>上級ろ過精製I</SelectItem>
          <SelectItem value='glass-1-0'>初級ろ過精製II</SelectItem>
          <SelectItem value='glass-1-1'>中級ろ過精製II</SelectItem>
          <SelectItem value='glass-1-2'>上級ろ過精製II</SelectItem>
          <SelectItem value='glass-2-0'>初級ろ過精製III</SelectItem>
          <SelectItem value='glass-2-1'>中級ろ過精製III</SelectItem>
          <SelectItem value='glass-2-2'>上級ろ過精製III</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value='sand-0-0'>初級結晶増殖I</SelectItem>
          <SelectItem value='sand-0-1'>中級結晶増殖I</SelectItem>
          <SelectItem value='sand-0-2'>上級結晶増殖I</SelectItem>
          <SelectItem value='sand-1-0'>初級結晶増殖II</SelectItem>
          <SelectItem value='sand-1-1'>中級結晶増殖II</SelectItem>
          <SelectItem value='sand-1-2'>上級結晶増殖II</SelectItem>
          <SelectItem value='sand-2-0'>初級結晶増殖III</SelectItem>
          <SelectItem value='sand-2-1'>中級結晶増殖III</SelectItem>
          <SelectItem value='sand-2-2'>上級結晶増殖III</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
