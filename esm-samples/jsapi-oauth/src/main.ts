import { setAssetPath } from "@esri/calcite-components/dist/components";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
defineCustomElements(window, {  resourcesUrl: "https://js.arcgis.com/calcite-components/2.4.0/assets"});

import { CalciteButton } from "@esri/calcite-components/dist/components/calcite-button";
import { CalciteNavigationUser } from "@esri/calcite-components/dist/components/calcite-navigation-user";
import "./style.css";

import esriId from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import Portal from "@arcgis/core/portal/Portal";
import PortalQueryParams from "@arcgis/core/portal/PortalQueryParams";
import PortalQueryResult from "@arcgis/core/portal/PortalQueryResult";

setAssetPath("https://js.arcgis.com/calcite-components/2.4.0/assets");

// UI elements
const signInButton = document.getElementById("sign-in-button") as CalciteButton;
const navigationUser = document.getElementById("nav-user") as CalciteNavigationUser;
const itemGallery = document.getElementById("item-gallery") as HTMLElement;
signInButton.addEventListener("click", signInOrOut);
navigationUser.addEventListener("click", signInOrOut);

//Create a new OAuthInfo object.
const info = new OAuthInfo({
  // Swap this ID out with an app ID registered in your ArcGIS Organization.
  appId: "REGISTERED_CLIENT_ID",
  // Add the portalUrl property if using your own portal.
  //portalUrl: "https://<host>:<port>/<webadaptor>",
  // Set the authNamespace property to prevent the user's signed in state
  // from being shared with other apps on the same domain with the same authNamespace value.
  // authNamespace: "portal_oauth_inline",
  // Set popup to true to show the OAuth sign-in page in a separate popup window.
  //popup: true
});

// Add the OAuthInfo to the IdentityManager.
esriId.registerOAuthInfos([info]);

// Call the checkSignIn function to see if the user is already signed in.
checkSignIn();

// Function to sign in or out of the portal
function signInOrOut() {
  esriId
    .checkSignInStatus(info.portalUrl + "/sharing")
    .then(() => {
      // If already signed in, then destroy the credentials to sign out.
      esriId.destroyCredentials();
      window.location.reload();
    })
    .catch(() => {
      // If the user is not signed in, generate a new credential.
      esriId
        .getCredential(info.portalUrl + "/sharing", {
          // Set the following property to false to not show a dialog
          // before the OAuth popup window is open.
          //oAuthPopupConfirmation: false,
        })
        .then(() => {
          // Once a credential is returned from the promise, check the
          // sign in status to query to portal for items.
          checkSignIn();
        });
    });
}

// Function to check the current sign in status and query the portal if signed in.
function checkSignIn() {
  esriId
    .checkSignInStatus(info.portalUrl + "/sharing")
    .then(() => {
      // If signed in, show the username un the UI.
      navigationUser.hidden = false;
      signInButton.hidden = true;
      const portal = new Portal({
        authMode: "immediate",
      });
      if (info.portalUrl !== "https://www.arcgis.com") {
        portal.url = info.portalUrl;
      }
      // Load the portal, display the name and username, then call the query items function.
      portal.load().then(() => {
        navigationUser.fullName = portal.user.fullName;
        navigationUser.username = portal.user.username;
        queryItems(portal);
      });
    })
    .catch(() => {
      // If not signed in, then show the sign in button.
      signInButton.hidden = false;
      navigationUser.hidden = true;
    });
}

// Function to query for portal items.
function queryItems(portal: Portal) {
  // Create query parameters for the portal search.
  const queryParams = new PortalQueryParams({
    query: "owner:" + portal.user.username,
    sortField: "num-views",
    sortOrder: "desc",
    num: 20,
  });
  // Query the items based on the queryParams created from portal above.
  portal.queryItems(queryParams).then(createGallery);
}

// Function to build the UI for the gallery to display queried portal items.
function createGallery(items:PortalQueryResult) {
  items.results.forEach((item) => {
    // Create a card for each item and add a thumbnail, title, subtitle,
    // view count value, and a button to open the item in a new window.
    const card = document.createElement("calcite-card");
    const thumbnail = document.createElement("img");
    thumbnail.slot = "thumbnail";
    thumbnail.src = item.thumbnailUrl;

    const title = document.createElement("span");
    title.slot = "title";
    title.setAttribute("style", "overflow: hidden;white-space: nowrap; text-overflow: ellipsis;")
    title.innerHTML = item.title;

    const type = document.createElement("span");
    type.slot = "subtitle";
    type.innerHTML = item.type;

    const views = document.createElement("span");
    views.slot = "footer-end";
    views.innerHTML = "Views: " + item.numViews;

    const openItemButton = document.createElement("calcite-button") as CalciteButton;
    openItemButton.iconStart = "launch";
    openItemButton.target = "_blank";
    openItemButton.appearance = "transparent"
    openItemButton.href = item.itemPageUrl;

    card.appendChild(thumbnail);
    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(views);
    card.appendChild(openItemButton);

    const div = document.createElement("div");
    div.setAttribute("style", "float: left; padding: 10px;display: inline-block;")
    div.appendChild(card);
    itemGallery.appendChild(div);
  });
}