const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// "Document Ready"
(function() {
  console.log('Ready');
})();

function addEvent(selector, event, callback) {
  $$(selector).forEach(function(element) {
    element.addEventListener(event, callback);
  });
}

function addClass(selector, className) {
  $$(selector).forEach(function(element) {
    element.classList.add(className);
  });
}

function removeClass(selector, className) {
  $$(selector).forEach(function(element) {
    element.classList.remove(className);
  });
}

function toggleClass(selector, className) {
  $$(selector).forEach(function(element) {
    element.classList.toggle(className);
  });
}

function switchClass(selector, prevClassName, nextClassName) {
  $$(selector).forEach(function(element) {
    element.classList.remove(prevClassName);
    element.classList.add(nextClassName);
  });
}

function hasClass(selector, className) {
  return Array.prototype.indexOf.call($(selector).classList, className) > -1;
}

function toggle(selector) {
  const el = $(selector);
  return '' === el.style.display
    ? (el.style.display = 'none')
    : (el.style.display = '');
}
