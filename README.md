<h1>
    <a href="#hedgedocs">
        <img width="95" align="left" src="https://raw.githubusercontent.com/HedgeDocs/HedgeDocs.github.io/main/docs/assets/favicon.png">
    </a>
    HedgeDocs
</h1>

GitHub Page with tools and guides for modding Sonic games, powered by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

# Adding New Pages
Page layout is defined in `mkdocs.yml`. There you can add new pages and sections to HedgeDocs, by pointing the pages to a markdown file. 

## New Page Guidelines
When adding new pages, please follow these guidelines (check pre-existing pages for examples):

- Be sure to follow the general structure while adding new pages, as in, read the existing pages from the same category you're writing about, and follow their style (what metadata they use, the button styling, etc.)
- Make sure that each markdown file has a title (specified with `#`). The first title in the markdown file is what's going to show up in the webpage's search results
- Guides should include an info box before the title, listing the tools that they're using. The info box should include a link to the relevant tools page
    - If the tools aren't included in the tools page, add them. If that doesn't make sense, then add the links to said tools in the info box. These links should not be direct download links, but a link to the tool's page.
- When adding images to a page, place the images in a folder inside the `assets` folder. Name the folder with the same name of the document file. Example file tree:
```
Editing document.md and I want to add image.png:

├─── 🗒️document.md
└─── 📁assets
     └─── 📁document
          └── 🖼️image.png
```
- Game are grouped by their engine. If the game has no specific engine, use the `Other Engines` category for the game
- Game folders should have their codename as the folder name. When not possible/doesn't exist, use an abbreviation of the game's name
- Not strictly mandatory, but please add a description metadata to every new page. More info below...

## Material for MkDocs features
Since HedgeDocs uses Material for MkDocs, you might want to check its [references](https://squidfunk.github.io/mkdocs-material/reference/) to better understand its features. You can use plain markdown, but you can also use admonitions, buttons, and even icons from Font Awesome.

## HedgeDocs Specific Features
HedgeDocs uses a custom MkDocs theme, which allows you to add extra stuff to your pages:

### Metadata
You can use metadata to add descriptions to your pages. This text will be mainly be used in embeds.

Example:
```
---
description: Level editing tools for Sonic Generations
---

# Level Editing

content
(...)
```

Result:

![](assets/embed.png)


# Testing
You can test your changes locally before committing. To do so:

- Install [Python](https://www.python.org/downloads/)
- Install Material For MkDocs: `pip install mkdocs-material`
- Install necessary MkDocs Plugins
    - git-revision-date-localized-plugin: `pip install mkdocs-git-revision-date-localized-plugin`
    - lxml (required by committers plugin): `pip install lxml`
    - git-committers-plugin-2 (modified with exclude folders): `pip install git+https://github.com/PTKickass/mkdocs-git-committers-plugin-2`
- Serve webpage locally: `mkdocs serve`
  - You can also build a static site instead, using `mkdocs build`
 
The served webpage will auto refresh whenever you make changes to the files.
