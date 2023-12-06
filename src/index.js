import './CSS/style.css';
// Load all assets
require.context('../src/assets', true);
import { actionHamburgerMenu, openHamburgerMenuLink, hideHamburgerMenuOnResize } from './burger-menu';

actionHamburgerMenu();
openHamburgerMenuLink();
hideHamburgerMenuOnResize();
