# Graphite Theme

This is a theme I started a very long time ago as a theme for the Sphinx documentation generator, but is now just a theme for the Pelican site generator. It may still function with Sphinx, but I haven't tried for nearly a decade and it wouldn't surprise me in the slightest if it didn't.

This README only contains a few brief notes, so apologies if you're trying to get this working and struggling. If I get time I might put some more details in here.

## Using the Theme

For a quick start, clone this repository somewhere -- I store it as a subtree `themes/graphite` in the repo where I store my blog sources, so that directory is relative to `pelicanconf.py`.

Within my `pelicanconf.py` I use these settings, although only the first two of these lines are required, depending what you want:

```
THEME = 'themes/graphite'
THEME_CSS = 'contrast-light.css'
THEME_CSS_MOBILE = 'contrast-light-mobile.css'
THEME_CSS_DARK = 'contrast-dark.css'
THEME_CSS_MOBILE_DARK = 'contrast-dark-mobile.css'
THEME_CSS_PRINT = 'general-print.css'
```

You probably want to also set at least these settings in `pelicanconf.py`:

```
```

## Changing the Colours

The basic look is always the same, but the colours and fonts are parameterised using SASS -- if you update these, then the included `updatecss.py` script should perform the required generation. Any `*.scss` file *which does **not** start with an underscore* is converted to an equivalent `*.css` file in the `static/` directory. The builtin colour schemes are:

To choose which colours and fonts to use, set these values in the Pelican settings file:

- `THEME_CSS` is the normal colour scheme (default `contrast-light.css`)
- `THEME_CSS_DARK` is the dark theme, if you want one (default `contrast-dark.css`)
- `THEME_CSS_MOBILE` is the mobile layout CSS, if you want one (default `contrast-light-mobile.css`)
- `THEME_CSS_MOBILE_DARK` is the dark mobile theme (default `contrast-dark-mobile.css`)
- `THEME_CSS_PRINT` should always be set to `general-print.css`, unless you've written your own print CSS

The four predefined options are:

- `graphite.css` is the original colour scheme, a light-on-dark theme with no light or mobile variants.
- `poker.css` is a dark green variant of `graphite.css`, similarly with no variants.
- `solarized-*.css` is my implementation of [Ethan Schoonover's low contrast Solarized theme](https://ethanschoonover.com/solarized/), which has dark and light variants, and mobile versions of each.
- `contrast-*.css` is my own colour scheme very loosely based on Solarized, but significantly increasing the contrast for better accessibility.

## Settings

There are a bunch of settings you can include in `pelicanconf.py` to change all kinds of aspects of the site. I've listed all the ones I can remember below -- some of these are standard in the Pelican theme, and some I added to support features which (at least when I added them) didn't exist there. At some point I should probably add some documentation for them, but I'm hoping most aren't too hard to figure out based on how they're used in the templates, if you're somewhat familiar with HTML.

- `APPLE_ICON_URL`
- `ARTICLE_IMG_PATH`
- `ARTICLE_IMG_SMALL_PATH`
- `AUTHOR`
- `CATEGORY_FEED_ATOM`
- `CATEGORY_FEED_ATOM_URL`
- `CATEGORY_FEED_RSS`
- `CATEGORY_FEED_RSS_URL`
- `COPYRIGHT`
- `CREDIT`
- `DEFAULT_PAGINATION`
- `DISPLAY_PAGES_ON_MENU`
- `DISQUS_SITE_NAME`
- `FACEBOOK_APP_ID`
- `FAVICON_URLS`
- `FEED_ALL_ATOM`
- `FEED_ALL_ATOM_URL`
- `FEED_ALL_RSS`
- `FEED_ALL_RSS_URL`
- `FEED_ATOM`
- `FEED_ATOM_URL`
- `FEED_DOMAIN`
- `FEED_RSS`
- `FEED_RSS_URL`
- `GITHUB_POSITION`
- `GITHUB_URL`
- `HEADING_PREFIX`
- `HYVOR_SITE_ID`
- `GOOGLE_ANALYTICS`
- `GOOGLE_ANALYTICS_DOMAIN`
- `HEADING_PREFIX`
- `LINKS`
- `LOGOURL`
- `MANIFEST_URL`
- `MENUITEMS`
- `META_AUTHOR`
- `META_AUTHOR_FACEBOOK`
- `META_DESCRIPTION`
- `MONTH_ARCHIVE_SAVE_AS`
- `PDF_PROCESSOR`
- `PIWIK_SITE_ID`
- `PIWIK_SSL_URL`
- `PIWIK_URL`
- `SOCIAL`
- `SITEIMAGEOGURL`
- `SITEIMAGETWITTERURL`
- `SITEIMAGEURL`
- `SITENAME`
- `SITESUBTITLE`
- `SITEURL`
- `TAG_FEED_ATOM`
- `TAG_FEED_ATOM_URL`
- `TAG_FEED_RSS`
- `TAG_FEED_RSS_URL`
- `THEME_COLOR`
- `THEME_COLOR_DARK`
- `THEME_CSS`
- `THEME_CSS_DARK`
- `THEME_CSS_MOBILE`
- `THEME_CSS_MOBILE_DARK`
- `THEME_CSS_PRINT`
- `TWITTER_USERNAME`
- `YEAR_ARCHIVE_SAVE_AS`
