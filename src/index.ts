import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import axios from "axios";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);

  const { data: todos } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: todos,
    }),
  };
};
