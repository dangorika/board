import 'jquery-validation';

export default class Validator {
  constructor(form) {
    this.form = $(form);
    this.rules = {
      name: {
        minlength: 2,
        required: true
      },
      phone: {
        required: true,
        digits: true
      }
    };

    this.messages = {
      name: {
        required: this.form.find('[name="name"]').data('required'),
        minlength: this.form.find('[name="name"]').data('minlength')
      },
      phone: {
        required: this.form.find('[name="phone"]').data('required'),
        digits: this.form.find('[name="phone"]').data('digits')
      }
    };

    this._init();
  }

  _init() {
    console.log(this.form);

    this._validate();
  }

  _validate() {
    this.validator = this.form.validate({
      rules: this.rules,
      messages: this.messages,
      submitHandler: form => {
        $.ajax({
          type: $(form).attr('method'),
          url: $(form).attr('action'),
          data: $(form).serialize(),
          success: this._onSuccess(form)
        });
      }
    });
  }

  _onSuccess(form) {
    this.success = $(form).find('.js-success');
    this.success.addClass('is-visible');
    setTimeout(() => {
      this.success.removeClass('is-visible');
    }, 3000);
  }
}
