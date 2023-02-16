window.sinhVienCtrl = function ($http, $rootScope) {
  $http.get(apiSV).then(function (response) {
    $rootScope.dsSinhVien = response.data;
  });
};
window.detailSV = function ($http, $rootScope, $scope, $routeParams) {
  $http.get(apiSV).then(function (response) {
    $rootScope.dsSinhVien = response.data;
  });

  $http.get(`${apiSV}/${$routeParams.id}`).then(function (response) {
    $scope.detailSV = response.data;
  });
};
