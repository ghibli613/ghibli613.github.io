Core area for app-wide singletons and cross-cutting concerns.

Implemented in this project:
- Config token: config/app-config.token.ts
- SEO tags manager: services/seo.service.ts
- Route effects for SEO + analytics: services/app-route-effects.service.ts
- Analytics tracking service: services/analytics.service.ts
- HTTP error interceptor: interceptors/http-error.interceptor.ts

Advantages:
- Consistent metadata and canonical links across all routes.
- Centralized analytics event naming and logic.
- One source of truth for app identity, social links, and contact values.
- Shared global HTTP error handling without repeating code in features.

Keep feature-specific logic in src/app/features and reusable UI in src/app/shared.
