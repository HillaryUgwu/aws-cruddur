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

# Vscode setting.json
```
{
    "workbench.colorTheme": "Predawn",
    "workbench.iconTheme": "ayu",
    "python.defaultInterpreterPath": "/usr/bin/python3",
    "python.formatting.provider": "black",
    "workbench.editor.highlightModifiedTabs": true,
    "editor.formatOnSave": true,
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "code-runner.executorMap": {
        "python": "$pythonPath -u $fullFileName"
    },
    "code-runner.clearPreviousOutput": true,
    "code-runner.showExecutionMessage": false,
    "code-runner.ignoreSelection": true,
    "code-runner.saveFileBeforeRun": true,
    "editor.quickSuggestionsDelay": 100,
    "zenMode.centerLayout": false,
    "zenMode.fullScreen": false,
    "zenMode.hideLineNumbers": false,
    "zenMode.hideTabs": false,
    "editor.minimap.enabled": false,
    "workbench.settings.openDefaultSettings": true,
    "workbench.settings.editor": "json",
    "workbench.settings.useSplitJSON": true,
    "workbench.statusBar.feedback.visible": false,
    "workbench.startupEditor": "newUntitledFile",
    "[python]": {
        "editor.formatOnType": true
    }
}
```
