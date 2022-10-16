var fs = require("fs");
var { readdir } = require("fs").promises;
const path = require("node:path");
var format = require("format-json-files");

function process(filename, toMerge) {
  let store = {
    existing: undefined,
    obj: undefined,
    string: undefined,
  };

  const write = () => {
    return fs.writeFile(filename, store.string, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Great.");
      console.log(`I wrote ${filename}.`);
      format(path("./"));
    });
  };

  const read = (filename) => {
    store.existing = JSON.parse(fs.readFileSync(filename, "utf8"));
  };

  const result = (toMerge) => {
    let outgoing = {
      ...store.existing,
      ...toMerge,
    };
    return outgoing;
  };

  if (filename) {
    read(filename);

    store.obj = result(toMerge);
    store.string = JSON.stringify(store.obj);
    write();

    return store.result;
  }
}

function search(filename, root) {
  const tree = async (directory) => {
    const files = await readdir(directory, (list) => {
      return list;
    });
    return { items: files, dir: root };
  };

  const traverse = async (trunk, filename) => {
    if (trunk) {
      return await trunk.items.forEach((branch) => {
        if (fs.statSync(path.join(root, branch)).isDirectory()) {
          let newRoot = path.join(root, branch);
          search(filename, newRoot);
        } else if (branch === filename) {
          console.log(root, branch);
          return path.join(root, branch);
        }
      });
    }
  };

  return tree(root).then((trunk) => traverse(trunk, filename));
}

const procedure = () => {
  const toMerge = {
    main: "./index.ts",
  };

  search("package.json", __dirname).then((filename) => {
    process(filename, toMerge);
  });
};

procedure();
