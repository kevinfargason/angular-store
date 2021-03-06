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

(function() {
  var app = angular.module('store-directives', []);
  
   app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "partial/product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "partial/product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "partial/product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "partial/product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "partial/product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
})();
//# sourceMappingURL=app.js.map