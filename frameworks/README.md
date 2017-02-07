# Using the ArcGIS API for JavaScript with Frameworks

There are two overall approaches when integrating the [ArcGIS API for JavaScript] with JavaScript frameworks like [Angular], [Ember], or [React].

## The Map Centric Approach

This approach is characterized by using framework components in an ArcGIS API for JavaScript application. This approach works well when:
 - the map is the primary source of application state
 - your developers are mainly interested in a framework's component architecture, or "view layer", as an alternative to [Dojo's Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/info.html)

This approach works best with frameworks like [React] where the component architecture can easily be used independently of parts of the framework or ecosystem (such as the router, data stores, tooling, etc). In contrast it is difficult to use a full featured and strongly opinionated framework like [Ember] with this approach.

### Examples

The [ArcGIS API for JavaScript Samples ](https://developers.arcgis.com/javascript/latest/sample-code/index.html) include a few examples of this approach with step by step instructions on how to use framework components in an ArcGIS API for JavaScript application.

 - [Angular 1](https://developers.arcgis.com/javascript/latest/sample-code/widgets-frameworks-angular/index.html)
 - [React](https://developers.arcgis.com/javascript/latest/sample-code/widgets-frameworks-react/index.html)

## The Framework First Approach

In contrast, the framework first approach is characterized by using the ArcGIS API for JavaScript in an application built with a Framework. This approach works well when:
 - the application state comes primarily from outside the map (i.e. routable URLs or data stores)
 - your developers want to use the conventions and tooling that are typically used with the framework
 - the map is only used on certain routes and/or you want to lazy load the ArcGIS API for JavaScript

Using this kind of approach usually requires using a special build configuration and/or a helper library to load the ArcGIS API for JavaScript modules.

## Examples

Below are links to tools that will help you use the ArcGIS API for JavaScript in applications built with some of the more popular JavaScript frameworks, as well as examples of how to use those tools.

### Angular 1

[angular-esri-map](https://github.com/Esri/angular-esri-map) is a library of reusable directives and services to help you use Esri maps and data in your Angular 1 applications.

Example Applications:
 - [angular-esri-map Examples](http://esri.github.io/angular-esri-map/)
 - [A simple example of how to roll your own AngularJS directive to show an Esri map for a focused workflow](https://github.com/tomwayson/angular-parcel-map)
 - [Ionic app demonstrating how to use the Esri ArcGIS API for JavaScript](https://github.com/jwasilgeo/ionic-esri-map)

### Angular

For Angular 2 and above, there are a couple of libraries to help you use the ArcGIS API for JavaScript.  [angular2-esri-loader](https://github.com/tomwayson/angular2-esri-loader) is an Angular service to help you load modules from the ArcGIS API for JavaScript (either 3.x or 4.x). [angular2-esri4-components](https://github.com/kgs916/angular2-esri4-components) is set of reusable Angular components to work with ArcGIS API for JavaScript v4.x.

Example Applications:
 - [Example of how to to use the ArcGIS API for JavaScript in an Angular CLI app](https://github.com/tomwayson/esri-angular-cli-example)
 - [Esri-playground: Angular 2 & Esri 4](https://github.com/jwasilgeo/angular2-esri-playground)
 - [Example app using the ArcGIS API for JavaScript v3 in an Angular2 app](https://github.com/tomwayson/angular2-esri-example)
 - [An example mapping application using ArcGIS API for JavaScript v4 ](https://github.com/kgs916/ng2cli-esri4)

### Ember

[ember-cli-amd](https://github.com/Esri/ember-cli-amd) is an [EmberCLI](https://ember-cli.com/) addon for using AMD libraries that helps you load modules from the ArcGIS API for JavaScript (either 3.x or 4.x) in an Ember application.

Example Applications:
- [ArcGIS Open Data](http://opendata.arcgis.com/) is built using ember-cli-amd

### React
TODO

[ArcGIS API for JavaScript]:https://developers.arcgis.com/javascript/
[Angular]:https://angular.io/
[Ember]:http://emberjs.com/
[React]:https://facebook.github.io/react/
[Vue.js]:https://vuejs.org/
