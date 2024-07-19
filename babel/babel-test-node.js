// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse");
// const generate = require("@babel/generator");
// const types = require("@babel/types");
// const path = require("path");
// const fs = require("fs");
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import types from "@babel/types";
import fs from "fs";

// 将 add 函数名修改为 nodeAdd
const run = (_path) => {
  const source = fs.readFileSync(_path, "utf-8");
  const ast = parser.parse(source, {
    sourceType: "module",
  });

  traverse.default(ast, {
    enter(path) {
      if (
        types.isFunctionDeclaration(
          path.node,
          types.isIdentifier(path.node.id, { name: "add" })
        )
      ) {
        path.node.id.name = "nodeAdd";
      }
    },
  });

  const code = generate.default(ast).code;
  fs.writeFileSync("./lib/node_entry.js", code);
};

run("./src/entry.js");
