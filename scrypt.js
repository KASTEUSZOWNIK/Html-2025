document.addEventListener('DOMContentLoaded', function () {
   const btn = document.getElementById('myButton');
   if (btn) {
      btn.addEventListener('click', myFunction);
   }
});

function myFunction() {
   document.body.classList.toggle('dark-mode');
}