import { describe, expect, test } from "bun:test";
import { greet, parseName } from "./greet.ts";

describe("greet", () => {
  test("greets the given name", () => {
    const greeting = greet("world");
    expect(greeting).toBe("hello world");
  });
});

describe("parseName", () => {
  test("returns the single argument", () => {
    const name = parseName(["world"]);
    expect(name).toBe("world");
  });

  test.each([{ args: [] }, { args: [""] }, { args: ["world", "extra"] }])(
    "rejects invalid arguments: $args",
    ({ args }) => {
      expect(() => parseName(args)).toThrow();
    },
  );
});

describe("cli", () => {
  test("prints the greeting", async () => {
    const proc = Bun.spawn(["bun", "scripts/greet.ts", "world"]);
    const stdout = await new Response(proc.stdout).text();
    expect(await proc.exited).toBe(0);
    expect(stdout).toBe("hello world\n");
  });

  test("fails without a name", async () => {
    const proc = Bun.spawn(["bun", "scripts/greet.ts"], { stderr: "pipe" });
    expect(await proc.exited).not.toBe(0);
  });
});
