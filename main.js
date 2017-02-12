
  function placeBox() {

    for (var i =0; i < 16; i++) {
      var product = etsyData.results[i];
      var etsyBoxes = boxTemplate(product);
      // console.log(etsyBoxes);
       $(".container").append(etsyBoxes)
  }

  function boxTemplate(product) {

      return `
      <div class="productBox"><div class="imageBox">
      <img src="${product.Images[0].url_170x135}"</</div>
      <p>${product.title}</p>
      <p>${product.Shop.shop_name}
      ${product.price}</p>
      </div>`
   }
  }
   placeBox();







  //  function placeBox() {
   //
  //    for (var i =0; i < 16; i++) {
  //      var product = etsyData.results[i];
  //      var etsyBoxes = boxTemplate(product);
  //      // console.log(etsyBoxes);
  //       $(".img-container").append(etsyBoxes)
  //  }
   //
  //  function boxTemplate(product) {
   //
  //      return `
  //      <div class="imageBox">;
  //      <img src="${product.Images[0].url_170x135}" />;
  //      <p>${product.title}</p>;
  //      <p>${product.Shop.shop_name}</p>;
  //      <p>${product.price}</p>;
  //      </div>`;
  //   }
  //  }
  //   placeBox();
