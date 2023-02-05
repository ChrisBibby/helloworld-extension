import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "helloworld.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from helloworld!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
