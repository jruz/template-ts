import { defineRule } from "@oxlint/plugins";

const noReduce = defineRule({
  create(context) {
    return {
      MemberExpression(node) {
        const property = node.property;
        const identifier = !node.computed && property.type === "Identifier";
        const literal = property.type === "Literal" ? property.value : null;
        const name = identifier ? property.name : literal;
        if (name === "reduce" || name === "reduceRight") {
          context.report({ messageId: "noReduce", node: property });
        }
      },
    };
  },
  meta: {
    docs: { description: "Disallow reduce and reduceRight method access" },
    messages: {
      noReduce:
        "Avoid reduce and reduceRight. Prefer Array.fromAsync, map, filter, find, or an explicit state transition.",
    },
    schema: [],
    type: "suggestion",
  },
});

export default noReduce;
