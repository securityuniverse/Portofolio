import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Attention to Critical Details."
        caption="Detail Oriented"
        description="Maintaining a vigilant eye for vulnerabilities, system inconsistencies, and potential risks to ensure a secure user experience."
      />
    </header>
  );
}

export default DetailOriented;
