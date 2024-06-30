import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import config from "@/amplify_outputs.json";

Amplify.configure(config);

export const client = generateClient<Schema>({});
