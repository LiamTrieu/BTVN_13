window.trangChuCtrl = function ($rootScope, $http) {
  $http.get(apiSV).then(function (response) {
    $rootScope.dsSinhVien = response.data;
  });
};
