const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// "Document Ready"
(function() {
  console.log('Ready');
})();

function addEvent(selector: string, event: Object, callback: Function) {
  $$(selector).forEach(function(element) {
    element.addEventListener(event, callback);
  });
}

function addClass(selector: string, className: string) {
  $$(selector).forEach(function(element) {
    element.classList.add(className);
  });
}

function removeClass(selector: string, className: string) {
  $$(selector).forEach(function(element) {
    element.classList.remove(className);
  });
}

function toggleClass(selector: string, className: string) {
  $$(selector).forEach(function(element) {
    element.classList.toggle(className);
  });
}

function switchClass(
  selector: string,
  prevClassName: string,
  nextClassName: string
) {
  $$(selector).forEach(function(element) {
    element.classList.remove(prevClassName);
    element.classList.add(nextClassName);
  });
}

function hasClass(selector: string, className: string) {
  return Array.prototype.indexOf.call($(selector).classList, className) > -1;
}

function toggle(selector: string) {
  const el = $(selector);

  if (el.style.display === '') {
    el.style.display = 'none';
  } else {
    el.style.display = '';
  }
}
