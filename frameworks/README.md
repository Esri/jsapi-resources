# Using the ArcGIS API for JavaScript with Frameworks

There are two overall approaches when integrating the [ArcGIS API for JavaScript] with JavaScript frameworks like [Angular], [Ember], or [React].

## The Map Centric Approach

This approach is characterized by using framework components in an ArcGIS API for JavaScript application. This approach works well when:
 - the map is the primary source of application state
 - your developers are mainly interested in a framework's component architecture, or "view layer", as an alternative to [Dojo's Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/info.html)

This approach works best with frameworks like [React] where the component architecture can easily be used independently of other parts of the framework or ecosystem (such as the router, data stores, tooling, etc). In contrast it is difficult to use a full featured and strongly opinionated framework like [Ember] with this approach.

### Examples

The [ArcGIS API for JavaScript Samples ](https://developers.arcgis.com/javascript/latest/sample-code/index.html) include a few examples of this approach with step by step instructions on how to use framework components in an ArcGIS API for JavaScript application.

 - [Angular 1 Sample](https://developers.arcgis.com/javascript/latest/sample-code/widgets-frameworks-angular/index.html)
 - [React Sample](https://developers.arcgis.com/javascript/latest/sample-code/widgets-frameworks-react/index.html)

These additional examples demonstrate this approach by creating components from each of these frameworks and using them in an ArcGIS API for JavaScript app:

 - [Angular 2](http://odoe.net/blog/angular-2-with-arcgis-js-api/)
 - [Vue.js](http://odoe.net/blog/using-vuejs-arcgis-api-javascript/)
 - [React](https://geonet.esri.com/people/odoe/blog/2015/04/01/esrijs-with-reactjs-updated)

## The Framework First Approach

In contrast, the framework first approach is characterized by using the ArcGIS API for JavaScript in an application built with a Framework. This approach works well when:
 - the application state comes primarily from outside the map (i.e. routable URLs or data stores)
 - your developers want to use the conventions and tooling that are typically used with the framework
 - the map is only used on certain routes and/or you want to lazy load the ArcGIS API for JavaScript

Using this kind of approach usually requires using a special build configuration and/or a helper library to load the ArcGIS API for JavaScript modules.

## Examples

Below are links to tools that will help you use the ArcGIS API for JavaScript in applications built with some of the more popular JavaScript frameworks.
- [Using the ArcGIS API for JavaScript in Angular Applications](./angular/)
- [Using the ArcGIS API for JavaScript in Angular 1 Applications](./angular-1/)
- [Using the ArcGIS API for JavaScript in Ember Applications](./ember/)
- [Using the ArcGIS API for JavaScript in React Applications](./react/)

[ArcGIS API for JavaScript]:https://developers.arcgis.com/javascript/
[Angular]:https://angular.io/
[Ember]:http://emberjs.com/
[React]:https://facebook.github.io/react/
[Vue.js]:https://vuejs.org/
