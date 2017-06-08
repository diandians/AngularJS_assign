# AngularJS_assign4
This is practice repo for [Single Page Web Applications with AngularJS](https://www.coursera.org/learn/single-page-web-apps-with-angularjs/)

AngularJS-assign4: [Chinese Restaurant](http://www.qiufengzhu.com/AngularJS_assign4/)

## Review

### Component and Component-Based Architecture
##### Step 1: Register Component with Module

##### Step 2: Configure Component

```
angular.module('App', [])
.component('myComponent', {
  templateUrl: 'template.html',
  controller:ComponentController,
  bindings: {
    prop1: '<',
    prop2: '@title',
    onAction: '&'
  }
});
```

Note: `controller:ComponentController` is not required.
