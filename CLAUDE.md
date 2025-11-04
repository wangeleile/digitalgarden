# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Digitalgarden** ist ein digitaler Garten basierend auf **Obsidian + Quartz 4**. Es kombiniert:
- Obsidian als Schreibumgebung für Notizen
- Quartz 4 als Static Site Generator
- GitHub für Versionskontrolle
- Design inspiriert von wangeleile.de

## Tech Stack

- **Editor:** Obsidian (Markdown-Notizen)
- **Static Site Generator:** Quartz 4 (TypeScript/React)
- **Hosting:** GitHub Pages oder Vercel
- **Version Control:** Git + GitHub
- **Styling:** SCSS (custom.scss für wangeleile.de-Style)

## Project Structure

```
digitalgarden/
├── content/                 # Obsidian Vault
│   ├── index.md            # Startseite
│   ├── blog/               # Blogposts
│   ├── notes/              # Evergreen Notes
│   ├── projects/           # Projekte
│   └── templates/          # Obsidian Templates
├── src/
│   ├── styles/
│   │   └── custom.scss     # wangeleile.de-ähnliches Styling
│   └── ...                 # Quartz Komponenten
├── quartz.config.ts        # Quartz Hauptkonfiguration
├── package.json
└── CLAUDE.md              # Diese Datei
```

## Common Development Commands

```bash
# Abhängigkeiten installieren
npm install

# Dev-Server starten (http://localhost:3000)
npm run preview

# Production Build
npm run build

# Obsidian Git Pull (Sync mit GitHub)
npm run sync
```

## Workflow

### 1. Schreiben in Obsidian
- Öffne den Obsidian Vault unter `/content`
- Schreibe Notizen in Markdown
- Nutze [[Wiki-Links]] für Verlinkungen
- Tags für Organisation

### 2. Mit Git synchronisieren
- Nutze **Obsidian Git Plugin** (auto-sync alle 30 Min)
- Oder manuell: `npm run sync`

### 3. Veröffentlichen
- Änderungen werden automatisch zu GitHub gepusht
- GitHub Actions baut die Website neu
- Quartz generiert die HTML-Seiten

### 4. Online live
- GitHub Pages zeigt die Website automatisch an

## Design & Styling

- **Hauptkonfiguration:** `quartz.config.ts:1-50`
- **Benutzerdefinierte Styles:** `src/styles/custom.scss`
- **Farben:** Inspiriert von wangeleile.de
  - Primary Accent: `#ffcd00` (Gelb)
  - Dark: `#1a1a1a`
  - Light: `#ffffff`

## Obsidian Plugins (empfohlen)

1. **Obsidian Git** - GitHub-Synchronisation
2. **Templater** - Note-Templates
3. **Dataview** - Dynamische Abfragen
4. **Tag Wrangler** - Tag-Verwaltung
5. **Natural Language Dates** - Datumseingabe

## GitHub Integration

### Setup
1. Personal Access Token erstellen (Settings → Developer → PAT)
2. Scopes: `repo` (full control)
3. Token in Obsidian Git speichern

### Automation
- Obsidian Git pushed automatisch alle 30 Minuten
- GitHub Actions triggert Quartz Build
- Neue Website ist nach 1-2 Min live

## Key Files Erklärung

- **quartz.config.ts** (Zeile 1-50): Hauptkonfiguration für Generator und Plugins
- **src/styles/custom.scss** (Zeile 1-80): Farben und Styling für wangeleile.de-Design
- **content/index.md** (Startseite): Homepage mit Dataview-Listen

## Tipps für Digitalgarden-Setup

- Nutze `[[Notiz]]` Syntax für Wiki-Links (werden automatisch verlinkt)
- Tagge deine Notizen konsistent: `#thema/obsidian`, `#projekt/digitalgarden`
- Private Notizen in `/content/private/` (werden nicht veröffentlicht)
- Dataview-Queries für automatische Indizes nutzen

## Performance & Optimierung

- Quartz optimiert automatisch für schnelle Ladezeiten
- SCSS wird zu minifiziertem CSS
- Bilder sollten optimiert sein (max 1200px width)
- Static Site = schnell und sicher

## Deployment

### GitHub Pages (Kostenlos)
```bash
git push origin main
# Automatischer Deploy via GitHub Actions
```

### Vercel (Kostenlos, schneller)
```bash
# Vercel mit GitHub Repository verbinden
# Automatischer Deploy bei Pushes
```

## Nützliche Links

- [Quartz 4 Docs](https://quartz.jzhao.xyz/)
- [Obsidian Vault Format](https://help.obsidian.md/)
- [GitHub Pages Docs](https://pages.github.com/)
