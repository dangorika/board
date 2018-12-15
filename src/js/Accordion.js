export default class Accordion {
  constructor(el) {
    this.accordion = $(el);
    this.title = this.accordion.find('.js-a-title');
    this.content = this.accordion.find('.js-a-content');
    this._init();
  }

  _init() {
    this._showAll();
    this.title.on('click', this._toggle.bind(this));
  }

  _showAll() {
    this.accordion.addClass('is-active');
    $('.js-a-content').slideDown(400);
  }

  _toggle(e) {
    this.targetATitle = $(e.currentTarget).closest('.js-a');
    this.targetAContent = this.targetATitle.find('.js-a-content');
    this.targetATitle.toggleClass('is-active');
    this.targetAContent.slideToggle(400);
  }
}
