import { valueMap } from '../lib/calc';
import { ElementItem, Kinds } from '../lib/types';

interface ElementIconProps<K extends Kinds> {
  item: ElementItem<K>;
  size?: 'small' | 'normal';
}

export function ElementIcon<K extends Kinds>({
  item,
  size,
}: ElementIconProps<K>) {
  const className = size === 'small' ? 'size-6' : 'size-8';

  return (
    <img
      src={`${import.meta.env.BASE_URL}${item.kind}${item.level ?? 0}.png`}
      alt={item.kind}
      title={valueMap[item.kind][item.level ?? 0].toString()}
      className={className}
    />
  );
}
