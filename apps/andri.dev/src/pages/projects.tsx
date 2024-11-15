import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my work and contributions in cybersecurity, including vulnerability assessments, secure system architecture, penetration testing, and security protocol enhancements. Each project is crafted to fortify digital security and tackle complex cyber threats with innovative solutions.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
