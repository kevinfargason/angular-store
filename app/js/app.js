(function () {

   var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', [ '$http', function($http){
    var store = this;
    store.products = [];
    var jsonProducts = $http.get('data/store-products.json');
    jsonProducts.success(function(data){
    store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

}());