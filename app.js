document.addEventListener("DOMContentLoaded", function() {
    // 取得 3D 實體元素
    const targetTree = document.querySelector('#target-tree');
    const targetCactus = document.querySelector('#target-cactus');

    // 取得 UI 介面元素
    const plantName = document.querySelector('#plant-name');
    const plantDesc = document.querySelector('#plant-desc');

    // ---- 第一張圖卡：大樹 ----
    targetTree.addEventListener("targetFound", event => {
        plantName.textContent = "🌳 神奇大樹";
        plantDesc.textContent = "這是森林裡的巨大神木，會行光合作用產生氧氣喔！";
    });

    targetTree.addEventListener("targetLost", event => {
        resetUI();
    });

    // ---- 第二張圖卡：仙人掌 ----
    targetCactus.addEventListener("targetFound", event => {
        plantName.textContent = "🌵 仙人掌";
        plantDesc.textContent = "生長在沙漠的植物，葉子退化成針狀以減少水分散失。";
    });

    targetCactus.addEventListener("targetLost", event => {
        resetUI();
    });

    // ---- 恢復預設 UI ----
    function resetUI() {
        plantName.textContent = "請掃描圖卡";
        plantDesc.textContent = "找找看植物在哪裡呢？";
    }
});