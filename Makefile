setup:
	cp .sample.env .env

migrate:
	pnpm exec prisma migrate dev --name $(name)

generate:
	pnpm exec prisma generate

start:
	pg_ctl -D C:/pgsql_data -l logfile start

stop:
	pg_ctl -D C:/pgsql_data -l logfile stop

.PHONY:
	setup, migrate, generate start stop
