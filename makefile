# Build docker
buildprod:
	docker build \
	--build-arg NODE_ENV=production \
	--build-arg STRAPI_URL=http\://localhost\:1337 \
	-t emblogprod:latest \
	-f Dockerfile.prod .
