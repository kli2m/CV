import { MenuBarType } from 'interfaces';

const menuBar: MenuBarType = {
  ABOUT:
    'I have been studying Javascript since 2019, constantly improving my level of knowledge. I have experience working on React on a commercial project. I want to find my dream job and continue to develop in this direction.',
  SKILLS:
    'JS(6+), React (TypeScript, Redux, Apollo (reactive variables)), CSS, SASS, JUST, Get, Trello, Figma, Node Js (based on courses), Vue (self-study)',
  EXPERINCE: [
    {
      title: 'NDA',
      dates: 'Nov 2021 - Apr 2022',
      description:
        'The project included working with React library, TypeScript, Sass preprocessor, Apollo graphic client, and creating Just tests.',
    },
    {
      title: 'BELARUSBANK',
      dates: 'Apr 2020 - Present',
      description: 'Position: Economic security sector specialist.',
    },
    {
      title: 'BELARUSBANK',
      dates: 'Apr 2008 - Apr 2020',
      description: 'Position: Automatization sector specialist',
    },
  ],
  EDUCATION: [
    {
      title: 'React courses',
      dates: 'Feb 2021 - Apr 2021',
      description: 'free Online React courses conducted by The Rolling Scopes, Minsk.',
    },
    {
      title: 'NodeJS courses',
      dates: 'Oct 2020 - Nov 2020',
      description: 'free Online Node JS courses conducted by The Rolling Scopes, Minsk.',
    },
    {
      title: 'JavaScript courses',
      dates: 'Sep 2019 - Jan 2020',
      description:
        'Free Online Front-end JavaScript courses conducted by The Rolling Scopes, Minsk.',
    },
    {
      title: 'Higher education',
      dates: 'Sep 2012 - Jun 2017',
      description:
        'Polotsk State University, specialty «Economics and management at the enterprise», qualification «Manager-economist»',
    },
    {
      title: 'Technical school ',
      dates: 'Sep 2003 - Jun 2007',
      description:
        'Vitebsk State Polytechnic College, specialty «Software of information technologies», qualification «Technician programmer»',
    },
  ],
  LANGUAGES: [
    {
      title: 'Russian',
      dates: 'Native',
      description: '',
    },
    {
      title: 'English',
      dates: 'Pre-Intermediate',
      description: '',
    },
  ],
};

export default menuBar;
