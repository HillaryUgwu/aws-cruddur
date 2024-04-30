#!/usr/bin/bash

# name: Getting started
pwd
while [ -z "$CODESPACE_VSCODE_FOLDER" ]
do
  echo $CODESPACE_VSCODE_FOLDER
  echo "/workspaces/${localWorkspaceFolderBasename}"
  echo "Waiting for CODESPACE_VSCODE_FOLDER to be set..."
  sleep 1
done

# name: Bootstrapping
cd $CODESPACE_VSCODE_FOLDER
bash "$CODESPACE_VSCODE_FOLDER/bin/init-envars"
echo "export WORKSAPCE_ROOT_PATH='$CODESPACE_VSCODE_FOLDER'" >> ~/.envar
echo "export WORKSPACE_NAME_ID='$CODESPACE_NAME'" >> ~/.envar
echo "export WORKSPACE_HOST_PORT='$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN'" >> ~/.envar
bash "$CODESPACE_VSCODE_FOLDER/bin/bootstrap"
export WORKSPACE_IP=$(curl ifconfig.me)

# name: postgres
cd $CODESPACE_VSCODE_FOLDER/..
echo "Installing Postgres"
curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
sudo apt update
sudo apt install -y postgresql-13 postgresql-client-13 libpq-dev

# name: fargate
echo "Installing Fargate"
curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/ubuntu_64bit/session-manager-plugin.deb" -o "session-manager-plugin.deb"
sudo dpkg -i session-manager-plugin.deb

# name: aws-sam
echo "Installing AWS SAM"
wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip
unzip aws-sam-cli-linux-x86_64.zip -d sam-installation
sudo ./sam-installation/install

# name: Cargo 
echo "Installing Cargo"
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
sudo apt-get update; sudo apt install build-essential
source $HOME/.cargo/env
cargo install cfn-guard
cfn-guard --version
bundle update --bundler
pip install cfn-lint
gem install cfn-toml

# name: cdk
echo "Installing AWS CDK"
npm install aws-cdk -g
cd $CODESPACE_VSCODE_FOLDER/thumbing-serverless-cdk
cp .env.example .env && npm i && cd ..

# name: react-js
cd frontend-react-js && npm i && cd ..

# name: flask
cd backend-flask && pip install -r requirements.txt && cd ..
