// 个人信息配置
const personalConfig = {
    // 基本信息
    name: "user-lwl",
    title: "后端开发工程师",
    description: "代码搬砖工，偶尔也能搬出点花样 🚀",
    
    // 头像设置（可以是图片URL或使用默认图标）
    avatar: {
        type: "icon", // "icon" 或 "image"
        value: "fas fa-user", // 图标类名或图片URL
    },
    
    // 联系方式
    contact: {
        email: "1399097219@qq.com",
        github: "github.com/user-lwl",
        twitter: "",
        linkedin: "",
        website: ""
    },
    
    // 技能标签
    skills: [
        "Java",
        "Spring Boot",
        "Spring Cloud Alibaba",
        "SpringAI",
        "Nacos",
        "Sentinel",
        "MySQL",
        "Redis",
        "Docker",
        "RabbitMQ",
        "LangChain4j",
        "Linux",
        "Git",
        "Maven"
    ],
    
    // 关于我的内容
    about: "后端开发工程师一枚，Java是主要开发语言。熟悉Spring Boot等多种框架，对MySQL数据库设计和Redis缓存有一定经验。熟练掌握AI应用开发，包括LangChain4j等技术栈。了解微服务架构，参与过系统设计相关工作。平时喜欢逛逛GitHub，看看别人家的代码，顺便学点新东西。目标是写出更优雅的代码，少加点班 😄"
};

// 默认链接配置
const defaultLinks = [
    {
        name: "掘金博客",
        url: "https://juejin.cn/user/3408929366742472",
        icon: "fas fa-blog",
        description: "分享技术心得和生活感悟"
    },
    {
        name: "GitHub",
        url: "https://github.com/user-lwl",
        icon: "fab fa-github",
        description: "开源项目和代码仓库"
    },
    {
        name: "LeetCode",
        url: "https://leetcode.cn/u/chi-yan-hong-chen/",
        icon: "fas fa-code",
        description: "刷题记录和算法学习"
    },
    {
        name: "在线简历",
        url: "resume.html",
        icon: "fas fa-file-alt",
        description: "查看我的详细简历"
    }
];

// 实用工具配置
const projectsConfig = [
    {
        name: "AI零代码应用生成平台",
        description: "基于LangChain4j，一句话快速生成AI应用的在线平台",
        icon: "fas fa-magic",
        technologies: ["AI", "LangChain4j", "No-Code"],
        url: "https://ai.user-lwl.cn/",
        github: ""
    },
    {
        name: "AI聊天助手",
        description: "基于AI技术的智能对话平台，支持多种对话模式",
        icon: "fas fa-comments",
        technologies: ["AI", "Chat", "Web"],
        url: "http://chat.user-lwl.cn",
        github: ""
    },
    {
        name: "玛卡巴卡加密器",
        description: "支持自定义密钥的趣味加密解密工具，将文本加密为玛卡巴卡",
        icon: "fas fa-shield-alt",
        technologies: ["Encryption", "Fun", "Custom"],
        url: "http://bb.user-lwl.cn",
        github: ""
    },
    {
        name: "SQL代码生成器",
        description: "智能生成建表语句和模拟数据插入语句的在线工具",
        icon: "fas fa-code",
        technologies: ["SQL", "Generator", "Database"],
        url: "http://sql.user-lwl.cn",
        github: ""
    }
];

// 主题配置
const themeConfig = {
    // 主色调
    primaryColor: "#00d4ff",
    secondaryColor: "#0099cc",
    
    // 背景色
    backgroundColor: "#0c0c0c",
    surfaceColor: "#1a1a1a",
    
    // 文字颜色
    textPrimary: "#ffffff",
    textSecondary: "#cccccc",
    
    // 动画设置
    animations: {
        enabled: true,
        duration: "0.3s",
        easing: "ease"
    }
};

