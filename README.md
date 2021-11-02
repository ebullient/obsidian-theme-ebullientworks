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

![](https://raw.githubusercontent.com/ebullient/obsidian-theme-ebullientworks/main/images/theme-colors.jpg)

## Style Settings

This theme does support style settings. Settable attributes: 

- "Show external links in edit mode"  
    This theme will try to use use CSS tricks to hide link text in edit mode. This works best with a minimal configuration of the CodeMirror options plugin. Specifically, for Visual Styling: "Style active selection" and "Retain active line on selection". The "Collapse external links" capability of that plugin is really nice, but this theme catches a few cases that plugin misses, and collapses those, too. (I personally use markdown links, which are collapsed/hidden with these settings). 

- Set custom fonts for 
    - Headings
    - Tags
    - Text (default font for text)
    - Monospace 


## Admonitions

As of version 6.5.1, you can disable the color picker for admonitions (globally or per-admonition) to have colors picked up from CSS styles instead. All of the default admonitions, in addition to two additional custom types, have been styled.

Those two custom types are:

- `reference`  
    Styled for inline reference metadata. Compact, monospace font.  
    To use this style, create a `reference` admonition (I recommend you use the closed book icon, but take your pick).
    
- `toc`
    Styled to create a floating (hover:right) section for Table of Contents
    To use this style, create a `toc` admonition (I recommend you use the list icon, but take your pick).
    
Here is what they all look like (unstyled edit mode on the left): 

![](images/admonitions.png)



## Credits

- [Spectrum](https://github.com/Braweria/Spectrum)
- [ITS Theme](https://github.com/SlRvb/Obsidian--ITS-Theme)
- Snippets from everywhere, including the forums and all the sources noted in the above two themes

