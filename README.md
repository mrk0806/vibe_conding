# PZN Bun + Elysia + Drizzle Project

This is a modern backend project built with Bun, ElysiaJS, Drizzle ORM, and MySQL.

## Tech Stack
- **Runtime**: [Bun](https://bun.sh)
- **Framework**: [ElysiaJS](https://elysiajs.com)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Database**: MySQL

## Prerequisites
- [Bun](https://bun.sh) installed.
- MySQL instance running.

## Getting Started

### 1. Install dependencies
```bash
bun install
```

### 2. Environment Setup
Copy `.env.example` to `.env` and fill in your database credentials:
```bash
cp .env.example .env
```

### 3. Database Migrations
Generate migrations using Drizzle Kit:
```bash
bunx drizzle-kit generate
```
Push the schema to your database:
```bash
bunx drizzle-kit push
```

### 4. Run the Server
Development mode:
```bash
bun run dev
```
Production mode:
```bash
bun run src/index.ts
```

## Project Structure
- `src/index.ts`: Server entry point.
- `src/db/`: Database schema and connection client.
- `drizzle.config.ts`: Drizzle configuration.
