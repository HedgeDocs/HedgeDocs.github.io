<h1>
    <a href="#hedgedocs">
        <img width="95" align="left" src="https://raw.githubusercontent.com/HedgeDocs/HedgeDocs.github.io/main/hedgedocs/web/images/favicon.png">
    </a>
    Hedge<span style="font-weight: 200;">Docs</span>
</h1>

GitHub Page with tools and guides for modding Sonic games, powered by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Project Structure

```
┌─── 📁assets      ────────► Assets used for this README file.
└─── 📁hedgedocs   ────────► Data for the HedgeDocs website.
     ├─── 📁web    ────────► Custom themes, scripts and other files unrelated to documentation.
     └─── 📁...    ────────► Rest of the folders are directly related to documentation.
```

## Editing and Creating Pages
HedgeDocs pages are written in markdown, just like GitHub's own markdown files! One of the best ways to write markdown text files is to use [Visual Studio Code](https://code.visualstudio.com/), which allows you to preview the page you are currently typing by pressing CTRL+Shift+V, making it easy to see how your page might look like on the website. For a more accurate look, you absolutely should setup the website locally by following the instructions in the **Testing** chapter.

## Adding New Pages
We appreciate every contribution that's made to HedgeDocs, as every single one helps the modding community to grow and make better mods.

Adding a new page to HedgeDocs is easy! After creating a fork of this repository, edit it by following these steps:
1. Add your page in the appropriate place by editing the `mkdocs.yml` file. You can even create new sections if you don't see one that fits your needs!
2. Create a markdown file in the location you specified in the previous step, and that's it! Just be sure to follow the guidelines mentioned below!

After you added your contributions, open a pull request, and if approved, your page will be shown in HedgeDocs for the whole world to see.

### New Page Guidelines
When adding new pages, please follow these guidelines (check pre-existing pages for examples):

- Be sure to follow the general structure while adding new pages, as in, read the existing pages from the same category you're writing about, and follow their style (what metadata they use, the button styling, etc.)
- Make sure that each markdown file has a title at the start (specified with `#`). The first title in the markdown file is what's going to show up in the webpage's search results
- Related to the previous rule, but there should only be one `#` title per page, and that is the page's title. All other titles should start at `##`
- Guides should include an info box before the title, listing the tools that they're using. Each tool mentioned in that box should be a link to a HedgeDocs page, which contains a link to said tool
    - If the tools aren't included in the tools page, add them. If that doesn't make sense, then add the links to said tools in the info box. These links should not be direct download links, but a link to the tool's page, is applicable.
    - This rule helps avoiding fragmentation of tool versions. By making every tool link point to a HedgeDocs tool page, you can be sure that everyone will download the version that HedgeDocs has stored in the tools category, and update it if necessary in the future.
- When adding images or other files to a page, place the files in a folder inside the `assets` folder. Name the folder with the same name of the document file. Example file tree:
```
Editing document.md and I want to add image.png and tool.zip:

├─── 🗒️document.md
└─── 📁assets
     └─── 📁document
          ├─── 🖼️image.png
          └─── 💾tool.zip
```
- Game are grouped by their engine. If the game has no specific engine, use the `Other Engines` category for the game
- Game folders should have their codename as the folder name. When not possible/doesn't exist, use an abbreviation of the game's name
- New pages should have a description metadata tag, which will be used in embeds. This helps people know what the page is about. More info in the next section...

## Material for MkDocs features
Since HedgeDocs uses Material for MkDocs, you might want to check its [references](https://squidfunk.github.io/mkdocs-material/reference/) to better understand its features. You can use plain markdown, but you can also use admonitions, buttons, and even icons from Font Awesome.

### HedgeDocs Specific Features
HedgeDocs modifies some parts of the "Material for MkDocs" theme, which allows you to add some extra fluff to your pages:

#### Metadata
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


## Testing
You can test your changes locally before committing. To do so:

- Install [Python](https://www.python.org/downloads/)
- Install Material For MkDocs: `pip install mkdocs-material --upgrade`
- Install necessary MkDocs Plugins
    - git-revision-date-localized-plugin: `pip install mkdocs-git-revision-date-localized-plugin --upgrade`
    - lxml (required by committers plugin): `pip install lxml --upgrade`
    - git-committers-plugin-2: `pip install mkdocs-git-committers-plugin-2 --upgrade`
- Serve webpage locally: `mkdocs serve`
    - You can also build a static site instead, using `mkdocs build`
 
The served webpage will auto refresh whenever you make changes to the files.
