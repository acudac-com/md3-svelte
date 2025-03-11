FROM node:slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app
RUN pnpm install
RUN pnpm run build

FROM oven/bun:latest
COPY --from=builder /app/build /app/build
WORKDIR /app/build
EXPOSE 3000
CMD ["bun", "run", "."]
