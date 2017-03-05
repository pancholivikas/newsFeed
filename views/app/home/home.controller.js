(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'getCartDetailsService'];
    /* @ngInject */
    function HomeController($q, getCartDetailsService) {
        var vm = this;
        activate();
        vm.articles = [];
        vm.id;

        function activate() {
            var promises = [getCartDetails()];
            return $q.all(promises).then(function() {
                // write code for completion of all the ajax calls.
                console.log(vm.articles);
            });
        }

        function getCartDetails() {
            return getCartDetailsService.getCartDetails().then(function(data) {
                vm.articles = data;
            });
        }

        window.allowDrop = function(ev) {
            ev.preventDefault();
        }

        window.drag = function(ev, id) {
            ev.dataTransfer.setData(id, ev.target.id);
            vm.id = id;
            console.log(id);
        }

        window.drop = function(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData(vm.id);
            ev.target.appendChild(document.getElementById(data));
        }
    }

})();