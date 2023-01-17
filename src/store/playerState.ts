import { makeAutoObservable, configure } from 'mobx';

configure({
  enforceActions: 'never',
});
export class PlayerState {
  playing = false;
  loading = true;
  artwork = '';
  link = '';
  favorite = false;
  shuffle = false;
  repeat = 'none';
  time = {
    current: '0',
    end: '0',
  };
  volume = 0;
  mute = false;
  artist = '';
  title = '';

  constructor() {
    makeAutoObservable(this);
  }
}

const playerState = new PlayerState();
export default playerState;
