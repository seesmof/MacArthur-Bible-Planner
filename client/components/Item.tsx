interface ItemProps {
  name: string;
}

export default function Item({ name }: ItemProps) {
  return <div className="">{name}</div>;
}
