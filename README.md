# Shadow Architecture (Redux)

This project is a work-in-progress rebuild of the original [Shadow Architecture](https://github.com/videothrone/shadow-architecture) project I did at [SPICED Academy](https://www.spiced.academy/program/full-stack-web-development/) with React and TypeScript using Vite. The original code was so outdated that neither the Google Maps library worked anymore, nor could even be hosted, so I've decided to refactor it, but keep the general idea and the design aesthetics. The content data of the places themselves is probably outdated and will be updated at the end of the process.

## Preview

[![Shadow Architecture](/public/screenshot.png)](https://shadow-architecture.netlify.app/)

## Live

[https://shadow-architecture.netlify.app](https://shadow-architecture.netlify.app/)

## Deployment Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c5cadc21-8d58-47a2-8488-77b30d483d49/deploy-status)](https://app.netlify.com/sites/shadow-architecture/deploys)

## Local Setup

Get a free API-Key from https://developers.google.com/maps (<i>credit card required</i>) then add `.env` file:
```
VITE_GOOGLE_MAPS_API=YourAPIKey
```

Install NPM packages:
```bash
npm i
```
Run the development server:

```bash
npm run dev
```

## Tech

- Built with Vite / React / TypeScript
- Map is rendered by using the Google Maps API with the [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) package
- Custom map styles are handled by a JSON, created with https://mapstyle.withgoogle.com/
- All content data for Markers, Cards and Overlays is pulled from a JSON file

## Features

- Users can check out twelve different locations, either by clicking on the markers on the map or by scrolling down and clicking on a location card.

- The map's info window shows a thumbnail and short description, users can click on the icon and will be redirected to a Google route tab, where they can enter their location. They can also click on "Explore more..." which opens up an overlay with more content.

- The overlay can also be accessed by clicking on the location cards and presents a bigger image, which can be enlarged by clicking on it. It also includes more information about the place and another route redirect icon.


## Differences to Original

- Switched out library handling the Google Maps rendering, since the old one was outdated and broken
- Components have been refactored into TypeScript and split into more modular and reusable parts
- CSS has been rewritten to [BEM](https://getbem.com/) standards and split into component files
- Overlay can be closed now also by keyboard
- Location cards are now rendered in grid taking up the same space and width as the Map component and resizing automatically to the viewport of the user
- Better responsibility of info windows that are opened by map markers
- Added loader animation / component to Map, instead of standard loading text
