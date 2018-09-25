import { WIN } from './_global';

export default class Video {
  constructor(el) {
    this.video = $(el);
    if (this.video[0]) this._init();
  }

  _init() {
    WIN.on('load', e => {
      console.log(this.video);
      const src = this._getSource();
      this.video.attr('src', src);
    });
  }

  _getSource() {
    return this.video.data('src');
  }
}
