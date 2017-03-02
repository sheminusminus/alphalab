# alpha-state

## installation

to install this theme, move this directory into `/your/site/grav/user/themes`. then, rename the folder to `alpha-state` if necessary.

You should now have all the theme files under

    /your/site/grav/user/themes/alpha-state

# setup

if you want to set this theme as the default theme, you can do so by following these steps:

* navigate to `/your/site/grav/user/config`.
* open the **system.yaml** file.
* change the `theme:` setting to `theme: alpha-state`.
* save your changes.
* clear the Grav cache. the simplest way to do this is by going to the root grav directory in terminal and typing `bin/grav clear-cache`.

once this is done, you should be able to see the new theme on the frontend. 
keep in mind any customizations made to the previous theme will not be reflected as all of the theme and templating information is now being pulled from the new folder.

this may break any site pages that aren't included in this theme, and likewise, pages you create using this theme may or may not work if you switch again.