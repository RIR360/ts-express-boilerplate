# ts-express-boilerplate

A high-performance, strictly typed starter for modern Node.js applications. Designed for developers who want the latest features of Express 5 and Node 24 without the bloat.

## ⚡ Core Stack
- **Node 24**: Utilizing the latest LTS/Active features and performance.
- **Express 5**: Native support for async error handling (no `try/catch` wrappers).
- **TypeScript (ESM)**: Modern ES Modules with strict type safety.
- **Docker Ready**: Multi-stage builds for ultra-small production images (~150MB).

## 📁 Structure
```text
├── src/
│   ├── app.ts        # App configuration & Global Error Handler
│   ├── server.ts     # Entry point & Server listener
│   └── utils/        # AppError class for type-safe exceptions
├── dockerfile        # Optimized multi-stage build
├── tsconfig.json     # Modern TS configuration
└── .dockerignore     # Keeps your images clean