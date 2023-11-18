docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ot/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ot/app ../..
