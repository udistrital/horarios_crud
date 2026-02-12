import { Injectable, Logger } from '@nestjs/common';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

@Injectable()
export class ParameterStoreService {
  private readonly logger = new Logger(ParameterStoreService.name);
  private readonly client: SSMClient;

  constructor() {
    this.client = new SSMClient({
      region: process.env.AWS_REGION || 'us-east-1',
    });
  }

  async getParameter(name: string, withDecryption = true): Promise<string> {
    const command = new GetParameterCommand({
      Name: name,
      WithDecryption: withDecryption,
    });

    const response = await this.client.send(command);

    if (!response.Parameter?.Value) {
      throw new Error(`Parameter ${name} not found`);
    }

    return response.Parameter.Value;
  }
}
