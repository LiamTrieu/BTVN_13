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
    .when("/sinh-vien/add", {
      templateUrl: "pages/sinh-vien.html",
      controller: addSV,
    })
    .when("/sinh-vien/:maSV", {
      templateUrl: "pages/sinh-vien.html",
      controller: detailSV,
    })
    .when("/sinh-vien/:maSV/edit", {
      templateUrl: "pages/sinh-vien.html",
      controller: updateSV,
    })
    .when("/sinh-vien/:maSV/remove", {
      templateUrl: "pages/sinh-vien.html",
      controller: removeSV,
    })
    .when("/gioi-thieu", { templateUrl: "pages/gioi-thieu.html" })
    .otherwise("/trang-chu");
});
