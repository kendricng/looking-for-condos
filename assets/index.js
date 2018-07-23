// Jquery Style
let s$ = function(selector) {
  let doc = window.document;
  let el =  (typeof selector === 'string') ? doc.querySelector(selector) : false ;
  return el != null ? el : false;
}; 

(function currentYear() {
  let year = new Date().getFullYear();
  s$('.current__year').innerHTML = year;
})();

(function toggleMenu() {

  let menu = s$('.menu__drop');
  let overlay = s$('.menu__overlay');
  let hamburger = s$('.menu__toggle');

  function menuStatus() {
    let menu__class = menu.classList;
    let overlay__class = overlay.classList;
    let x = 'menu__open';
    let y = 'menu__hide'
    let a = 'overlay';
    let open = menu__class.contains(x);
    let closed = (menu__class.contains(y) || open === false) ? true : false;
    let status = [a, x, y, closed, menu__class, overlay__class];
    return status;
  }

  function closeMenu() {
    let s = menuStatus();
    s[4].add(s[2])
    s[4].remove(s[1]);
    s[5].remove(s[0]);
  }

  function openMenu() {
    let s = menuStatus();
    s[4].add(s[1])
    s[4].remove(s[2]);
    s[5].add(s[0]);
  }

  function modifyMenu() {
    var z = menuStatus();
    let closed = z[3];
    closed ? openMenu() : closeMenu();
  }

  hamburger.addEventListener('click', function () {
    modifyMenu();
  });

  overlay.addEventListener('click', function(event) {
    event.target == this ? closeMenu() : false ;
  });

})();