import './AboutFeed.css';

export default function AboutFeed() {
  let content;
  content = <div className='about_feed_primer'>
    <span>Nothing to see here yet</span>
  </div>

  // content = <div className='about_feed_primer'>
  //   <p>Orchestrated the development of a robust, scalable, and highly efficient cloud-based web messaging application using ReactJS for the frontend and Python Flask for the backend, implementing a comprehensive CRUD (Create, Read, Update, Delete) functionality.</p>
  //   <p>Leveraged Docker containerization to segregate frontend and backend services, enhancing the modularity, scalability and maintainability of the application.</p>
  //   <p>Utilized AWS XRay and OpenTelemetry Flask instrumentation for distributed tracing, providing a holistic view of the application's performance and identifying bottlenecks effectively.</p>
  //   <p>Integrated decentralized authentication using AWS Amplify and AWS Cognito, enhancing the security and user experience of the application.</p>
  //   <p>Designed and implemented a database solution using Postgres and RDS for user data storage, and DynamoDB and DynamoDB Stream for real-time messaging and conversation updates.</p>
  //   <p>Employed AWS ECS Fargate for container deployment and monitoring, providing reliable and scalable infrastructure to host the application.</p>
  //   <p>Handled Cross-Origin Resource Sharing (CORS) issues through AWS Application Load Balancer and custom domain hosting in Route53, ensuring seamless interaction between different parts of the application.</p>
  //   <p>Implemented serverless image processing using AWS CDK, Lambda, and API Gateway to preprocess images before storage in S3, reducing latency and improving user experience.</p>
  //   <p>Set up a CI/CD pipeline using CodePipeline, CodeBuild, and CodeDeploy, automating the build and deployment process upon code changes in the parent GitHub repository.</p>
  //   <p>Transitioned the entire application architecture and infrastructure to Infrastructure as Code (IaC) using AWS CloudFormation simplifying the management and replication of the application, maximizing its potential and scalability.</p>
  // </div>

  return (<div>
    {content}
  </div>
  );
}