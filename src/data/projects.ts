import droobTimerImage from '../assets/projects/droobtimer/main.png';
import bldLabImage from '../assets/projects/bldlab/main.png';
import bldLabApiImage from '../assets/projects/bldlabapi/main.png';

export type ProjectData = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: ProjectData[] = [
  {
    name: 'droobTimer',
    description:
      'droobTimer is a speedcubing timer built for practicing a wide range of puzzles, storing and analyzing solves, and customizing the cubing experience with inspection settings, themes, multiple timer inputs, and more. Its interface is built almost entirely from hand-drawn SVGs, giving the app a playful, deliberately imperfect personality—and occasionally letting it troll the user. Still in development, DroobTimer will eventually introduce gamification designed to make practicing and improving at cubing even more fun.',
    image: droobTimerImage,
    technologies: ['React', 'TypeScript', 'IndexedDB'],
    githubUrl: 'https://github.com/RoweWH/droobTimer',
    liveUrl: 'https://droobtimer.com',
  },
  {
    name: 'BLDLab',
    description: 'BLDLab is a full-stack web application built for blindfolded speedcubers. It provides a unified, shared algorithm database where users can discover algorithms while creating, storing, and managing their own personal algorithm sheets. It also supports the memory side of blindfolded solving, including letter pairs and image organization, with memory palace management planned as well. Users can create and export custom sheets, and dedicated training and analysis tools are also planned. BLDLab is a large undertaking and is currently in beta, with the long-term goal of becoming an all-in-one platform for blindfolded solving.',
    image: bldLabImage,
    technologies: [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
],
    githubUrl: 'https://github.com/RoweWH/BLDLab',
    liveUrl: 'https://beta.bldlab.net',
  },

  {
  name: 'BLDLab API',
  description:
    'This is the backend API that powers BLDLab’s shared algorithm database. It handles retrieving and adding algorithms while validating submissions to ensure algorithms are correct before they enter the database. The API also supports batch imports, automatically analyzing and classifying algorithms by their corresponding cases so they can be organized appropriately.',
  image: bldLabApiImage,
  technologies: ['C#', '.NET', 'Dapper','SQL'],
  githubUrl: 'https://github.com/RoweWH/BLDDBApplication',
  liveUrl: 'https://api.bldlab.net/api/edges/cases?buffer=UF&first=FR&second=RU',
}
  
];
