---
id: docs-how-to-contribute
title: How to contribute
description: 
hide_table_of_contents: false 
draft: true/false
---

# Ways to Contribute to the code

If you notice any bugs, please open an issue. If you have more involved suggestions for the development of the Sui simulator, we encourage you to add your feature suggestions on our website at https://sui-simulator.features.vote/board.


If If you're interested in working on an issue, we recommend commenting on it. This will allow a maintainer to assist you, and will inform others that you are working on it.

**We'll always need help improving documentation, creating features, and writing tests.**

## The workflow of Creating and Submitting a Pull Request
```Bash
cd sui-simulator-folk
git remote add upstream https://github.com/Weminal-labs/sui-simulator-vscode
git fetch upstream
git pull --rebase upstream main
```

:::note
NOTE: The directory sui-simulator-folk represents your fork's local copy.
:::

After that, Make a branch from main to fix/some-bug-#123(Postfixing #123 will associate your PR)

Make your changes, add your files, commit and push to your fork.

git add SomeFile.js
git commit "Fix some bug #123"
git push origin fix/some-bug-#123