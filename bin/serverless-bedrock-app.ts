#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ServerlessBedrockAppStack } from '../lib/serverless-bedrock-app-stack';

const app = new cdk.App();
new ServerlessBedrockAppStack(app, 'ServerlessBedrockAppStack');
