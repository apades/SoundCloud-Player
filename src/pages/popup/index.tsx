import { reactRender } from '@root/utils/pagesInit';
import { FC } from 'react';

const App: FC = () => {
  return <div className="page-popup">this is popup</div>;
};

reactRender(<App />);
