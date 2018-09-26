import { WIN, DETECT } from './_global';

export default class Video {
  constructor(el) {
    this.video = $(el);
    if (this.video[0]) this._init();
  }

  _init() {
    console.log(DETECT.os());
    if (DETECT.os() !== 'iOS') {
      WIN.on('load', e => {
        const src = this._getSource();
        this.video.attr('src', src);
      });
    }
  }

  _getSource() {
    return this.video.data('src');
  }
}
