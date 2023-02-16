var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/trang-chu", {
      templateUrl: "pages/trang-chu.html",
      controller: trangChuCtrl,
    })
    .when("/sinh-vien", {
      templateUrl: "pages/sinh-vien.html",
      controller: sinhVienCtrl,
    })
    .when("/sinh-vien/:id", {
      templateUrl: "pages/sinh-vien.html",
      controller: detailSV,
    })
    .when("/gioi-thieu", { templateUrl: "pages/gioi-thieu.html" })
    .otherwise("/trang-chu");
});
