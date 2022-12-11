import { CfnOutput, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { S3WebsiteCdkPipelinesStack } from './s3_website_cdk_pipelines-stack';

export class S3WebsiteCdkPipelinesStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const s3Website = new S3WebsiteCdkPipelinesStack(this, 'S3Website');

        this.urlOutput = this.urlOutput;
    }
}