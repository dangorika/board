import { HEADER, DOC, BREAKPOINTS, BODY } from './_global';

export default class Header {
  constructor() {
    this.burger = HEADER.find('.js-burger');

    this._init();
  }

  _init() {
    this._addOpenListener();

    this._onResize(BREAKPOINTS.tabletLG);
    BREAKPOINTS.tabletLG.addListener(this._onResize.bind(this));
  }

  _addOpenListener() {
    this.burger.on('click', e => {
      e.preventDefault();

      $(e.currentTarget).toggleClass('is-active');
      HEADER.toggleClass('is-open');
      BODY.toggleClass('is-fixed');
    });
  }

  _onResize(point) {
    if (point.matches) {
      return;
    }
    else {
      this.burger.removeClass('is-active');
      HEADER.removeClass('is-open');
    }
  }
}
