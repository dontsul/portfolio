import { Bio } from '@/components/bio/Bio';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { ProjectsSlide } from '@/components/projectsSlide/ProjectsSlide';
import { ContactMe } from '@/components/contactMe/ContactMe';
import Scroll from '../components/scroll/Scroll';

export default async function Home() {
  return (
    <Scroll>
      <main className="flex min-h-screen flex-col pt-12 md:pt-18 ">
        <Bio />
        <About />
        <Skills />
        <ProjectsSlide />
        <ContactMe />
      </main>
    </Scroll>
  );
}
