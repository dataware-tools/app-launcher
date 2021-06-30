#!/usr/bin/env sh
#
# Entrypoint for a container
#

# Fix Auth0's configurations
[[ -z "${REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN}" ]] \
  && REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN="dataware-tools.us.auth0.com"
[[ -z "${REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID}" ]] \
  && REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID="ETb1RhJEbtXlFgWtaHzl5kPCkaYqhTVl"
[[ -z "${REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_API_URL}" ]] \
  && REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_API_URL="https://demo.dataware-tools.com/"

sed -i -e "s/ETb1RhJEbtXlFgWtaHzl5kPCkaYqhTVl/${REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID}/g" /opt/app/build/static/js/*.js
sed -i -e "s/dataware-tools.us.auth0.com/${REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN}/g" /opt/app/build/static/js/*.js
sed -i -e "s|https://demo.dataware-tools.com/|${REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_API_URL}|g" /opt/app/build/static/js/*.js

exec "$@"
