import { definePlugin } from "@oxlint/plugins";
import noComments from "./no-comments.ts";
import noEnums from "./no-enums.ts";
import noReduce from "./no-reduce.ts";

const plugin = definePlugin({
  meta: { name: "local" },
  rules: {
    "no-comments": noComments,
    "no-enums": noEnums,
    "no-reduce": noReduce,
  },
});

export default plugin;
