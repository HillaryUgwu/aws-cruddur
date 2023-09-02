#!/usr/bin/bash

# name: Getting started
bash $CODESPACE_VSCODE_FOLDER/bin/bootstrap

#  name: postgres
curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc|sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list
sudo apt update
sudo apt install -y postgresql-client-13 libpq-dev

export GITPOD_IP=$(curl ifconfig.me)
source "$CODESPACE_VSCODE_FOLDER/bin/rds/update-sg-rule"

# name: fargate
cd ..
curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_64bit/session-manager-plugin.deb" -o "session-manager-plugin.deb"
sudo dpkg -i session-manager-plugin.deb

# name: cdk
npm install aws-cdk -g
cd $CODESPACE_VSCODE_FOLDER/thumbing-serverless-cdk
cp .env.example .env && npm i && cd ..

# name: react-js
# ruby "$CODESPACE_VSCODE_FOLDER/bin/frontend/generate-env"
cd frontend-react-js && npm i && cd ..

# name: flask
# ruby "$CODESPACE_VSCODE_FOLDER/bin/backend/generate-env"
cd backend-flask && pip install -r requirements.txt && cd ..
