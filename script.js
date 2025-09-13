// 全局变量
let currentSection = 'links';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadLinks();
    initializeAnimations();
});

// 初始化导航
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switchSection(section);
        });
    });
}

// 切换页面部分
function switchSection(sectionName) {
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    
    // 更新内容区域
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');
    
    currentSection = sectionName;
}

// 加载链接数据
function loadLinks() {
    const container = document.getElementById('linksContainer');
    container.innerHTML = '';
    
    // 从配置文件或本地存储加载链接
    const links = getStoredLinks();
    
    links.forEach(link => {
        createLinkCard(link);
    });
    
    // 如果禁用了添加链接功能，不显示添加按钮
    if (window.featuresConfig && !window.featuresConfig.enableAddLinks) {
        const addBtn = document.querySelector('.add-link-btn');
        if (addBtn) {
            addBtn.style.display = 'none';
        }
    }
}

// 获取存储的链接
function getStoredLinks() {
    const stored = localStorage.getItem('personalLinks');
    if (stored) {
        return JSON.parse(stored);
    }
    
    // 如果没有存储的链接，返回默认配置
    return window.defaultLinks || [
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
            name: "在线简历",
            url: "resume.html",
            icon: "fas fa-file-alt",
            description: "查看我的详细简历"
        }
    ];
}

// 保存链接到本地存储
function saveLinks(links) {
    localStorage.setItem('personalLinks', JSON.stringify(links));
}

// 创建链接卡片
function createLinkCard(link) {
    const container = document.getElementById('linksContainer');
    
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = link.url;
    // 如果是简历页面，在当前窗口打开，其他链接在新窗口打开
    if (link.url === 'resume.html') {
        // 当前窗口打开
    } else {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
    }
    
    card.innerHTML = `
        <div class="link-icon">
            <i class="${link.icon}"></i>
        </div>
        <h3>${link.name}</h3>
        <p>${link.description}</p>
    `;
    
    // 添加悬停效果
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    container.appendChild(card);
}

// 显示添加链接模态框
function showAddLinkModal() {
    const modal = document.getElementById('addLinkModal');
    modal.classList.add('show');
    
    // 清空表单
    document.getElementById('linkName').value = '';
    document.getElementById('linkUrl').value = '';
    document.getElementById('linkIcon').value = 'fas fa-globe';
    document.getElementById('linkDescription').value = '';
    
    // 聚焦到第一个输入框
    document.getElementById('linkName').focus();
}

// 隐藏添加链接模态框
function hideAddLinkModal() {
    const modal = document.getElementById('addLinkModal');
    modal.classList.remove('show');
}

// 添加新链接
function addNewLink() {
    const name = document.getElementById('linkName').value.trim();
    const url = document.getElementById('linkUrl').value.trim();
    const icon = document.getElementById('linkIcon').value.trim();
    const description = document.getElementById('linkDescription').value.trim();
    
    // 验证输入
    if (!name || !url) {
        alert('请填写网站名称和链接');
        return;
    }
    
    // 验证URL格式
    try {
        new URL(url);
    } catch (e) {
        alert('请输入有效的URL地址');
        return;
    }
    
    // 创建新链接对象
    const newLink = {
        name: name,
        url: url,
        icon: icon || 'fas fa-globe',
        description: description || '暂无描述'
    };
    
    // 获取现有链接并添加新链接
    const links = getStoredLinks();
    links.push(newLink);
    
    // 保存并重新加载
    saveLinks(links);
    loadLinks();
    hideAddLinkModal();
    
    // 显示成功消息
    showNotification('链接添加成功！', 'success');
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 添加样式
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(0, 212, 255, 0.2)',
        border: `1px solid ${type === 'success' ? '#00ff88' : '#00d4ff'}`,
        borderRadius: '8px',
        color: '#ffffff',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease',
        backdropFilter: 'blur(10px)'
    });
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 初始化动画
function initializeAnimations() {
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // 观察所有卡片元素
    document.querySelectorAll('.link-card, .project-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // ESC 键关闭模态框
    if (e.key === 'Escape') {
        hideAddLinkModal();
    }
    
    // 数字键切换页面
    if (e.key >= '1' && e.key <= '4') {
        const sections = ['links', 'projects', 'contact', 'about'];
        const index = parseInt(e.key) - 1;
        if (sections[index]) {
            switchSection(sections[index]);
        }
    }
});

// 模态框点击外部关闭
document.getElementById('addLinkModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideAddLinkModal();
    }
});

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// 导出函数供全局使用
window.showAddLinkModal = showAddLinkModal;
window.hideAddLinkModal = hideAddLinkModal;
window.addNewLink = addNewLink;