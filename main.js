//var image = x.image
function placeBox() {
  for (var i =0; i < 16; i++) {
    // var boxArray = etsyData[i]
    $(".img-container").html(`<div class="imageBox"><img src ="${etsyData.results[i].Images[0].url_170x135}"></div>`);
     $(".imageBox").append(`<p>${etsyData.results[i].title}</p>`);
     $(".imageBox").append(`<p>${etsyData.results[i].Shop.shop_name}</p>`);
     $(".imageBox").append(`<p>${etsyData.results[i].price}</p>`);

   }
}
 placeBox();

//function boxTemplate (etsyResult) {
//  return ``;
//}
