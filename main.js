
  //function placeBox() {


    for (var i =0; i < 16; i++) {
      var myHtml = boxTemplate(product);
      $(".img-container").append(`<div class="imageBox"><img src ="${etsyData.results[i].Images[0].url_170x135}"></div>`);

  function boxTemplate (product) {
    return `
    <div class="imageBox">
    <img src="${product.Images[0].url_170x135}" />
    <p>${product.title}</p>
    <p>${product.Shop.shop_name}</p>
    <p>${product.price}</p>
  </div>
  `;
}
}
//}
//}
//placeBox(myHtml)
