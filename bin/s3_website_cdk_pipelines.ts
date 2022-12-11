#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3WebsiteCdkPipelinesPipelineStack } from '../lib/s3_website_cdk_pipelines-pipeline-stack';

const app = new cdk.App();
new S3WebsiteCdkPipelinesPipelineStack(app, 'S3WebsiteCdkPipelinesPipelineStack', {
  env: {account: '257577267527', region: 'us-east-2'},
});