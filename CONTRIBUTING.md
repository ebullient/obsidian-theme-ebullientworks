# How Can I Contribute?

## Use discussions

* 🙋 [Ask questions](/discussions/categories/q-a).
* 💡 [Share ideas](/discussions/categories/ideas).
* 🎉 [Show your stuff!](/discussions/categories/show-and-tell)
* 💬 Engage with other community members in [General](/discussions/categories/general)

## Reporting a bug

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). 

1. Before opening an issue, please check to make sure you're using the latest version of the theme.
    ```
    Settings -> Appearance -> find Themes, and click the "Manage" button. 
    ```
    Verify that `Ebullientworks` is the selected theme, and use the Update button to refresh it.

2. Toggle enabled snippets on and off to see if the intersection of those is causing the problem

3. Toggle plugins on and off to see if one of those is causing the problem (the fastest way is
  to temporarily enable safe-mode. If the issue does not occur when all plugins are off, use the
  "[binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) process of elimination" to 
  figure out which plugin has conflicting styles.
  
When you open the issue, include a screenshot or other short screen recording of what you see,
and include any information you gathered from steps 2 and 3 so we can figure out how to get everything
to play nicely. ;)

## Building the theme

- Use `npm run build` to compile Sass in `src` into css in `dist`.
- Use `npm run dev` to watch for changes in `src` and compile them into `dist`.

    `npm run dev` can also copy watched files into test vaults.
    Create a `.dev-target.json` that uses an output file in the dist directory as a key, and provides a string or array of desired targets as the value:
    
    ```json
    {
       "theme.css": [ 'test1/MyTheme.css', '...' ],
       "other.css": "thatOtherPlace/"
    }
    ```
    Notes:
      - The source path should be relative to the `dist` directory.
      - Target paths should be relative to the project root.



## PRs

Pull Requests are welcome! 

This theme uses Sass:

- Keep changes as compact as you can. Do not use `!important`.
- Release builds create the `*.css` files in the root directory. Do not edit them directly.

Thank you! 🍻
