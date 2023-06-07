import { SingleProject } from '@/components/singleProject/SingleProject';
interface ProjectProps {
  params: {
    id: string;
  };
}

async function getProject(id: string) {
  const response = await fetch(`http://localhost:3002/api/projects/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function ProjectPage({ params: { id } }: ProjectProps) {
  const res = await getProject(id);
  const project = await res.project;

  return (
    <div className="z-10">
      <SingleProject project={project} />
    </div>
  );
}
