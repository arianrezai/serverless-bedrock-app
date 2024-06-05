import { Stack, StackProps, App,} from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkLambdaStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
    new lambda.Function(this, 'LambdaNodeStack', {
      code: lambda.Code.fromAsset('./src'),
      functionName: "lambdaNode",
      handler: 'index.handler',
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_16_X,
      timeout: cdk.Duration.seconds(300),
    });
  }
}
