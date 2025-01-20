import { ElementItem, Kinds } from '../lib/types';

interface ElementIconProps<K extends Kinds> {
  item: ElementItem<K>;
}

export function ElementIcon<K extends Kinds>({
  item
}: ElementIconProps<K>) {
  return (
    <img src={`/${item.kind}${item.level ?? 0}.png`} alt={item.kind} className='size-8' />
  );
}
