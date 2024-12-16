const output = document.querySelector("#output");

let arr = [1, 2, 3, 4];

const wait = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time * 1000);
  });
};

wait(1)
  .then(() => {
    arr = arr.filter((ele) => !(ele & 1));
    let html = ``;
    for (let i = 0; i < arr.length - 1; i++) {
      html += `${arr[i]},`;
    }
    html += `${arr[arr.length - 1]}`;
    html = `<p>` + html + `</p>`;
    output.insertAdjacentHTML("afterbegin", html);
    return wait(2);
  })
  .then(() => {
    output.removeChild(output.firstElementChild);
    arr = arr.map((ele) => ele * 2);
    let html = ``;
    for (let i = 0; i < arr.length - 1; i++) {
      html += `${arr[i]},`;
    }
    html += `${arr[arr.length - 1]}`;
    html = `<p>` + html + `</p>`;
    output.insertAdjacentHTML("afterbegin", html);
  });
