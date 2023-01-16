import { FC } from 'react';
import './Flat.less';

// TODO flat views like https://codepen.io/juliepark/pen/YLPBNv
const MusicPlayerFlat: FC = (props) => {
  return (
    <div id="player">
      <div className="album">
        <div className="heart">
          <i className="fas fa-heart"></i>
        </div>
      </div>
      <div className="info">
        <div className="progress-bar">
          <div className="time--current">1:25</div>
          <div className="time--total">3:15</div>
          <div className="fill"></div>
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

export default MusicPlayerFlat;
