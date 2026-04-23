# Obsidian + Vue + Vite Starter Template

This is a template for building [Obsidian](https://obsidian.md) plugins using [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/).

It is based on the official [obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin), but has been refactored to provide a modern, Vue-based development workflow with a more powerful build system.

## Key Differences from the Official Template

This template modernizes the plugin development experience by replacing esbuild with Vite and adding first-class support for Vue.

| Feature               | Official Template (**esbuild**)       | This Template (**Vite + Vue**)                                             |
| --------------------- | ------------------------------------- | -------------------------------------------------------------------------- |
| **Bundler**           | [esbuild](https://esbuild.github.io/) | [Vite](https://vitejs.dev/) for a richer development experience.           |
| **UI Framework**      | Plain TypeScript / HTML DOM           | [Vue 3](https://vuejs.org/) with Single File Components (`.vue` files).    |
| **Project Structure** | Source files in the root directory    | Source code in `src/`, static assets like `manifest.json` in `public/`.    |
| **Hot Reloading**     | Standard `esbuild --watch`            | Optimized for the Obsidian **Hot-Reload** community plugin out-of-the-box. |
| **Configuration**     | `esbuild.config.mjs`                  | `vite.config.mts` (a modern, ESM-based config).                            |

## Sample Functionality

This template demonstrates the minimal setup required to get a Vue component running inside an Obsidian view:

-   **Ribbon Icon**: Adds a "dice" icon to the Obsidian ribbon.
-   **Vue View**: Clicking the ribbon icon opens a custom view in the right-hand sidebar, which renders a sample Vue component with a simple counter.

## How to Use This Template

The development workflow is slightly different from the original template to accommodate Vite and enable a better hot-reloading experience.

1.  **Clone this repository** to your local machine.
2.  **Install dependencies**. Make sure you have Node.js v16+ installed.
    ```bash
    npm install
    ```
3.  **Start the development server in watch mode**. This will create the initial build in a `dist/` folder.
    ```bash
    npm run dev
    ```
4.  **Link the plugin to your Obsidian vault.**

    You need to create a symbolic link from the dist folder in this repository to your vault's plugins folder. This makes Obsidian aware of your plugin and enables hot reloading.

    Replace `/path/to/your/vault` with the actual path to your Obsidian vault.

    **On macOS / Linux / Git Bash on Windows:**

    ```bash
    ln -s "$(pwd)/dist" "/path/to/your/vault/.obsidian/plugins/obsidian-sample-plugin-vue-vite"
    ```

    **On Windows (Command Prompt / PowerShell):**

    You must run this command in a shell with Administrator privileges.

    ```bash
    mklink /D "\path\to\your\vault\.obsidian\plugins\obsidian-sample-plugin-vue-vite" "$(pwd)\dist"
    ```

5.  **Enable the plugin** in Obsidian's settings.

Now, any changes you make to the source code will be built automatically, and the "Hot-Reload" plugin (if installed) will refresh your plugin inside Obsidian.

## Releasing and Further Information

For general guidance on plugin development, such as how to release new versions or submit your plugin to the community store, please consult the official documentation in the [obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin) README. This template only provides the boilerplate for using Vue and Vite.

## Acknowledgements

This template would not be possible without the solid foundation provided by the official [obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin) created by the Obsidian team. A big thank you to them for their excellent work in supporting the plugin developer community.
