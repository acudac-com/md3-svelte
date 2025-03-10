FROM node:slim AS node-builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM oven/bun:latest
COPY --from=node-builder /app/build /app/build
WORKDIR /app/build
EXPOSE 3000
CMD ["bun", "run", "."]
