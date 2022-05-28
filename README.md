<img src="https://shemehamitaj.com/assets/images/spiderman.png" alt="screenshot" width="100%">

*If you don't know how to work with GitHub Pages checkout this [tutorial](https://youtu.be/QyFcl_Fba-k).*

## Get Started

Clone this repo locally:

```bash
git clone https://github.com/jajosheni/N95
```

Locate the following files and replace the data with your own personal information:

```bash
resources/card.js
resources/miscellaneous.js
resources/subpages/about.js
resources/subpages/services.js
resources/subpages/resume.js
resources/subpages/contact.js
```

#### Style changes

This repo uses Material Design Icons so if you want
to change the icons visit [Material Design Icons](https://materialdesignicons.com/) and find the desired icons.<br>
*Do not forget to prepend `mdi-` in front of the icon name.*

In order to change colors you can make changes to `variables.css` in the root directory.

#### Map change

```
1. Go to google maps.
2. Select a place.
3. Click on share then switch to `Embed a map`
4. Copy the html line
5. Paste into `/resources/subpages/contact.js`
```

## Building and running.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Install the dependencies...

```bash
cd N95
npm install
```

...then start building:

```bash
npm run build
```

Navigate to `/public` folder and copy all the contents in there. You should see the following:

```bash
/build
favicon.png
global.css
index.html
variables.css
```

Paste them directly into your GitHub repository and push.

Done. 🎉🎉🎉

*Don't forget to give this repo a star* ⭐
