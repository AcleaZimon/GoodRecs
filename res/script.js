// script.js
function renderRepositoryInfo(data, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = `
        <h2>${data.RepositoryName}</h2>
        <img src="${data.Banner}" alt="Repository Banner" class="responsive-img">
        <p>${data.Description}</p>
        <div class="features">
            <ul>
                ${data.Features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="tag-chips">
            ${data.Tags.map(tag => `<div class="chip">${tag}</div>`).join('')}
        </div>
        <p>${data.Other}</p>
        <a href="${data.RepositoryUrl}" target="_blank" class="btn">访问仓库</a>
        <div class="adsense-placeholder">AdSense广告位</div>
    `;
}


// 当页面加载完成时，调用此函数
window.onload = () => renderRepositoryInfo(repositoryData, 'repository-info');
