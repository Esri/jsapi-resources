# Troubleshooting issues when using client-side build tools
[Client-side build tools](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview) involve many interrelated pieces such as frameworks, module bundlers, transpilers, and dependency libraries - one of which is the ArcGIS Maps SDK for JavaScript (JS Maps SDK). Figuring out the cause of errors is often challenging. The goal of this document is to provide guidance for narrowing down the source of problems.

**Table of Contents**
1.	[Four triage steps](#four-triage-steps)
2.	[Understanding the cause of an issue](#understand-the-cause-of-an-issue)
3.	[Configuration issues](#configuration-issues)
4.	[Bundler/Framework issues](#bundlerframework-issues)
5.	[JS Maps SDK issues](#maps-sdk-issues)

## Four triage steps
There are four basic steps you can take to help isolate problems.

**Step 1 – Review.** Examine the error message and the entire error dump. Most of the time there are clues in the error that will help solve the problem. Take note of when the error happens. Some errors only occur during the build process, others may only show up when you run the app in the browser, or only when the app is deployed to the production environment.

**Step 2 - Search.** Search for error message on the [Esri Community site](https://community.esri.com/t5/arcgis-maps-sdk-for-javascript/ct-p/arcgis-api-for-javascript) or the internet, and research what might be causing the issue. This is often the fastest and easiest way to look for answers or get hints on how to solve a problem. Depending on the error, you should consider reviewing the JS Maps SDK release notes for [breaking changes](https://developers.arcgis.com/javascript/latest/release-notes/#breaking-changes) or [bug fixes and enhancements](https://developers.arcgis.com/javascript/latest/release-notes/#bug-fixes-and-enhancements).

**Step 3 - Reproduce.** Try to reproduce the issue in a simple, focused stand-alone HTML/JavaScript app. The [ES module samples](./esm-samples/) in this repository are a great starting point. This will help determine if the issue is related to the JS Maps SDK, or not. Sometimes, in the process of trying to reproduce the error you will solve the issue.

**Step 4 – Create a sample.** Always try to provide a simple sample when posting your question to the Esri Community Site. There are great online options for sharing samples including [codepen](https://codepen.io/), [github.com](https://github.com/), [codesandbox](https://codesandbox.io/) or [StackBlitz](https://stackblitz.com/). Code snippets often do not provide enough information about a project because they don’t include information on configuration, dependencies or coding patterns. Providing a working sample is essential to allow others to quickly reproduce your issue. Sometimes the process of creating the sample helps solve the problem.

## Understand the cause of an issue
With all the various parts in modern build systems, determining where the problem is occurring is critical. There are typically three categories where problems occur: configuration, bundler/framework, or the JS Maps SDK.

## Configuration issues
The most common errors are related to project configuration. Most of these types of issues look like bugs, but oftentimes they are not:
*	Module bundler – e.g. webpack and rollup configuration
*	Framework – e.g. Angular, React configuration
*	package.json – e.g. dependency version mismatches
*	Maps SDK – e.g. esriConfig, OAuth tokens, API keys

#### Example Configuration issues
**Problem 1:** `404` errors that indicate a file is missing in a production build, but dev build works fine.

_Potential Resolution:_ Check the bundler or framework documentation on setting the base path for production builds. See [example](https://github.com/Esri/jsapi-resources/issues/436).  

**Problem 2:** Module parse failed: Unexpected token. You may need an appropriate loader to handle this file type. 

_Potential Resolution:_ These are typically related to transpiling. You may be missing a needed transpiler plugin or need to upgrade to a newer version of the module bundler. The error messages may point to one or more Maps SDK modules. See [example](https://github.com/Esri/jsapi-resources/issues/424).
*	Get a screenshot of the full error message
*	Narrow down the JS Maps SDK version where the break occurred

**Problem 3:** Error loading a .wasm or .woff file.

_Potential Resolution:_ Configure your web server with the correct MIME types. See [example](https://developers.arcgis.com/javascript/latest/install-and-set-up/#web-server-hosting-configuration).

## Bundler/Framework issues
Bundlers and frameworks do occasionally have their own bugs. If you are working with a major framework or bundler, they have very active communities. Searching for the error message using a general internet search is typically the fastest way to get information and hints.
* Configuration issues
* Component issues
* Syntax errors
* Life-cycle problems

#### Example Bundler/Framework issues
We do come across bugs in module bundlers and frameworks that are unrelated to the JS Maps SDK. Sometimes these bugs have already been documented. Sometimes, we recommend you open an issue on the framework or bundler repository, that’s where many examples of these issues can be found, for example:

*	Angular issues: https://github.com/angular/angular-cli/issues 
*	React issues: https://github.com/facebook/react/issues 
*	Rollup issues: https://github.com/rollup/rollup/issues 
*	Webpack issues: https://github.com/webpack/webpack/issues 

## Maps SDK issues
Errors occurring in the Maps SDK typically have one of these types of errors:
*	Errors that occur at runtime and not during the build process
*	Errors that occur in a Maps SDK module
*	Errors that can be reproduced using the Maps SDK in plain JavaScript without a framework

#### Example Maps SDK issue
**Errors in production builds.** While very rare, sometimes the production build process of a framework creates errors that don’t show up in developer builds. These are often related to bundling, minification or transpiling. Look for hints in the error message that might point to functionality inside a Maps SDK module.

[Example - ReferenceError: Cannot access “e” before initialization](https://github.com/Esri/jsapi-resources/issues/309). In this case, when the error stack dump was expanded in the browser console, you could see file names that appear to be from the Maps SDK such as _renderLegendForLayer_ and _renderLegendForElement_, these are excellent hints.

Verified errors in production builds can be reported on the [Maps SDK Community site](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/bd-p/arcgis-api-for-javascript-questions), or if it’s specifically related to an ES modules sample on this repo, then you can open a GitHub issue [here](https://github.com/Esri/jsapi-resources/issues).

**Regressions.** This is when Maps SDK functionality works in one release, and then the same functionality is broken in the next one. It’s important to insure the bugs are related to some other dependency in package.json. When testing for regressions, you will change only the version of @arcgis/core and keep all other dependencies constant. 

Most Maps SDK regressions can be re-created in a plain JavaScript application, without the framework or bundler. The ESM CDN is an easy way to test and prototype these types of issues: https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-esm-cdn. 

Verified regressions can be reported to[ Esri Technical Support](https://support.esri.com/en/contact-tech-support) or the [Maps SDK Community site](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/bd-p/arcgis-api-for-javascript-questions).

**New bugs.** The best practice for verifying these is to re-create them in a simple, plain JavaScript application, without the framework or bundler. The ESM CDN is an easy way to test for these types of issues, and here is the [sample application](./esm-samples/jsapi-esm-cdn/). 

Verified bugs can be reported to[ Esri Technical Support](https://support.esri.com/en/contact-tech-support) or the [Maps SDK Community site](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/bd-p/arcgis-api-for-javascript-questions).
