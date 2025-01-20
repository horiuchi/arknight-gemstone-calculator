import { valueMap } from '../lib/calc';
import { ElementItem, Kinds } from '../lib/types';

interface ElementIconProps<K extends Kinds> {
  item: ElementItem<K>;
}

export function ElementIcon<K extends Kinds>({ item }: ElementIconProps<K>) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${item.kind}${item.level ?? 0}.png`}
      alt={item.kind}
      title={valueMap[item.kind][item.level ?? 0].toString()}
      className='size-8'
    />
  );
}
