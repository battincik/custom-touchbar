**[TR](#visual-studio-code-için-özel-dokunmatik-çubuk) - [EN](#custom-touch-bar-for-visual-studio-code)**


# Custom Touch Bar for Visual Studio Code

This extension allows you to customize the Touch Bar in Visual Studio Code. Users can easily add and modify their own Touch Bar commands and shortcuts.

## Features

- Add custom commands to the Touch Bar.
- Easily configurable for a personalized Touch Bar experience.
- Utilize existing features of Visual Studio Code for quick access.

## Installation

You can download and install the extension from the Visual Studio Code Marketplace. After installation, you can add your own commands by going to your `settings.json` file.

## Configuration

To configure the extension, add settings like the following in your `settings.json` file:

```json
"customTouchbar.commands": [
    {
        "command": "myExtension.newUntitledFile",
        "title": "New File",
        "action": "workbench.action.files.newUntitledFile"
    },
    {
        "command": "myExtension.toggleTerminal",
        "title": "Toggle Terminal",
        "action": "workbench.action.terminal.toggleTerminal"
    }
    // Other commands...
]
```

These settings define the features and commands you want to see on your Touch Bar.

## Contributing

If you want to contribute to this extension, please visit the [GitHub repo](https://github.com/battincik/custom-touchbar).

## License

This extension is released under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

# Visual Studio Code için Özel Dokunmatik Çubuk

Bu eklenti, Visual Studio Code'da dokunmatik çubuğu (Touch Bar) özelleştirmenize olanak tanır. Kullanıcılar, kendi dokunmatik çubuk komutlarını ve kısayollarını kolayca ekleyebilir ve düzenleyebilirler.

## Özellikler

- Dokunmatik çubuğa özel komutlar ekleyebilme.
- Kolay yapılandırma ile kişiselleştirilebilir dokunmatik çubuk deneyimi.
- Visual Studio Code'un mevcut işlevlerini hızlı erişim için kullanma.

## Kurulum

Eklentiyi Visual Studio Code Marketplace üzerinden indirip kurabilirsiniz. Kurulumdan sonra, `settings.json` dosyasına giderek kendi komutlarınızı ekleyebilirsiniz.

## Yapılandırma

Eklentiyi yapılandırmak için `settings.json` dosyanızda aşağıdakine benzer ayarları yapabilirsiniz:

```json
"customTouchbar.commands": [
    {
        "command": "myExtension.newUntitledFile",
        "title": "New File",
        "action": "workbench.action.files.newUntitledFile"
    },
    {
        "command": "myExtension.toggleTerminal",
        "title": "Toggle Terminal",
        "action": "workbench.action.terminal.toggleTerminal"
    }
    // Diğer komutlar...
]
```

Bu ayarlar, dokunmatik çubuğunuzda görmek istediğiniz özellikleri ve komutları tanımlar.

## Katkıda Bulunma

Bu eklentiye katkıda bulunmak istiyorsanız, lütfen [GitHub repo](https://github.com/battincik/custom-touchbar) sayfasını ziyaret edin.

## Lisans

Bu eklenti MIT lisansı altında yayınlanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasını inceleyin.
