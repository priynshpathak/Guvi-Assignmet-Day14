var count = 10;

function callBackHell(){
let timer = setTimeout(() => {
  console.log(count);
  document.getElementById("child").innerHTML = count;
  count--;
  console.log(count);
  document.getElementById("child").innerHTML = count;
  setTimeout(() => {
    count--;
    console.log(count);
    document.getElementById("child").innerHTML = count;
    setTimeout(() => {
      count--;
      console.log(count);
      document.getElementById("child").innerHTML = count;
      setTimeout(() => {
        count--;
        console.log(count);
        document.getElementById("child").innerHTML = count;
        setTimeout(() => {
          count--;
          console.log(count);
          document.getElementById("child").innerHTML = count;
          setTimeout(() => {
            count--;
            console.log(count);
            document.getElementById("child").innerHTML = count;
            setTimeout(() => {
              count--;
              console.log(count);
              document.getElementById("child").innerHTML = count;
              setTimeout(() => {
                count--;
                console.log(count);
                document.getElementById("child").innerHTML = count;
                setTimeout(() => {
                  count--;
                  console.log(count);
                  document.getElementById("child").innerHTML = count;
                  setTimeout(() => {
                    count--;
                    console.log(count);
                    document.getElementById("child").innerHTML = count;
                    setTimeout(() => {
                      document.getElementById("child").innerHTML = "Times up!!!";
                      count=10;
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
};