// 功能配置
const featuresConfig = {
    // 是否启用添加链接功能
    enableAddLinks: false,
    
    // 是否启用键盘快捷键
    enableKeyboardShortcuts: true,
    
    // 是否启用通知
    enableNotifications: true,
    
    // 是否启用背景动画
    enableBackgroundAnimation: true,
    
    // 是否启用音效（预留）
    enableSoundEffects: false
};

// 导出配置
window.personalConfig = personalConfig;
window.defaultLinks = defaultLinks;
window.projectsConfig = projectsConfig;
window.themeConfig = themeConfig;
window.featuresConfig = featuresConfig;

// 应用配置到页面
document.addEventListener('DOMContentLoaded', function() {
    applyPersonalConfig();
    applyThemeConfig();
    loadProjects();
    loadContactInfo();
    loadAboutInfo();
});

// 应用个人配置
function applyPersonalConfig() {
    // 更新姓名
    const nameElement = document.querySelector('.profile-info .name');
    if (nameElement) {
        nameElement.textContent = personalConfig.name;
    }
    
    // 更新职位
    const titleElement = document.querySelector('.profile-info .title');
    if (titleElement) {
        titleElement.textContent = personalConfig.title;
    }
    
    // 更新描述
    const descElement = document.querySelector('.profile-info .description');
    if (descElement) {
        descElement.textContent = personalConfig.description;
    }
    
    // 更新页面标题
    document.title = `${personalConfig.name} 的代码小窝`;
}

// 应用主题配置
function applyThemeConfig() {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeConfig.primaryColor);
    root.style.setProperty('--secondary-color', themeConfig.secondaryColor);
    root.style.setProperty('--background-color', themeConfig.backgroundColor);
    root.style.setProperty('--surface-color', themeConfig.surfaceColor);
    root.style.setProperty('--text-primary', themeConfig.textPrimary);
    root.style.setProperty('--text-secondary', themeConfig.textSecondary);
}

// 加载项目信息
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // 清空现有内容
    projectsGrid.innerHTML = '';
    
    projectsConfig.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
        `;
        
        // 添加点击事件
        if (project.url) {
            projectCard.style.cursor = 'pointer';
            projectCard.addEventListener('click', () => {
                window.open(project.url, '_blank');
            });
        }
        
        projectsGrid.appendChild(projectCard);
    });
}

// 加载联系信息
function loadContactInfo() {
    const contactGrid = document.querySelector('.contact-grid');
    if (!contactGrid) return;
    
    contactGrid.innerHTML = '';
    
    const contactItems = [
        { icon: 'fas fa-envelope', value: personalConfig.contact.email, type: 'email' },
        { icon: 'fab fa-github', value: personalConfig.contact.github, type: 'url' },
        { icon: 'fab fa-twitter', value: personalConfig.contact.twitter, type: 'url' },
        { icon: 'fab fa-linkedin', value: personalConfig.contact.linkedin, type: 'url' }
    ];
    
    contactItems.forEach(item => {
        if (item.value) {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            
            contactItem.innerHTML = `
                <i class="${item.icon}"></i>
                <span>${item.value}</span>
            `;
            
            // 添加点击事件
            contactItem.style.cursor = 'pointer';
            contactItem.addEventListener('click', () => {
                if (item.type === 'email') {
                    window.location.href = `mailto:${item.value}`;
                } else if (item.type === 'url') {
                    const url = item.value.startsWith('http') ? item.value : `https://${item.value}`;
                    window.open(url, '_blank');
                }
            });
            
            contactGrid.appendChild(contactItem);
        }
    });
}

// 加载关于信息
function loadAboutInfo() {
    const aboutContent = document.querySelector('.about-content p');
    if (aboutContent) {
        aboutContent.textContent = personalConfig.about;
    }
    
    const skillTags = document.querySelector('.skill-tags');
    if (skillTags) {
        skillTags.innerHTML = '';
        personalConfig.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            skillTags.appendChild(tag);
        });
    }
}