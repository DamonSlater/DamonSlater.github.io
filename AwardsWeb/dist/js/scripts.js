/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your projecta

function DisplayOnClick() {
    var barcodes = document.getElementsByClassName("hh-card");

    for (let i = 0; i < (barcodes.length); i++) {
      barcodes[i].addEventListener("click", function(t) {
        var vis = this.nextSibling.nextSibling.style.display;
        if (this.nextSibling.nextSibling.style.display == "none") {
          this.nextSibling.nextSibling.style.display = "block";
        } else {
          this.nextSibling.nextSibling.style.display = "none";
        }
    
      });
    }
  }