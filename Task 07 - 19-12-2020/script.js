let h = document.getElementById("h1");
let msg = "Second(s) remaining - ";
let gameOver = "Boom.... game over...";
let count = 10;

// CALL BACK HELL - TIMER TASK
setTimeout(function () {
  h.innerText = msg + count--; //10
  setTimeout(function () {
    h.innerText = msg + count--; //09
    setTimeout(function () {
      h.innerText = msg + count--; //08
      setTimeout(function () {
        h.innerText = msg + count--; //07
        setTimeout(function () {
          h.innerText = msg + count--; //06
          setTimeout(function () {
            h.innerText = msg + count--; //05
            setTimeout(function () {
              h.innerText = msg + count--; //04
              setTimeout(function () {
                h.innerText = msg + count--; //03
                setTimeout(function () {
                  h.innerText = msg + count--; //02
                  setTimeout(function () {
                    h.innerText = msg + count--; //01
                    setTimeout(function () {
                      h.innerText = gameOver;
                      document.body.style.backgroundColor = "red";
                      document.body.style.color = "white";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
