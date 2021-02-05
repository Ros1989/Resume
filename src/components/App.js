import React from 'react';
import Wrapper from 'components/Wrapper';
import Sidebar from 'components/Sidebar';
import AboutMe from 'components/AboutMe';
import contacts from '../data/contacts';
import techSkills from '../data/techSkills.json';
import softSkills from '../data/softSkills.json';
import commandProjects from '../data/commandProjects.json';
import ownProjects from '../data/ownProjects.json';
import experience from '../data/experience.json';
import languages from '../data/languages.json';

function App() {
  return (
    <Wrapper>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        languages={languages}
      />
      <AboutMe
        commandProjects={commandProjects}
        ownProjects={ownProjects}
        experience={experience}
      />
    </Wrapper>
  );
}

export default App;
