import { defineConfig } from "./quartz/utils/configuration"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Konfiguration für Digitalgarden
 * Design inspiriert von wangeleile.de
 */
export default defineConfig({
  configuration: {
    pageTitle: "Digitalgarden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "de-DE",
    baseUrl: "digitalgarden.local", // Später https://dein-domain.com
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableDataview: true }),
      Plugin.GitisticQuartz(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
      Plugin.TableOfContents(),
    ],
    filters: [Plugin.RemoveFiles(["private"])],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
})
