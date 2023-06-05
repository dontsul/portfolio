import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { forwardRef } from 'react';
import { Skill } from '../skill/Skill';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const VerticalTabs = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const data = [
    {
      label: 'Front-end',
      value: 'frontend',
      desc: [
        'HTML',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Redux-toolkit',
        'IndexedDB',
        'Webpack',
        'Gulp',
      ],
    },
    {
      label: 'Back-end',
      value: 'backend',
      desc: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST API'],
    },
    {
      label: 'Styling',
      value: 'styling',
      desc: [
        'CSS ',
        'SCSS / SASS',
        'Tailwind CSS',
        'Bootstrap',
        'Material UI',
        'Css module',
        'Styled components',
        'BEM Methodology',
      ],
    },
    {
      label: 'Version',
      value: 'versionControl',
      desc: ['Git ', 'Github ', 'Gitlab'],
    },
    {
      label: 'Design',
      value: 'design',
      desc: ['Figma', 'Canva'],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('frontend');

  return (
    <Tabs ref={ref} value={activeTab} orientation="vertical" className="z-10">
      <TabsHeader className="w-32 bg-blue-gray-100 z-10 dark:bg-blue-gray-800  ">
        {data.map(({ label, value }) => (
          <Tab
            onClick={() => setActiveTab(value)}
            key={value}
            value={value}
            className={`${
              activeTab === value ? 'dark:text-blue-gray-900 ' : 'dark:text-blue-gray-100'
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="z-10">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3 py-2 z-10">
              {desc.map((item: string, index: number) => (
                <Skill key={index} title={item} />
              ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
});

VerticalTabs.displayName = 'VerticalTabs';
export const MVerticalTabs = motion(VerticalTabs);
