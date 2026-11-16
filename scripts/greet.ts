import { z } from "zod";
import { output } from "./lib/output.ts";

const ArgsSchema = z.tuple([z.string().min(1)]).readonly();

export const parseName = (args: readonly string[]): string => {
  const [name] = ArgsSchema.parse(args);
  return name;
};

export const greet = (name: string): string => `hello ${name}`;

const main = (): void => {
  const args = process.argv.slice(2);
  const name = parseName(args);
  const greeting = greet(name);
  output.text(greeting);
};

if (import.meta.main) {
  main();
}
