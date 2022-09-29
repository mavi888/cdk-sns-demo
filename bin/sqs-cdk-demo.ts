#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SnsCdkDemoStack } from '../lib/sns-cdk-demo-stack';
import { SnsSqsCdkDemoStack } from '../lib/sns-sqs-cdk-demo-stack';
import { SnsFiltersCdkDemoStack } from '../lib/sns-filters-cdk-demo-stack';

const app = new cdk.App();
new SnsCdkDemoStack(app, 'SnsCdkDemoStack', {});
new SnsSqsCdkDemoStack(app, 'SnsSqsCdkDemoStack', {});
new SnsFiltersCdkDemoStack(app, 'SnsFiltersCdkDemoStack', {});
