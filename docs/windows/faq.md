---
article: false
title: Windows
icon: windows
order: 1
---

Windows 遇到不懂的问题，可以在 [Microsoft 支持社区](https://answers.microsoft.com/zh-hans/)中提问，回复比较快。

## Windows 快捷键

| 快捷键             | 功能                                  |
|--------------------|-------------------------------------|
| Win + 数字键       | 启动任务栏的快捷方式                  |
| Win + D            | 显示桌面，再点击一次后恢复             |
| Win + E            | 快速启动文件资源管理器                |
| Win + Tab          | 查看当前桌面打开的窗口和所有桌面      |
| Win + Ctrl + L     | 实时字幕（Windows 11）                  |
| Win + Ctrl + D     | 创建新的虚拟桌面，新桌面里没有打开窗口 |
| Win + Ctrl + 左/右 | 切换虚拟桌面                          |
| Win + I            | 系统设置                              |
| Win + 向上键       | 最大化窗口 (传统桌面)                 |
| Win + 向下键       | 最小化窗口 (传统桌面)                 |
| Win + 向左键       | 将窗口最大化到屏幕的左侧 (传统桌面)   |
| Win + 向右键       | 将窗口最大化到屏幕的右侧 (传统桌面)   |
| Ctrl + W           | 关闭标签页                            |
| Alt + F4           | 关闭当前程序窗口                      |
| Ctrl + Shift + C    | 复制文件路径                          |

`%AppData%` 为 C:\Users\用户名\AppData\Roaming 的变量路径。^[[Windows 变量路径](https://blog.csdn.net/lijianbiao0/article/details/85118775)]

## 网址快捷方式

右键单击桌面，选择「新建」>「快捷方式」，输入浏览器运行路径、空格和要访问的网址链接，例如：`"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" https://newzone.top/`。

如果需要一次打开多个网址，则在参数后继续添加「空格 链接」。

## Chrome 开发工具

网页重定向时，无法在开发工具中看到重定向时打开的网页。

点击 `F12-Settings-Throttling`，增加浏览器的网络延时，来查看跳转路径。到达中转页面时，可在开发工具中将网络改为 Offiline，网页将停止加载。

- Preserve log：不在网页刷新或重定向后，清楚加载日志
- Disbale cache：不使用网页缓存
- Online：定制本地与服务端的网络环境，下载速度、上传速度、延时。

## 网页转桌面应用

### Chrome App

使用 Chrome 浏览器将网页创建为「桌面应用」。

1. 打开 Google Chrome 浏览器，并访问你希望生成「桌面客户端」的网页。
2. 单击右上角的菜单按钮，然后选择「更多工具」>「创建快捷方式」。
3. 在弹出的对话框中，ni 可以进行应用名称的修改，同时勾选「在窗口中打开」。
4. 打开 Chrome App 页面：`chrome://apps`，以管理已经创建的应用程序。

### Pake

[Pake](https://github.com/tw93/Pake) 是一个使用 Rust 编写的工具，用于轻松构建跨平台的轻量级桌面应用，支持 Mac、Windows 和 Linux 操作系统，并提供了 YouTube、flomo、小红书等热门网页的打包文件。

### Web2Desk

[Web2Desk](https://desktop.appmaker.xyz/) 允许我们输入网页链接、应用名称和应用图标，然后通过其服务器构建，直接提供 Windows、macOS 和 Linux 的本机安装程序下载。然而，在测试中，使用 Web2Desk 将滴答清单 Web 转换为应用时，未能保存登录状态，因此实用性有限。

图标转换：[ConvertICO](https://convertico.com/) 可将 PNG 图像转换为 ICO 文件，以自定义图标。

## 常见问题

### 无法切换中英文

突然出现中英文无法切换，大部分情况是因为硬件出了问题，与输入法无关。

- 检查方法：安装并启动 AutoHotkey，点击「view」>「Key history and script info」。窗口会显示最近的按键历史，当发现一个键在疯狂重复时，很有可能就是出问题的按键。
- 修复方法：键盘上重复按下该按键，看看是否能修复。如果不能修复，可以拔下键盘 USB，单独使用软键盘，测试按键是否正常。如果软键盘正常，键盘配件又无法修复，可以通过 Powertoys 或 AutoHotkey 禁用这个按键。

### 禁止系统自动更新重启

Win11 中，在注册表中进入「计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU」，新建 DWORD（32 位）值，将其重命名为「NoAutoRebootWithLoggedOnUsers」，并将键值改为 1。

Win10 中，没有找到类似的注册表，可以直接关闭自动更新。

### WPS 没有宏

- 让 wps 支持 vba 宏，安排 [WPS VBA 模块 V7.1 版本](https://www.jyrd.com/media/6490.html)；点击「选项」>「信任中心」>「启用宏」，添加为受信任的文档，或添加主要文件夹为信任位置。
- 开启聚光灯效果：「视图」>「阅读模式」，每个文件需要单独开启，文件保存后自动开启。

### Microsoft Store 应用快捷方式

Microsoft Store 安装的应用没有固定位置，一更新就会换位置，无法建立快捷方式。虽然这些应用能被设为开机启动，但经常启动不成功。

解决方法是：右键 Microsoft Store 应用，将其固定在任务栏。之后可使用 `Win+数字键` 来启动应用。例如，若应用在任务栏的第 7 位，则使用热键 `Win+7`。

### 无法安装应用

安装应用却被提示「您的安全设置不允许将此应用程序安装到您的计算机上」时，新建记事本并输入下方代码，修改记事本的后缀名为.reg，然后右键以管理员身份运行，合并到注册表就可以了。^[[Unable to Install ClickOnce Application due to Security Settings](https://superuser.com/questions/1252575/unable-to-install-clickonce-application-due-to-security-settings-windows-10)]

```shell
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\.NETFramework\\Security\\TrustManager\\PromptingLevel]
"MyComputer"="Enabled"
"LocalIntranet"="Enabled"
"Internet"="Enabled"
"TrustedSites"="Enabled"
"UntrustedSites"="Disabled"
```
