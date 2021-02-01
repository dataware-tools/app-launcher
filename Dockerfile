# syntax=docker/dockerfile:1.0.0-experimental
FROM node:15.7.0-stretch as BUILD_STAGE
SHELL ["/bin/bash", "-c"]
ENV LANG="en_US.UTF-8"

# Install jq
RUN wget -O /bin/jq https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x /bin/jq

# Copy files
RUN mkdir -p /opt/app
COPY ./packag*.json ./.npm* /opt/app/
WORKDIR /opt/app

# Install dependency
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN npm -g config set user root && npm -g config set unsafe-perm true
RUN --mount=type=ssh --mount=type=secret,id=npmrc,target=/root/.npmrc npm install

# Copy other files
COPY ./src /opt/app/src
COPY ./public /opt/app/public
COPY ./craco.config.js /opt/app/
COPY ./tsconfig.json /opt/app/

# Build app
RUN npm run build


#
# Second stage
#
FROM node:15.7.0-stretch

# Install server
RUN npm install -g serve

# Copy files
RUN mkdir -p /opt/app
COPY --from=BUILD_STAGE /opt/app/build /opt/app/build
COPY ./public /opt/app/public
WORKDIR /opt/app

# Set default command
CMD ["serve", "build", "-s", "-l", "3000"]
