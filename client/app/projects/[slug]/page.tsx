interface ProjectProps {
  params: {
    id: string;
  };
}

export default function Project({ params: { id } }: ProjectProps) {
  return <div>{id}</div>;
}
