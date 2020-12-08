import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const test: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'I am working correctly! :)',
        input: event,
      },
      null,
      2
    ),
  };
};
