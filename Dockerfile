FROM denoland/deno:alpine-1.21.0
WORKDIR /service
COPY . /service/
ENTRYPOINT [ "/service/entrypoint.sh" ]
