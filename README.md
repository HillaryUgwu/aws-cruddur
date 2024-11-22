# AWS Cruddur: A Cloud-based full stack application 

![](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiYlJ5MU1tNFMrc2dVQklIRm5PVDJTNUkvcmQ4c0RFRUg5dmhwUk1Nc3Q5dDVCeDVHVHhPbk5VRHoxQjRxSVNoWVFicnc5WExweFVjd3JzRWxLVGlMOWlRPSIsIml2UGFyYW1ldGVyU3BlYyI6IjJhdXc5cW5SNmV2eFoyOXkiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main)

- Application: Cruddur
- Cohort: 2023-A1

This is the starting codebase that will be used in the FREE AWS Cloud Project Bootcamp 2023

![Cruddur Graphic](_docs/assets/cruddur-banner.jpg)

![Cruddur Screenshot](_docs/assets/cruddur-screenshot.png)

## Architecture
The architecture of the project is described in the below diagram:
![Cruddur architecture diagram](https://github.com/HillaryUgwu/aws-cruddur/assets/29102246/d3af07e4-a2e1-4c7e-92e1-826c95055db1)

## AWS services used

The application is deployed on AWS utilizing several AWS services. The backend uses a **Flask-based Python** application deployed to a **Docker** container running on **ECS Fargate**.

Frontend uses **ReactJs** statically hosted on **S3**, then cached and distributed via **CloudFront**.

The application is instrumented using **X-Ray** as an observability tool. 

**Amplify** and **Cognito** are used for decentralized authentication.

**RDS Postgres** database is used for user data storage. **DynamoDB** and **DynamoDB Stream** are used as a single table design for real-time messaging and conversation updates.

A hosted zone on **Route 53** is linked to the custom domain cloudproject.online. **Application load balancer** is used to forward requests to the frontend and backend containers.  

Serverless image processing is implemented using **API Gateway**, two **Lambda** functions, **presigned URL**, **S3** and **CloudFront**.

**CodePipeline**, **CodeBuild** and **CodeDeploy** are used for CI/CD.

The first version of the project was completed by partially clicking through the AWS console and utilising AWS CLI. Later on, the infrastructure was re-created using **CloudFormation**. Additionally, the serverless image processing was implemented with **AWS CDK** using **Typescript**.  


## Third-party tools that were used

**Honeycomb's OpenTelemetry Flask instrumentation** was used as an observability tool for distributed tracing. It was very straightforward to instrument and easy to use.

**Rollbar** was configured to be used for monitoring and bug-tracking.

## Instructions

At the start of the bootcamp you need to create a new Github Repository from this template.

## Journal

The `/journal` directory contains

- [ ] [Week 0](journal/week0.md)
- [ ] [Week 1](journal/week1.md)
- [ ] [Week 2](journal/week2.md)
- [ ] [Week 3](journal/week3.md)
- [ ] [Week 4](journal/week4.md)
- [ ] [Week 5](journal/week5.md)
- [ ] [Week 6](journal/week6.md)
- [ ] [Week 7](journal/week7.md)
- [ ] [Week 8](journal/week8.md)
- [ ] [Week 9](journal/week9.md)
- [ ] [Week 10](journal/week10.md)
- [ ] [Week 11](journal/week11.md)
- [ ] [Week 12](journal/week12.md)
- [ ] [Week 13](journal/week13.md)

# Vscode extension.json

```json
{
    "recommendations": [
        "ms-python.python",
        "ms-python.vscode-pylance",
        "charliermarsh.ruff",
        "github.copilot",
        "tamasfe.even-better-toml",
        "aaron-bond.better-comments",
        "github.vscode-github-actions",
        "bierner.markdown-mermaid",
        "ms-vscode-remote.remote-containers",
    ]
}
```

# Vscode setting.json
## Folder setting
```json
{
    // Python settings
    "python.analysis.autoSearchPaths": true,
    "python.analysis.diagnosticSeverityOverrides": {
        "reportMissingImports": "none"
    },
    "python.analysis.extraPaths": [
        "${workspaceFolder}/src"
    ],
    "python.envFile": "${workspaceFolder}/.env",
    "python.terminal.activateEnvironment": true,
    "terminal.integrated.env.linux": {
        "PYTHONPATH": "${workspaceFolder}:${env:PYTHONPATH}"
    },
    "python.defaultInterpreterPath": "${workspaceFolder}/.venv/bin/python",
    // Test settings
    "python.testing.pytestEnabled": true,
    "python.testing.unittestEnabled": false,
    "python.testing.cwd": "${workspaceFolder}/tests",
    "python.testing.pytestPath": "${workspaceFolder}/.venv/bin/pytest",
    "python.testing.autoTestDiscoverOnSaveEnabled": true,
}
```

## User setting
```json
{
    // General settings
    "security.workspace.trust.untrustedFiles": "newWindow",
    "window.zoomLevel": 0,
    "window.commandCenter": false,
    "files.exclude": {
        ".git": true,
        "**/.git": false
    },
    "extensions.autoUpdate": "onlyEnabledExtensions",
    // Git settings
    "git.autofetch": true,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.showActionButton": {
        "commit": false,
        "publish": false,
        "sync": false
    },
    "github.copilot.enable": {
        "*": true,
        "plaintext": false,
        "scminput": false,
        "yaml": true
    },
    // Explorer settings
    "explorer.excludeGitIgnore": true,
    "explorer.autoReveal": true,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    // Workbench settings
    "workbench.colorTheme": "Default Dark+",
    "workbench.iconTheme": "ayu",
    "workbench.editor.enablePreview": false,
    "workbench.editor.tabSizing": "shrink",
    "workbench.settings.editor": "json",
    // Editor settings
    "ruff.importStrategy": "useBundled",
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnSaveMode": "file",
    "editor.codeActionsOnSave": {
        "source.organizeImports": "always",
        "source.fixAll": "always"
    },
    // "pylint.args": [
    //     "--max-line-length=150"
    // ],
    "files.autoSave": "onFocusChange",
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    // Debug settings
    "debug.toolBarLocation": "docked",
    // Terminal settings
    "terminal.integrated.tabs.enabled": true,
    "terminal.integrated.tabs.hideCondition": "never",
    "terminal.integrated.tabs.location": "right",
    // Markdown settings
    "markdown.preview.scrollEditorWithPreview": true,
    "markdown.preview.scrollPreviewWithEditor": true
}
```
