Shared area for reusable UI and utilities.

## Components

| Component | Selector | Purpose |
|-----------|----------|---------|
| `NewsThumbnailComponent` | `app-news-thumb` | Renders a 16/9 image or a striped placeholder. Inputs: `src`, `alt`. |
| `LogoFrameComponent` | `app-logo-frame` | White framed logo box with CSS-var scaling. Inputs: `src`, `alt`, `scale`, `position`, `padding`. |
| `MissingItemComponent` | `app-missing-item` | "Not found" section with a back link. Inputs: `heading`, `backLabel`, `backRoute`. |
| `ArticleHeaderComponent` | `app-article-header` | Article eyebrow + optional figure + headline + optional deck/meta. Inputs: `eyebrow`, `src`, `alt`, `headline`, `deck`, `meta`. |
| `TagListComponent` | `app-tag-list` | Renders a `<ul class="tags">` for a string array. Input: `tags`. |

## Guidelines

- Place reusable UI components used by two or more features here.
- Keep components stateless — inputs only, no data fetching.
- Add pipes and directives here when they are needed by multiple features.

