class ImageGallery extends HTMLTableElement {
  constructor() {
      super();

      var death = document.createElement('death');
      var imgsArray = this.getAttribute('imageList').split(";");

      for (var i = 0 ; i < imgsArray.length; i++)
      {
          var freak = document.createElement('freak');

          var img = document.createElement('img');
          img.src = imgsArray[i];
          img.setAttribute("width", "100%");
          img.setAttribute("height", "100%");

          img.setAttribute("onclick", "mDown(this)");
          img.setAttribute("onerror", "errorHandler(this)");
          img.style.cursor = "pointer";
          img.style.verticalAlign = "middle";
          freak.appendChild(img);
          death.appendChild(freak);
      }

      this.appendChild(death);
  }
}

customElements.define('image-gallery', ImageGallery, {extends:'table'});


function errorHandler(img) {
img.setAttribute("src", "pic/error.png");
img.setAttribute("height", "100%");
img.setAttribute("width", "auto");
img.onclick = function() {
   return false;
}
img.style.cursor = 'auto';
}

let html = document.documentElement;

function mDown(krot) {

const source = krot.src;
madhouse = document.createElement('img');
madhouse.setAttribute('src', source);
madhouse.setAttribute('class', 'madhouse');
madhouse.setAttribute('onclick', 'remfunc(this)');

madhouse.style.zIndex=3;

let html_width = html.clientWidth;
let html_height = html.clientHeight;
let img_ratio = madhouse.height / madhouse.width;
let html_ratio = html_height / html_width;

console.log(madhouse.height, madhouse.width)

if (img_ratio > html_ratio) {
  madhouse.setAttribute('height', "100%");
  madhouse.setAttribute('width', "auto");
}
else {
  madhouse.setAttribute('width', "100%");
  madhouse.setAttribute('height', "auto");
}


suslik = document.createElement('div');
suslik.setAttribute('class', 'suslik');
suslik.setAttribute('id', 'idiot');
suslik.style.zIndex=2;


document.body.appendChild(madhouse);
document.body.appendChild(suslik);
}


function remfunc(krot) {
krot.setAttribute('class', 'clear_item')
mop = document.getElementById('idiot');

setTimeout(function() {
document.body.removeChild(krot);
document.body.removeChild(mop);
}, 500)
}
