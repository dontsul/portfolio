import { Bio } from '@/components/bio/Bio';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { ProjectsSlide } from '@/components/projectsSlide/ProjectsSlide';
import { ContactMe } from '@/components/contactMe/ContactMe';
import Scroll from '../components/scroll/Scroll';
import { Carousel } from '@/components/carousel/Carousel';

async function getProjects() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/projects`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Home() {
  const res = await getProjects();
  const projects = await res.projects;

  return (
    <Scroll>
      <main className="flex min-h-screen flex-col pt-12 md:pt-18 ">
        <Bio />
        <About />
        <Skills />
        <ProjectsSlide projects={projects} />
        <ContactMe />
      </main>
    </Scroll>
  );
}
