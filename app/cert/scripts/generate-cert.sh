openssl req  -nodes -new -x509  \
    -keyout "C:\Users\chuan\Documents\GitHub\mini-message-board\cert\server.key" \
    -out "C:\Users\chuan\Documents\GitHub\mini-message-board\cert\server.cert" \
    -subj "/C=US/ST=NY/L=Queens/O=Self/OU=Com/CN=localhost:3000"