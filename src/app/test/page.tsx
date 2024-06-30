import { ConsoleLogger } from "aws-amplify/utils";

const logger = new ConsoleLogger("MyLogger");

export default function TestPage() {
  logger.info("Test page");

  return <div>Test page</div>;
}
