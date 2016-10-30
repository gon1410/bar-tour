angular.module('app.controllers', [])

.controller('increBleListaDeBolichesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('conectateCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {

	this.login = function(){
		FB.login(function(response){
			if (response.status === 'connected') {
				console.log($stateParams);
				$state.go('tabsController.increBleListaDeBoliches');
				testAPI();

        //$state.go('tabsController.increBleListaDeBoliches');
    } else {
    	console.log('culo');
    	console.log('asdasdasd');
    }

});
		$state.go('tabsController.increBleListaDeBoliches');
	};

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '160092111073157',
			xfbml      : true,
			version    : 'v2.8'
		});

		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				console.log($stateParams);
				$state.go('tabsController.increBleListaDeBoliches');
				testAPI();

        //$state.go('tabsController.increBleListaDeBoliches');
    } else {
    	console.log('culo');
    }
});
	};
  // Load the SDK asynchronously
  (function(d, s, id){
  	var js, fjs = d.getElementsByTagName(s)[0];
  	if (d.getElementById(id)) {return;}
  	js = d.createElement(s); js.id = id;
  	js.src = "//connect.facebook.net/en_US/sdk.js";
  	fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
  	FB.getLoginStatus(function(response) {
  		statusChangeCallback(response);
  	});
  }




  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.





  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
  	console.log('Welcome!  Fetching your information.... ');
  	FB.api('/me', function(response) {
  		console.log('Successful login for: ' + response.name);
  	});
  }

}])

.controller('bolichNPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('faltaLugarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('mapaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
