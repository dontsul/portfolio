import { Project } from './project/Project';

import { ProjectInfo } from './project/Project';

export const ProjectsList = ({ projects }: { projects: ProjectInfo[] }) => {
  const projectsList = projects;
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 z-10">
      {projectsList.map((project) => {
        return <Project key={project._id} project={project} />;
      })}
    </div>
  );
};
