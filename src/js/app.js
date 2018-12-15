import 'svgxuse';

import Header from './Header';
import Video from './Video';
import Modal from './Modal';
import Accordion from './Accordion';
import Show from './Show';
import './scrollTo';

new Header();
new Video('#bg-video');
new Modal();
$('.js-a').each((index, a) => new Accordion(a));
new Show('.js-s');
