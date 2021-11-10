# Welcome to Ebullientworks Obsidian Theme 👋

![](https://raw.githubusercontent.com/ebullient/obsidian-theme-ebullientworks/main/images/ebullientworks-theme.jpg)

This is a dark and light theme for [Obsidian.md](https://obsidian.md), a note taking app. 

I've begged/borrowed/stolen CSS snippets from just about everywhere, but I started from vanilla and tried to be judicious about what to include to keep things lean. Modals and other panels are also styled. All colors are sourced from [this palette](http://htmlpreview.github.io/?https://github.com/ebullient/obsidian-theme-ebullientworks/blob/main/colors.html)

Headers are styled and sized (for mobile and not) with and without Sliding panes (and rotated headers).

Some light styling has also been applied for the following community plugins: 

- admonition
- calendar
- day planner
- sliding panes
- timelines
- tracker

## Colors

![](images/theme-colors.jpg)

## Style Settings

This theme does support style settings. Settable attributes: 

- "Show external links in edit mode"  
    This theme will try to use use CSS tricks to hide link text in edit mode. This works best with a minimal configuration of the CodeMirror options plugin. Specifically, for Visual Styling: "Style active selection" and "Retain active line on selection". The "Collapse external links" capability of that plugin is really nice, but this theme catches a few cases that plugin misses, and collapses those, too. (I personally use markdown links, which are collapsed/hidden with these settings). 

- Set custom fonts for 
    - Headings
    - Tags
    - Text (default font for text)
    - Monospace 

- Choose primary / secondary accent color
    This allows you to select the primary or secondary color from the colors in the palette (purple, pink, green, teal, or blue). You can also select a "custom" accent color, in which case, you should define and enable your own snippet as described below.
### Creating your own accent colors

The colors used by this palette are selected by applying a grayscale filter to a selected hue. 
Use the following URL to apply the same grayscale filter to a color of your choice: 
https://grayscale.design/app?lums=71.05,60.94,48.16,35.39,17.24,6.39,2.80&palettes=%23A17E9B&filters=0%7C0&names=purple&labels=

Then create a snippet that contains your customized colors. 

For example, let's use a REALLY BOLD RED: `#ae2012`.
If we visit the link above, we can scroll down a bit until we see a button "Add a color", and we paste this value (including the `#` in that field). This will show us something like this: 
![](images/create-a-custom-accent-color.png)

Scroll down until you see `Step 3`, which is the step you need to export your colors. You'll want to use the CSS variables.

If we want to use this red as the primary color: 
```
.primary-accent-custom {
  --primary-accent-0: rgb(250, 210, 206); /* red-100 */
  --primary-accent-1: rgb(248, 192, 187);
  --primary-accent-2: rgb(245, 163, 156);
  --primary-accent-3: rgb(241, 127, 117);
  --primary-accent-4: rgb(222, 40, 23);
  --primary-accent-4-rgb: 222, 40, 23; /* Note removal of rgb() function */
  --primary-accent-5: rgb(142, 25, 15);
  --primary-accent-6: rgb(95, 17, 10); /* red-700 */
}
```

If we want to use this red as the secondary color:
```
.secondary-accent-custom {
  --secondary-accent-0: rgb(250, 210, 206); /* red-100 */
  --secondary-accent-1: rgb(248, 192, 187);
  --secondary-accent-1-rgb: 248, 192, 187;  /* Note removal of rgb() function */
  --secondary-accent-2: rgb(245, 163, 156);
  --secondary-accent-3: rgb(241, 127, 117);
  --secondary-accent-4: rgb(222, 40, 23);
  --secondary-accent-5: rgb(142, 25, 15);
  --secondary-accent-6: rgb(95, 17, 10);    /* red-700 */
}
```

Place the file containing this snippet in the .obsidian/snippets directory, and make sure to enable it. Provided you've selected the "custom" entry in the primary/secondary style settings drop-down, you should be off to the races.

## Admonitions

As of version 6.5.1, you can disable the color picker for admonitions (globally or per-admonition) to have colors picked up from CSS styles instead. All of the default admonitions, in addition to two additional custom types, have been styled.

Those two custom types are:

- `reference`  
    Styled for inline reference metadata. Compact, monospace font.  
    To use this style, create a `reference` admonition (I recommend you use the closed book icon, but take your pick).
    
- `toc`
    Styled to create a floating (hover:right) section for Table of Contents
    To use this style, create a `toc` admonition (I recommend you use the list icon, but take your pick).
    
Here is what they look like (unstyled edit mode on the left): 

![](images/admonitions.png)

## Credits

- [Spectrum](https://github.com/Braweria/Spectrum)
- [ITS Theme](https://github.com/SlRvb/Obsidian--ITS-Theme)
- Snippets from everywhere, including the forums and all the sources noted in the above two themes

