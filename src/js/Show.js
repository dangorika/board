export default class Show {
  constructor(el) {
    this.show = $(el);
    this.button = this.show.find('.js-s-button');
    this.currentText = this.button.html();
    this._init();
  }

  _init() {
    this.button.on('click', this._toggle.bind(this));
  }

  _toggle(e) {
    e.preventDefault();

    this.targetButton = $(e.currentTarget);
    this.targetS = this.targetButton.closest('.js-s').find('.js-s-content');
    this.targetS.toggleClass('is-open');
    this.newText = this.targetButton.data('change-text');
    console.log(this.newText);
    this.targetS.hasClass('is-open') ? this.targetButton.html(this.newText) : this.targetButton.html(this.currentText);
  }
}
