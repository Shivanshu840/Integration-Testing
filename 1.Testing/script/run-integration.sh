docker-compose up -d
echo "waiting for database to be ready"
./script/wait-for-it.sh "postgresql://postgres:12217355@localhost:5432/postgres"
echo "database is ready"
npx prisma migrate dev --name init
npm run test
docker-compose down