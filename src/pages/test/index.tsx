import MusicPlayerFlat from '@root/components/MusicPlayer/Flat';
import playerState from '@root/store/playerState';
import { reactRender } from '@root/utils/pagesInit';
import { FC } from 'react';

window.playerState = playerState;
const App: FC = (props) => {
  return (
    <div className="page-test">
      <MusicPlayerFlat playerState={playerState} />
    </div>
  );
};

reactRender(<App />);
