# YouTube Shorts Blocker

YouTube Shorts Blocker is a simple Chrome extension that helps block YouTube Shorts on desktop Chrome.

It redirects YouTube Shorts URLs back to the YouTube homepage and hides Shorts-related sections from the YouTube interface.

## Features

- Blocks direct YouTube Shorts pages
- Redirects `/shorts/` URLs to the YouTube homepage
- Hides Shorts sections from the YouTube homepage/feed
- Removes Shorts video cards from grid and list views
- Hides the Shorts link from the YouTube sidebar
- Uses `MutationObserver` to handle dynamically loaded YouTube content

## How It Works

This extension uses two approaches:

1. **URL Blocking**

   If a user opens a YouTube Shorts URL like:

   ```text
   https://www.youtube.com/shorts/VIDEO_ID

## Install Extension in Chrome

   
Follow these steps to install this extension manually in Chrome.

### Step 1: Open Chrome Extensions Page

Open Google Chrome and go to:

```text```
chrome://extensions/

### Step 2: Enable Developer Mode

    ```On the Extensions page, turn on Developer mode.

    You will usually find this option in the top-right corner.```

### Step 3: Click Load Unpacked

    ```After enabling Developer mode, click the Load unpacked button.```

### Step 4: Select Extension Folder

    ```Select the folder where this extension code exists.```

### Step 5: Extension Installed

    ```After selecting the folder, Chrome will install the extension.

    You should now see YouTube Shorts Blocker in your Chrome extensions list.```
