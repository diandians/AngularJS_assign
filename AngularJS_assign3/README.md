# AngularJS_assign3

This is practice repo for developing front-end using AngularJS

Model3-Assignment: [Narrow Down Your Chinese Menu Choice](http://www.qiufengzhu.com/AngularJS_assign3/
) 


## Review
This assignment intends to let us practise on customising our directives and using $http servise <br>

<h> Basic steps to build your own directives</h>
According to the lecture, there are four steps to define your custom directives: <br>
##### Step 1: Register Directive

```
angular.module('app', [])
.controller('MyCtrl', MyCtrl)
.directive('myTag', MyTag);
```

Note: myTag should use camel-case rules.

##### Step2: Define Factory Function
```
MyTag.$inject=[...]
function MyTag(...) {
  var ddo={
    template: 'Hello World!'
    ...
  };
  return ddo;
}
```

Note: you can use `templateUrl: 'myTag.html'` so that you can encapsulate more stuffs inside. <br>

##### Step3: Use In HTML
```
<my-tag></my-tag>
```

Note: it also could be my-Tag or My-tag or My-Tag, and whichever it is, it will be normalized as myTag.

## Other things that need to know
Except steps above, there are some other useful property in directives, such as restric property where <br>
where you can set your ddo as only attribute or element or both. You can bind the ddo to a controller <br>

For example:
```
    var ddo = {
    ...
    controller:FoundItemsDirectiveController,
    controllerAs:'list',
    bindToController: true
  };
``` 
Apart from that, you need to use `'&'` inside the scope to execute expression(which is remove item) in the context <br>
of parent scope.
