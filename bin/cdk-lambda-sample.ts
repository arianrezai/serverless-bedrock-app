#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaStack } from '../lib/serverless-bedrock-app';

const app = new cdk.App();
new CdkLambdaStack(app, 'CdkLambdaSampleStack');
