# Tab Gear

> Tag Gears is an extension for Google Chrome that provides an intuitive tabs management.

### Features

Some of the features that will come handy:

* List of all open tabs.
* See incognito tabs.
* Tab discarding. Allows Chrome to automatically discard tabs that aren't of great interest to you when it's detected that system memory is running pretty low.
* Displays the number of tabs you currently have open in all your Chrome windows.
* Closing selective tabs.
* Closing all open tabs.
* Quick opening your extensions.
* Localization for English and Russian languages.
* Press Ctrl+Shift+T or ⌘+⇧+T keys to show or hide the browser action popup.
* Do you want to prevent closing multiple tabs? It's possible by default and configurable!

### Preview

#### List of all open tabs

![List](./files/usage/0.png)

#### Closing selective tabs

![List](./files/usage/1.png)

#### Search view

![List](./files/usage/2.png)

#### Search results

![List](./files/usage/3.png)

#### Tab discarding

![List](./files/usage/5.png)

#### Closing all open tabs

![List](./files/usage/6.png)

#### Options

![List](./files/usage/7.png)


### Installation

```
npm install
```

### Development

```
npm start
```

### Build

```
npm run build
```

### Testing

```
npm test
```

### Publication

* Upload extension using [Developer Dashboard](https://chrome.google.com/webstore/developer)


### Updating

* `npm run build`
* Open [Extensions](chrome://extensions/)
* Click "Pack extension"
* Use `cache/build/` to fill "Extension root directory" and "Private key file"
* Move `cache/build/build.crx` to `build/<version>.crx`
* Actualize "update.xml"


### Links

* [Manifest File](https://developer.chrome.com/extensions/manifest)
* [Developer Dashboard](https://chrome.google.com/webstore/developer)
* [Chrome Web Store](https://chrome.google.com/webstore/category/extensions)
* [HTML Entities](https://dev.w3.org/html5/html-author/charref)
