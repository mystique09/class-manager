setup:
	cp .sample.env .env

migrate:
	pnpm exec prisma migrate dev --name $(name)

generate:
	pnpm exec prisma generate

.PHONY:
	setup, migrate, generate
