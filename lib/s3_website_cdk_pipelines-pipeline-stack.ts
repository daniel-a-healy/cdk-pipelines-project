import { SecretValue, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { S3WebsiteCdkPipelinesStage } from './s3_website_cdk_pipelines-stage';

export class S3WebsiteCdkPipelinesPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
  
      const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
        synth: new pipelines.ShellStep('Synth', {
          // Use a connection created using the AWS console to authenticate to GitHub
          // Other sources are available.
          input: pipelines.CodePipelineSource.gitHub('daniel-a-healy/cdk-pipelines-project', 'main', {
            authentication: SecretValue.secretsManager('github-token'),
          }),
          commands: [
            'npm ci',
            'npm run build',
            'npx cdk synth',
          ],
        }),
      });
      
      
      pipeline.addStage(new S3WebsiteCdkPipelinesStage(this, 'Test', {
        env: {
          account: '257577267527',
          region: 'us-east-2',
        },
      }));

      /*
      pipeline.addStage(new S3WebsiteCdkPipelinesStage(this, 'Prod', {
        env: {
          account: '257577267527',
          region: 'us-east-1',
        },
      }));
      */
    }
  }