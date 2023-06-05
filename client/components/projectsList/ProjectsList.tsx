import { Project } from './project/Project';

export const ProjectsList = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};
