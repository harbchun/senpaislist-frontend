# senpaislist-frontend build for production
APP_ENV=production docker-compose up --build

# build frontend image for ci/cd
docker build --target production --build-arg APP-ENV=production .