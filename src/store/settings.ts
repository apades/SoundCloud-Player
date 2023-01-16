import { makeAutoObservable } from 'mobx';

export default class Settings {
  trackdisplay = '%title% by %artist%';
  themecolor = '#FF5500';
  bgcolor = '#3F3F3F';
  twitter = '%title% By %artist% %url%';
  copy = '%title% By %artist% %url%';
  font = 'Arial';
  'font-size' = '12px';
  theme = 'default';
  duration = 5000;
  pause = 5000;
  duplication = false;
  'dropdown-animation' = true;
  'display-artwork' = true;
  startpage = 'https=//soundcloud.com';
  darkmode_automation = {
    enabled: false,
    'range-start': [17, 0],
    'range-end': [5, 0],
  };
  'simple-label' = false;
  'popout-dupe' = true;
  'back-and-forth' = false;
  apply_marquee_to_default = false;

  constructor() {
    makeAutoObservable(this);
  }
}
