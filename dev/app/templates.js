(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/auth/auth.template.html',
    '<div class="main-page">\n' +
    '    <div class="auth-page">\n' +
    '        <div class="auth-page-container">\n' +
    '            <ui-view> </ui-view>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/logined/logined.template.html',
    '<div class="main-page">\n' +
    '    <div layout="row">\n' +
    '        <div class="logined-page">\n' +
    '            <div>\n' +
    '                <div ng-include="\'layouts/logined/header/header.template.html\'"></div>\n' +
    '                <div layout-padding>\n' +
    '                    <ui-view> </ui-view>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/add/add.template.html',
    '<md-dialog>\n' +
    '    <div class="panel-widget">\n' +
    '        <h3>Add new task: </h2>\n' +
    '	<form id="myForm" ng-submit="add.addTask()" class="md-whiteframe-4dp">				\n' +
    '		<div layout="column">\n' +
    '		<div layout="row">\n' +
    '		<md-input-container>\n' +
    '			<label>Add new task</label>\n' +
    '			<input type="text" ng-model="add.newName">	\n' +
    '		</md-input-container>\n' +
    '		<md-input-container>\n' +
    '			<label>Enter date</label> \n' +
    '			<md-datepicker ng-model="add.newDate" md-open-on-focus></md-datepicker>\n' +
    '		</md-input-container>\n' +
    '		<md-input-container>\n' +
    '			<label>Add more details</label> \n' +
    '			<input type="text" ng-model="add.newInfo">	\n' +
    '		</md-input-container> \n' +
    '		</div>	\n' +
    '		\n' +
    '		<!-- Upload Cropped Image -->\n' +
    '		<div>\n' +
    '		<input class="ng-hide" type="file" id="fileInput" accept=".jpg, .jpeg, .png">\n' +
    '		<label for="fileInput" class="md-button md-raised">Select an image file</label>\n' +
    '  		<!-- CropArea -->\n' +
    '		<div id="cropArea" class="ng-hide" layout="row">\n' +
    '  		<div class="cropArea">\n' +
    '    		<img-crop image="myImage" result-image="myCroppedImage" area-type="square"></img-crop>\n' +
    '  		</div>\n' +
    '  		<div layout="column" layout-padding>\n' +
    '  			<div >Cropped Image:</div>\n' +
    '  			<div><img ng-src="{{myCroppedImage}}" /></div>\n' +
    '			<md-button ng-click="add.cropImage()" class="md-raised md-primary" layout-padding>Crop image</md-button>\n' +
    '		</div>\n' +
    '		</div>\n' +
    '		</div>\n' +
    '		<!-- End CropArea -->\n' +
    '		<div id="cropedImage" class="ng-hide" layout="row" layout-padding>\n' +
    '			<div>Cropped Image: </div>\n' +
    '			<div><img ng-src="{{add.newImage}}" class="cropped-image"/></div>	\n' +
    '		</div>		\n' +
    '\n' +
    '		<!-- End Upload Cropped Image -->\n' +
    '		\n' +
    '		<div>\n' +
    '			<md-button type="submit" class="btn btn-info">\n' +
    '				<md-icon class="material-icons">add</md-icon>\n' +
    '			</md-button>\n' +
    '			<md-button ng-click="add.cancel()" class="btn btn-delete">Cancel</md-button>\n' +
    '		</div>\n' +
    '		</div>	\n' +
    '	</form>	\n' +
    '</div>\n' +
    '\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/edit/edit.template.html',
    '<md-dialog>\n' +
    '	\n' +
    '<div class="panel-widget">\n' +
    '    <h3>Change the task: </h2>\n' +
    '\n' +
    '	<form id="myForm" ng-submit="edit.editTask(editingTask)" class="md-whiteframe-4dp">				\n' +
    '		<div layout="row">\n' +
    '		<md-input-container>\n' +
    '			<label>Change task</label>\n' +
    '			<input type="text" ng-model="edit.editingTask.name" required>	\n' +
    '		</md-input-container>\n' +
    '		<md-input-container>\n' +
    '			<label>Change date</label> \n' +
    '			<md-datepicker ng-model="edit.editingTask.date" md-open-on-focus></md-datepicker>\n' +
    '		</md-input-container>\n' +
    '		<md-input-container>\n' +
    '			<label>Change details</label> \n' +
    '			<input type="text" ng-model="edit.editingTask.info">	\n' +
    '		</md-input-container> \n' +
    '		</div>	\n' +
    '		<div>Task Image: </div>\n' +
    '		<div id="taskImage" layout="row" layout-padding>\n' +
    '			<div>\n' +
    '			<md-button ng-click="edit.changeImage()" class="md-raised" layout-padding>Change Image</md-button>\n' +
    '			</div>\n' +
    '			<div><img ng-src="{{edit.editingTask.image ? edit.editingTask.image : \'../../../assets/images/no-image-icon.png\'}}" class="cropped-image"/></div>	\n' +
    '			\n' +
    '		</div>	\n' +
    '\n' +
    '		<!-- Upload Cropped Image -->\n' +
    '		<div id="changeImage" class="ng-hide">\n' +
    '			<input class="ng-hide" type="file" id="fileInput" accept=".jpg, .jpeg, .png">\n' +
    '			<label for="fileInput" class="md-button md-raised">Select an image file</label>\n' +
    '			<div  ng-click="edit.canselEditingImage()" class=" md-button md-raised" layout-padding>Cansel</div>\n' +
    '  		<!-- CropArea -->\n' +
    '			<div id="cropArea" class="ng-hide" layout="row">\n' +
    '  			<div class="cropArea">\n' +
    '    			<img-crop image="myImage" result-image="myCroppedImage" area-type="square"></img-crop>\n' +
    '  			</div>\n' +
    '  			<div layout="column" layout-padding>\n' +
    '  				<div >Cropped Image:</div>\n' +
    '  				<div><img ng-src="{{myCroppedImage}}" /></div>\n' +
    '				<md-button ng-click="edit.cropImage()" class="md-raised md-primary" layout-padding>Crop image</md-button>\n' +
    '			</div>\n' +
    '			</div>\n' +
    '		</div>	\n' +
    '		\n' +
    '\n' +
    '		<div id="cropedImage" class="ng-hide" layout="row" layout-padding>\n' +
    '			<div>Cropped Image: </div>\n' +
    '			<div><img ng-src="{{edit.editingTask.image}}" clcropedImageass="cropped-image"/></div>	\n' +
    '		</div>		\n' +
    '\n' +
    '\n' +
    '		<div>\n' +
    '			<md-button type="submit" class="btn btn-info">Ok</md-button>\n' +
    '			<md-button ng-click="edit.cancel()" class="btn btn-delete">Cancel</md-button>	\n' +
    '		</div>		\n' +
    '	</form>	\n' +
    '</div>\n' +
    '\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/home/home.template.html',
    '<div>\n' +
    '    <md-list class="panel-widget">\n' +
    '        <task-item ng-repeat=\'task in home.tasks | filterTasks: home.keyword\' task="task"></task-item>\n' +
    '    </md-list>\n' +
    '    <div layout="row" layout-align="end">\n' +
    '        <md-button ng-click="home.addTask(task)" class="btn btn-add">\n' +
    '            <md-icon class="material-icons">add</md-icon>\n' +
    '        </md-button>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/logined/header/header.template.html',
    '<div ng-controller="headerController as header">\n' +
    '    <md-toolbar id="toolbar">\n' +
    '        <div class="md-toolbar-tools">\n' +
    '            <section layout="row" layout-align="center start" flex>\n' +
    '                <div layout-align="start center" class="layout-fill layout-align-start-center">\n' +
    '                    <span>\n' +
    '                    <h3 md-truncate ui-sref="home"> My To Do List</h3>\n' +
    '                    <h1> {{header.userEmail}} </h1>  \n' +
    '                    </span>\n' +
    '                </div>\n' +
    '            </section>\n' +
    '            <section layout="row" layout-align="end center" flex>\n' +
    '                <form>\n' +
    '                    <input placeholder="Search task..." type="text" ng-model="header.keyword" ng-model-options="{debounce : 1000}" ng-change=\'header.setKeyword()\'>\n' +
    '                </form>\n' +
    '                <md-button class="btn btn-sign-out" ng-click="header.signOut()">\n' +
    '                    <md-icon class="material-icons">exit_to_app </md-icon>\n' +
    '                </md-button>\n' +
    '            </section>\n' +
    '        </div>\n' +
    '    </md-toolbar>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/auth/sign-in/sign-in.template.html',
    '<h2 class="sign-title">Log into Your account</h2>\n' +
    '<form id="sign-In-Form" ng-submit="signIn.signIn(signIn.email, signIn.password)" class="sign-box">\n' +
    '    <div layout="column" layout-align="center">\n' +
    '        <div class="sign-input-box">\n' +
    '            <md-input-container class="md-block" flex-gt-xs>\n' +
    '                <label>\n' +
    '                    <md-icon class="material-icons">email</md-icon> E-mail address</label>\n' +
    '                <input type="email" ng-model="signIn.email">\n' +
    '            </md-input-container>\n' +
    '            <md-input-container class="md-block" flex-gt-xs>\n' +
    '                <label>\n' +
    '                    <md-icon class="material-icons">lock</md-icon> Password</label>\n' +
    '                <input type="password" ng-model="signIn.password">\n' +
    '            </md-input-container>\n' +
    '        </div>\n' +
    '        <div layout="row">\n' +
    '            <md-button class="btn btn-sign" type="submit"> Sign in </md-button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '<div class="sign-box sign-bottom-box">\n' +
    '    New to us? <a ui-sref="sign-up">Sign Up</a>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/auth/sign-up/sign-up.template.html',
    '<h2 class="sign-title">Register new Account</h2>\n' +
    '<form name="signUpForm" id="sign-Up-Form" ng-submit="signUp.signUp(signUpForm.$valid)" class="sign-box">\n' +
    '    <div layout="column">\n' +
    '        <div class="sign-input-box">\n' +
    '            <md-input-container class="md-block" flex-gt-xs>\n' +
    '                <label>\n' +
    '                    <md-icon class="material-icons">email</md-icon> E-mail address</label>\n' +
    '                <input name="email" type="email" ng-model="signUp.email">\n' +
    '            </md-input-container>\n' +
    '            <md-input-container class="md-block" flex-gt-xs>\n' +
    '                <label>\n' +
    '                    <md-icon class="material-icons">lock</md-icon> Password</label>\n' +
    '                <input name="password" type="password" ng-model="signUp.password">\n' +
    '            </md-input-container>\n' +
    '            <md-input-container class="md-block" flex-gt-xs>\n' +
    '                <label>\n' +
    '                    <md-icon class="material-icons">lock</md-icon> Confirm Password</label>\n' +
    '                <input name="confirmPassword" type="password" ng-model="signUp.confirmPassword" compare-to="signUp.password">\n' +
    '            </md-input-container>\n' +
    '        </div>\n' +
    '        <div class="sign-message"> {{signUp.message}} </div>\n' +
    '        <div layout="row">\n' +
    '            <md-button class="btn btn-sign" type="submit"> Sign up </md-button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '<div class="sign-box sign-bottom-box">\n' +
    '    Already have account? <a ui-sref="sign-in">Sign In</a>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/home/task-item/task-item.template.html',
    '<md-list-item>\n' +
    '    <section layout="column" layout-fill>\n' +
    '        <div layout="row">\n' +
    '            <!-- <md-checkbox class="checkbox" ng-model="task.done" aria-label="Task Done"></md-checkbox> -->\n' +
    '            <div layout-padding>\n' +
    '                <img ng-src="{{itemCtrl.task.image ? itemCtrl.task.image : \'../../../assets/images/no-image-icon.png\'}}" class="task-icon">\n' +
    '            </div>\n' +
    '            <div>\n' +
    '                <h3> {{itemCtrl.task.name}} </h3>\n' +
    '                <p> {{itemCtrl.task.date | date: "dd MMMM yyyy"}} </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <span flex></span>\n' +
    '        <div>\n' +
    '            <md-button ng-click="itemCtrl.showInfo(itemCtrl.task)" class="btn btn-info">\n' +
    '                <md-icon class="material-icons">info</md-icon>\n' +
    '            </md-button>\n' +
    '            <md-button ng-click=\'itemCtrl.editTask(event, itemCtrl.task)\' class="btn btn-edit">\n' +
    '                <md-icon class="material-icons">mode_edit</md-icon>\n' +
    '            </md-button>\n' +
    '            <md-button ng-click="itemCtrl.deleteTask()" class="btn btn-delete">\n' +
    '                <md-icon class="material-icons">delete_forever</md-icon>\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '    <md-divider></md-divider>\n' +
    '</md-list-item>');
}]);
})();
