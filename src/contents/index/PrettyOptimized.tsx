import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Secure & Efficient Code"
        caption="Robust & Streamlined"
        description="Prioritizing clean, efficient, and secure code to enhance performance and resilience against cyber threats."
      />
    </header>
  );
}

export default PrettyOptimized;
