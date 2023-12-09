const vscode = require('vscode');

function activate(context) {
    // Yapılandırmayı yükle
    const config = vscode.workspace.getConfiguration('customTouchbar');

    // Yapılandırmada tanımlanan komutları al
    const commands = config.get('commands');

    // Her bir komut için bir VS Code komutu oluştur
    commands.forEach(cmd => {
        let command = vscode.commands.registerCommand(cmd.command, () => {
            vscode.commands.executeCommand(cmd.action);
        });

        // Oluşturulan komutu aboneliklere ekle
        context.subscriptions.push(command);
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
