import { ProjectsList } from '@/components/projectsList/ProjectsList';

async function getProjects() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/projects`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Projects() {
  const res = await getProjects();
  const projects = await res.projects;

  return (
    <div className="flex min-h-screen flex-col pt-12 pb-16 md:pt-18 z-10">
      <ProjectsList projects={projects} />
    </div>
  );
}
