/*&// &======================== IMPORT ========================& //&*/
import './utils.js';
import './selects.js';
import './modals.js';
import './accordion.js';

// eslint-disable-next-line no-undef
flatpickr('.calendar__input', {
  disableMobile: "true",
  appendTo: document.querySelector('.calendar__input').parentElement,
  locale: {
    firstDayOfWeek: 1,
    locale: "ru",
  },
  altInput: true,
  dateFormat: "d-m-Y",
  altFormat: "d.m.Y",
  inline: true,
  mode: "range",
  enableTime: true,
  weekNumbers: true,
  // minDate: "today"
  // nextArrow: nextArrow,
  // prevArrow: prevArrow,
});