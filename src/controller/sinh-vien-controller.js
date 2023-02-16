window.sinhVienCtrl = function ($http, $rootScope) {
  $http.get(apiSV).then(function (response) {
    $rootScope.dsSinhVien = response.data;
  });
  $http.get(apiLoai).then(function (response) {
    $rootScope.loaiSv = response.data;
  });
  $rootScope.detailSV = {
    ten: "",
    canNang: 0,
    loai: "loai 1",
    gioiTinh: true,
    chuyenNganh: "",
    soThich: [],
    maSV: "",
    id: "",
  };
  $rootScope.isChecked = [];
  $rootScope.getCheckbox = function (value) {
    let index = $rootScope.isChecked.indexOf(value);
    if (index !== -1) {
      $rootScope.isChecked.splice(index, 1);
    } else {
      $rootScope.isChecked.push(value);
    }
  };
};
window.detailSV = function ($http, $rootScope, $routeParams, $scope) {
  $rootScope.index = -1;
  $scope.maSVSelect = $routeParams.maSV;
  $http.get(apiSV).then(function (response) {
    $rootScope.dsSinhVien = response.data;
    $rootScope.dsSinhVien.forEach((e) => {
      if (e.maSV == $routeParams.maSV) {
        $rootScope.index = $rootScope.dsSinhVien.indexOf(e);
      }
    });
    $http
      .get(apiSV + "/" + $rootScope.dsSinhVien[$rootScope.index].id)
      .then(function (response) {
        $rootScope.isChecked = response.data.soThich;
        $rootScope.detailSV = response.data;
      });
  });
  $http.get(apiLoai).then(function (response) {
    $rootScope.loaiSv = response.data;
  });
};

window.addSV = function ($http, $rootScope, $location) {
  $rootScope.detailSV.soThich = $rootScope.isChecked;
  $http.post(apiSV, $rootScope.detailSV).then(function (response) {
    $rootScope.dsSinhVien = response.data;
    alert("Them thanh cong");
    $location.path("sinh-vien");
  });
};
window.updateSV = function ($http, $rootScope, $routeParams, $location) {
  $rootScope.detailSV.soThich = $rootScope.isChecked;
  $rootScope.dsSinhVien.forEach((e) => {
    if (e.maSV == $routeParams.maSV) {
      $http
        .put(`${apiSV}/${e.id}`, $rootScope.detailSV)
        .then(function (response) {
          $rootScope.dsSinhVien = response.data;
          alert("Update thanh cong");
          $location.path("sinh-vien");
        });
    }
  });
};
window.removeSV = function ($http, $rootScope, $routeParams, $location) {
  $rootScope.dsSinhVien.forEach((e) => {
    if (e.maSV == $routeParams.maSV) {
      $http.delete(`${apiSV}/${e.id}`).then(function (response) {
        $rootScope.dsSinhVien = response.data;
        alert("Xoa thanh cong");
        $location.path("sinh-vien");
      });
    }
  });
};
