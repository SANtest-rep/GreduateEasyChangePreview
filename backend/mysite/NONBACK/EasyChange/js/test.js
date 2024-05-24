function toggleItem(elem) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        let current = this;
        for (let i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('active');
          }  else {
            current.classList.add('active');
            // console.log("Добавил active", elem[i]);
          }
        }
        e.preventDefault();
      });
    };
  }
  toggleItem(document.querySelectorAll('.filters'));



a = document.getElementById('test').clientHeight;
alert(a);




