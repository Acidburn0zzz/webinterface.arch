angular.module('app')
.controller('HeaderNavController', ['$scope', '$location', '$filter',
  function ($scope, $location, $filter) {
    $scope.showWizard = false;

    $scope.medias = [{
      hash: '/movies/recents',
      label: 'Movies',
      matchRegExp : /movie.*$/
    }, {
      hash: '/tvshows/recents',
      label: 'TV Shows',
      matchRegExp : /.*show.*$/
    }, {
      hash: '/musics/artists/all',
      label: 'Musics',
      matchRegExp : /music.*$/
    }, {
      hash: '/settings',
      label: 'Settings',
      matchRegExp : /settings.*$/
    }];

    $scope.isCurrent = function (matchRegExp) {
      return $location.path().match(matchRegExp) !== null;
    };

    $scope.toggleWizard = function () {
      $scope.showWizard = !$scope.showWizard;
    }
  }
]);
