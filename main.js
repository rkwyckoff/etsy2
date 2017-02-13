
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
      <img class="imageSize" src="${product.Images[0].url_170x135}"</</div>
      <p>${product.title}</p>
      <p>${product.Shop.shop_name}
      ${product.price}</p>
      </div>`
   }
  }
   placeBox();

//next set of functions
// 1) when hover over productBox, create and display ptag of url at bottom of page, combined
// listing id and title
// 2)create ptag within productBox with title
// 3)create div within lproductBox to display heart
// 4) create div "       "         to display list image
//$( "container" ).hover( function() {
    //   $( this ).append( $( "<span> TEST</span>" ) );
    //  }, function() {
    //         $( this ).find( "span:last" ).remove();
    //       }
    //     );

// //function displayItem () {
//   $( "container" ).hover(
//     function() {
//       $( this ).append( $( "<span> TEST</span>" ) );
//     }, function() {
//       $( this ).find( "span:last" ).remove();
//     }
//   );
//   $( "container.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });
//
// $( selector ).hover( handlerIn, handlerOut )
//
//
// //     var target = $(event.target)
// //     var product = etsyData.results[0]
// //     var hoverInfo = hoverTemplate(product)
// //     $(".container").append(hoverInfo);
// //   }
// //     $(".container").addClass("hover")
// //     //$(".section").hover(hoverProduct);
// //     function hoverTemplate(product) {
// //
// //         return `
//         <div class="productBox">
//         <p>${product.title}</p>
//
//         </div>`
//
// }
// hoverProduct(hover)
//
// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span:last" ).remove();
//   }
// );
//
//
//
//
// function openSection (event) {
//
//     var target = $(event.target).parent(".section");
//     $(".section").removeClass("open");
//     target.addClass("open");
//     console.log("i'm working" );
// }
// $(".section").click(openSection);
// $(".section1").removeClass("open")
//
// console.log("i'm working" );
//
//
//
//
//   //  function placeBox() {
//    //
//   //    for (var i =0; i < 16; i++) {
//   //      var product = etsyData.results[i];
//   //      var etsyBoxes = boxTemplate(product);
//   //      // console.log(etsyBoxes);
//   //       $(".container").append(etsyBoxes)
//   //  }
//    //
//   //  function boxTemplate(product) {
//    //
//   //      return `
//   //      <div class="productBox"><div class="imageBox">
//   //      <img src="${product.Images[0].url_170x135}"</</div>
//   //      <p>${product.title}</p>
//   //      <p>${product.Shop.shop_name}
//   //      ${product.price}</p>
//   //      </div>`
//   //   }
//   //  }
//   //   placeBox();
