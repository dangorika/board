import { BODY } from './_global';

export default class Modal {
  constructor(el) {
    this.modal = $('[data-target-modal]');
    this.button = $('[data-modal]');
    this.close = this.modal.find('.js-modal-close');
    this._init();
  }

  _init() {
    this.button.on('click', this._open.bind(this));
    this.close.on('click', this._close.bind(this));
  }

  _open(e) {
    this.targetModal = $(e.currentTarget).data('modal');
    console.log(this.targetModal);
    $(`[data-target-modal="${this.targetModal}"]`).addClass('is-open');
    BODY.addClass('is-fixed');
  }

  _close(e) {
    this.openedModal = $(e.currentTarget).closest('[data-target-modal]');
    this.openedModal.removeClass('is-open');
    BODY.removeClass('is-fixed');
  }
}
