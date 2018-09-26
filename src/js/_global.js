const MobileDetect = require('mobile-detect');

export const WIN = $(window);
export const DOC = $(document);
export const BODY = $('body');
export const HEADER = $('.js-header');
export const BURGER = $('.js-burger');

export const BREAKPOINTS = {
  tabletLG: window.matchMedia('(max-width: 1023px)')
};

export const DETECT = new MobileDetect(window.navigator.userAgent);
