import { it } from "node:test";
import { RuleTester } from "oxlint/plugins-dev";
import noReduce from "./no-reduce.ts";

const tester = new RuleTester({
  languageOptions: { parserOptions: { lang: "ts" } },
});

await it("reports accumulator methods with replacement guidance", () => {
  tester.run("no-reduce", noReduce, {
    invalid: [
      {
        code: "items.reduce(update, initial)",
        errors: [{ messageId: "noReduce" }],
      },
      {
        code: "items?.reduceRight(update, initial)",
        errors: [{ messageId: "noReduce" }],
      },
      {
        code: "items['reduce'](update, initial)",
        errors: [{ messageId: "noReduce" }],
      },
      {
        code: "const combine = items['reduceRight'];",
        errors: [{ messageId: "noReduce" }],
      },
    ],
    valid: ["items.map(transform)", "items[key]", "items[reduce]"],
  });
});
