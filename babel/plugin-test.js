// 将 add 函数名修改为 addition
function PluginsTest(ctx) {
  // console.log(Object.keys(ctx));
  const { types, traverse, parse, version } = ctx;
  console.log(version);
  return {
    pre(state) {
      console.log("\n\n pre >>>>>>");
      console.log(Object.keys(state), "\n");
    },
    visitor: {
      VariableDeclaration(paths, state) {
        console.log("VariableDeclaration");
        // console.log(paths, "\n");
        // console.log(state, "\n");
      },
      FunctionDeclaration(paths, state) {
        console.log("FunctionDeclaration");
        console.log(state.opts, "\n"); // 用户传入参数
        const { name } = paths.node.id;
        if (name === "add") {
          paths.node.id.name = "addition";
        }
      },
    },
    post(state) {
      console.log("\n\n post >>>>>>");
      console.log(Object.keys(state), "\n");
    },
  };
}

export default PluginsTest;
