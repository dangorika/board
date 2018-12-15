export default class Show {
  constructor(el) {
    this.show = $(el);
    this.button = this.show.find('.js-s-button');
    this.content = this.show.find('.js-s-content');
    this.height = this.content.outerHeight(true);
    this.startHeight = this.content.children().first().outerHeight(true)*2 + 36;
    this.currentText = this.button.html();
    this._init();
  }

  _init() {
    this._close();
    this.button.on('click', this._toggle.bind(this));
  }

  _close() {
    this.content.animate({
      height: this.startHeight
    });
  }

  _toggle(e) {
    e.preventDefault();

    this.targetButton = $(e.currentTarget);
    this.targetS = this.targetButton.closest('.js-s').find('.js-s-content');
    this.targetS.toggleClass('is-open');
    this.newText = this.targetButton.data('change-text');
    if (this.targetS.hasClass('is-open')) {
      this.targetButton.html(this.newText);
      this.targetS.animate({
        height: this.height
      }, 300);
    } else {
      this.targetButton.html(this.currentText);
      this.targetS.animate({
        height: 592
      }, 300);
    }
  }
}
