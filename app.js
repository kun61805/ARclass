// 定義植物的資料庫
const plantData = {
    "target-tree": {
        name: "🌳 大樹",
        nameColor: "#2E7D32", // 深綠色
        desc: "我是高大的樹木，可以幫大家遮陽喔！"
    },
    "target-cactus": {
        name: "🌵 仙人掌",
        nameColor: "#1B5E20",
        desc: "我是多肉植物，住在沙漠，不用天天喝水！"
    }
};

const uiName = document.getElementById('plant-name');
const uiDesc = document.getElementById('plant-desc');

// 為 MindAR 的 target 加入事件監聽器
document.querySelectorAll('[mindar-image-target]').forEach(function(target) {
    
    // 當掃描到圖卡時
    target.addEventListener('targetFound', function() {
        const targetId = target.getAttribute('id');
        if (plantData[targetId]) {
            uiName.innerText = plantData[targetId].name;
            uiName.style.color = plantData[targetId].nameColor;
            uiDesc.innerText = plantData[targetId].desc;
        }
    });

    // 當圖卡離開鏡頭時
    target.addEventListener('targetLost', function() {
        uiName.innerText = "請掃描圖卡";
        uiName.style.color = "#333333"; // 恢復預設顏色
        uiDesc.innerText = "找找看植物在哪裡呢？";
    });
});