// script.js
function renderRepositoryInfo(data) {
    const container = document.getElementById('repository-info');
    container.innerHTML = `
        <h2>${data.RepositoryName}</h2>
        <img src="${data.Banner}" alt="Repository Banner" class="responsive-img">
        <hr class="hr-separator">
        <p class="description">${data.Description}</p> <!-- 更新类名 -->
        <div class="features">
            <ul>
                ${data.Features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="tag-chips">
            ${data.Tags.map(tag => `<div class="chip">${tag}</div>`).join('')}
        </div>
        ${data.Other ? `<p>${data.Other}</p>` : ''}
        <a href="${data.RepositoryUrl}" target="_blank" class="btn">访问仓库</a>
    `;
}


window.onload = () => renderRepositoryInfo(repositoryData);
