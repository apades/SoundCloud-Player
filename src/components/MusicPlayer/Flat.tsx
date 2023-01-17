import { PlayerState } from '@root/store/playerState';
import { observer } from 'mobx-react';
import { FC } from 'react';
import ProgressBar from '../ProgressBar';
import './Flat.less';

type Props = {
  playerState: PlayerState;
};

// flat views https://codepen.io/juliepark/pen/YLPBNv
const MusicPlayerFlat: FC<Props> = (props) => {
  let { playerState } = props;
  return (
    <div id="player">
      <div className="album">
        <div className="heart">
          <i className="fas fa-heart"></i>
        </div>
      </div>
      <div className="info">
        <div className="time-container f-i-center">
          <div className="time--current">{playerState.time.current}</div>
          <div className="progress-bar-container">
            <ProgressBar loadColor="#8BA989" bgColor="#cdd9c2" />
          </div>
          <div className="time--total">{playerState.time.end}</div>
        </div>

        <div className="currently-playing">
          <h2 className="song-name">Symphony</h2>
          <h3 className="artist-name">Clean Bandit ft. Zara Larsson</h3>
        </div>
        <div className="controls">
          <div className="option">
            <i className="fas fa-bars"></i>
          </div>
          <div className="volume">
            <i className="fas fa-volume-up"></i>
          </div>
          <div className="previous">
            <i className="fas fa-backward"></i>
          </div>
          <div className="play">
            <i className="fas fa-play"></i>
          </div>
          {false && (
            <div className="pause">
              <i className="fas fa-pause"></i>
            </div>
          )}
          <div className="next">
            <i className="fas fa-forward"></i>
          </div>
          <div className="shuffle">
            <i className="fas fa-random"></i>
          </div>
          <div className="add">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MusicPlayerFlat);
