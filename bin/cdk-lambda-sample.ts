#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaSampleStack } from '../lib/cdk-lambda-sample-stack';

const app = new cdk.App();
new CdkLambdaSampleStack(app, 'CdkLambdaSampleStack');
