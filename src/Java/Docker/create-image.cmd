docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ot-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ot-java/app ../../..
