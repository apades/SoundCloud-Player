import MusicPlayerFlat from '@root/components/MusicPlayer/Flat';
import { reactRender } from '@root/utils/pagesInit';
import { FC } from 'react';

const App: FC = (props) => {
  return (
    <div className="page-test">
      <MusicPlayerFlat />
    </div>
  );
};

reactRender(<App />);
