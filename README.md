# 打鼾舌头跟练

每天5分钟舌头训练，非呼吸暂停类打鼾。

## 功能

- 4个舌头训练动作：挺软腭、舌顶上颚、舌头拉伸、舌头抗阻
- 节奏感背景节拍（Web Audio 合成）
- 中文语音播报（Web Speech TTS）
- 每动作60秒 + 间隔休息10秒，总计约5分钟
- PWA 离线支持，可安装到手机主屏幕
- 暗色健身风格界面

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | 纯 HTML/CSS/JS（单文件 index.html） |
| 音频 | Web Audio API（节拍合成）+ Web Speech API（语音播报） |
| PWA | Service Worker + Manifest |
| 移动端 | Capacitor（WebView 封装为 Android APK） |

## 快速开始

### Web 版
```bash
cd www
npx serve .
# 或
python -m http.server 3000
```

然后浏览器打开 `http://localhost:3000`

### Android APK
```bash
npm install
npx cap sync android
cd android
./gradlew assembleDebug
# APK 位于 android/app/build/outputs/apk/debug/app-debug.apk
```

## 项目结构

```
snore-exercise/
├── www/                    # Web 应用
│   ├── index.html          # 主应用（HTML+CSS+JS）
│   ├── sw.js               # Service Worker
│   ├── manifest.json       # PWA 清单
│   ├── icons/icon.svg      # 应用图标
│   └── images/             # 训练参考照片
├── android/                # Capacitor Android 项目
├── capacitor.config.json   # Capacitor 配置
└── package.json
```

## 训练流程

1. 准备（5秒）→ 倒计时 3-2-1
2. 挺软腭（60秒）→ 休息（10秒）
3. 舌顶上颚（60秒）→ 休息（10秒）
4. 舌头拉伸（60秒）→ 休息（10秒）
5. 舌头抗阻（60秒）→ 完成！

总时长约 4 分 55 秒。
