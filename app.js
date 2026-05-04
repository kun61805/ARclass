// 定義植物的資料庫 (對應企劃中的短句介紹)
const plantData = {
  "marker-sunflower": {
    name: "🌻 向日葵",
    desc: "我是花朵植物，我喜歡面向太陽生長喔！",
  },
  "marker-cactus": {
    name: "🌵 仙人掌",
    desc: "我是多肉植物，住在沙漠，不用天天喝水！",
  },
};

// 取得 UI 元素
const uiName = document.getElementById("plant-name");
const uiDesc = document.getElementById("plant-desc");

// 為所有標記加入事件監聽器
document.querySelectorAll("a-marker").forEach(function (marker) {
  // 當掃描到圖卡時
  marker.addEventListener("markerFound", function () {
    const markerId = marker.getAttribute("id");
    if (plantData[markerId]) {
      uiName.innerText = plantData[markerId].name;
      uiDesc.innerText = plantData[markerId].desc;
    }
  });

  // 當圖卡離開鏡頭時
  marker.addEventListener("markerLost", function () {
    uiName.innerText = "請掃描圖卡";
    uiDesc.innerText = "找找看下一株植物在哪裡呢？";
  });
});
