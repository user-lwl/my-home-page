# 🚀 个人主页项目

一个现代化的个人主页网站，采用响应式设计，支持深色主题和动态效果。

## ✨ 特性

- 🎨 **现代化设计** - 采用深色主题，渐变色彩和毛玻璃效果
- 📱 **响应式布局** - 完美适配桌面端、平板和移动设备
- 🌟 **动态背景** - 粒子动画背景效果
- 🔧 **可配置** - 通过配置文件轻松自定义个人信息
- 📋 **多页面导航** - 我的链接、实用工具、联系方式、关于我
- 🎯 **交互体验** - 悬停效果、平滑过渡动画
- ⌨️ **键盘快捷键** - 支持数字键1-4快速切换页面
- 💾 **本地存储** - 自定义链接数据本地保存

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: CSS Grid, Flexbox, CSS动画
- **图标**: Font Awesome 6.0
- **字体**: SF Pro Display, 系统默认字体

## 📁 项目结构

```
my-home-page/
├── index.html          # 主页面
├── resume.html         # 简历页面
├── config.js          # 配置文件
├── script.js          # 交互逻辑
├── style.css          # 样式文件
└── README.md          # 项目说明
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd my-home-page
```

### 2. 配置个人信息

编辑 `config.js` 文件，修改以下配置：

```javascript
const personalConfig = {
    name: "你的姓名",
    title: "你的职位",
    description: "个人描述",
    contact: {
        email: "your-email@example.com",
        github: "github.com/your-username",
        // ... 其他联系方式
    },
    skills: ["技能1", "技能2", "技能3"],
    about: "关于你的详细介绍..."
};
```

### 3. 启动项目

由于项目使用纯静态文件，你可以：

**方法一：直接打开**
```bash
# 直接在浏览器中打开 index.html
open index.html
```

**方法二：使用本地服务器**
```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server

# 然后访问 http://localhost:8000
```

## ⚙️ 配置说明

### 个人信息配置

在 `config.js` 中可以配置：

- **基本信息**: 姓名、职位、描述
- **头像设置**: 支持图标或图片
- **联系方式**: 邮箱、GitHub、Twitter等
- **技能标签**: 技术栈展示
- **关于我**: 个人介绍

### 主题配置

```javascript
const themeConfig = {
    primaryColor: "#00d4ff",      // 主色调
    secondaryColor: "#0099cc",    // 辅助色
    backgroundColor: "#0c0c0c",   // 背景色
    // ... 更多主题设置
};
```

### 功能配置

```javascript
const featuresConfig = {
    enableAddLinks: false,           // 是否启用添加链接功能
    enableKeyboardShortcuts: true,   // 是否启用键盘快捷键
    enableNotifications: true,       // 是否启用通知
    enableBackgroundAnimation: true, // 是否启用背景动画
};
```

### 项目配置

在 `projectsConfig` 数组中添加你的项目：

```javascript
{
    name: "项目名称",
    description: "项目描述",
    icon: "fas fa-code",
    technologies: ["技术1", "技术2"],
    url: "项目链接",
    github: "GitHub链接"
}
```

## 🎮 使用说明

### 键盘快捷键

- `1` - 切换到"我的链接"页面
- `2` - 切换到"实用工具"页面  
- `3` - 切换到"联系方式"页面
- `4` - 切换到"关于我"页面
- `ESC` - 关闭模态框

### 添加自定义链接

1. 在配置中启用 `enableAddLinks: true`
2. 点击"添加链接"按钮
3. 填写链接信息并保存
4. 链接将自动保存到本地存储

## 📱 响应式设计

项目支持以下设备：

- **桌面端** (>768px): 完整功能展示
- **平板端** (768px-480px): 优化布局
- **移动端** (<480px): 紧凑布局，隐藏部分文字

## 🎨 自定义样式

### 修改颜色主题

在 `config.js` 的 `themeConfig` 中修改颜色值：

```javascript
const themeConfig = {
    primaryColor: "#your-color",
    secondaryColor: "#your-secondary-color",
    // ...
};
```

### 添加自定义CSS

在 `style.css` 文件末尾添加你的自定义样式。

## 🔧 开发说明

### 文件说明

- **index.html**: 主页面结构，包含所有页面内容
- **resume.html**: 简历页面，可自定义简历内容
- **config.js**: 配置文件，包含所有可配置项
- **script.js**: 交互逻辑，页面切换、动画等
- **style.css**: 样式文件，包含所有CSS样式

### 添加新功能

1. 在 `config.js` 中添加配置项
2. 在 `script.js` 中添加逻辑代码
3. 在 `style.css` 中添加样式
4. 在 `index.html` 中添加HTML结构

## 🌟 特色功能

### 动态背景动画
- 粒子浮动效果
- 自动循环动画
- 可通过配置开关

### 毛玻璃效果
- backdrop-filter 实现
- 半透明背景
- 现代化视觉效果

### 平滑过渡
- CSS transition 动画
- 悬停效果
- 页面切换动画

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 邮箱: 1399097219@qq.com
- GitHub: [user-lwl](https://github.com/user-lwl)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！