var fs = require("fs");
var { readdir } = require("fs").promises; 
const path = require("node:path");
var format = require('format-json-files');

function process(filename, toMerge) {
  
  let store = {
    existing: undefined,
    obj: undefined,
    string: undefined
  };

  const write = () => {
    return fs.writeFile(filename, store.string, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Great.");
      console.log(`I wrote ${filename}.`);
      format('./');
    });
  };

  const read = (filename) => {
    store.existing = JSON.parse(fs.readFileSync(filename, 'utf8'));
    console.log(store.existing);
  };

  read(filename);

  const result = (toMerge) => {
    let outgoing = {
      ...store.existing,
      ...toMerge,
    };
    return outgoing;
  };

  read(filename);

  store.obj = result(toMerge);
  store.string = JSON.stringify(store.obj);
  write();

  return store.result;
}

function search(filename, root) {
  const tree = async (directory) => {
    const files = await readdir(directory, (list) => {
      return list;
    });
    return files;
  };

  const traverse = async (filename, trunk) => {
    let result;
    if (trunk) {
      trunk.forEach((branch) => {
        if (fs.statSync(branch).isDirectory()) {
          traverse(branch);
        } else if (branch === filename) {
          result = path.join(root, branch);
        }
      });
    }
    return result;
  };

  return tree(root).then((trunk) => traverse(filename, trunk));
}

const procedure = () => {
  const toMerge = {
    main: "./index.ts",
  };

  search("package.json", __dirname).then((filename) =>{
    process(filename, toMerge)
  });
};

procedure();
