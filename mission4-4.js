function omikujishouw() {
  const omikuji = [
    "大吉",
    "中吉",
    "中吉",
    "小吉",
    "小吉",
    "吉",
    "吉",
    "吉",
    "末吉",
    "末吉",
    "凶"
  ];

  const fortuneData = {
    "大吉": { description: "最高の幸運が訪れます。前向きに進みましょう。", icon: "🎉" },
    "中吉": { description: "良い流れがあります。忙しくても楽しい出来事がありそう。", icon: "✨" },
    "小吉": { description: "控えめな運勢です。小さな幸せに気づける一日。", icon: "🌸" },
    "吉": { description: "安定した日。こつこつと続けることが大切です。", icon: "🍀" },
    "末吉": { description: "まだ伸びしろがあります。焦らずじっくり準備を。", icon: "🌙" },
    "凶": { description: "注意が必要な日。無理をせず落ち着いて行動しましょう。", icon: "⚠️" }
  };

  const randomValue = Math.random();
  const index = Math.floor(randomValue * omikuji.length);
  const result = omikuji[index];
  const data = fortuneData[result];
  const phraseElement = document.querySelector(".fortune-phrase");
  const descriptionElement = document.querySelector(".fortune-description");
  const iconElement = document.querySelector(".fortune-icon");
  const container = document.querySelector("#omikuji") || document.body;
  const buttonElement = document.querySelector("button");

  // 運勢ごとの色指定
  const colorMap = {
    "大吉": "#e91e63",
    "中吉": "#ff9800",
    "小吉": "#4caf50",
    "吉": "#2196f3",
    "末吉": "#9c27b0",
    "凶": "#607d8b"
  };

  // 結果表示（文言・色・アイコン）
  if (phraseElement) {
    phraseElement.textContent = `今日の運勢は「${result}」です`;
    phraseElement.style.color = colorMap[result] || "#000";
  }

  if (iconElement) {
    iconElement.textContent = data.icon;
    iconElement.style.fontSize = "2rem";
    iconElement.style.color = colorMap[result] || "#000";
  }

  // 詳細をリスト形式で表示（既存の説明文は置き換える）
  let details = container.querySelector(".fortune-details");
  if (!details) {
    details = document.createElement("ul");
    details.className = "fortune-details";
    details.style.listStyle = "disc";
    details.style.paddingLeft = "1.2em";
    container.appendChild(details);
  }
  // description を文で分割してリストにする
  while (details.firstChild) details.removeChild(details.firstChild);
  const parts = (data.description || "").split(/。|\n/).filter(Boolean);
  if (parts.length === 0 && descriptionElement) {
    const li = document.createElement("li");
    li.textContent = descriptionElement.textContent || "詳細はありません。";
    details.appendChild(li);
  } else {
    parts.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.trim().replace(/。$/, '') + "。";
      details.appendChild(li);
    });
  }

  // 画像（SVGデータURLを生成して表示）
  function emojiToDataURL(emoji, bg) {
    const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%' height='100%' fill='${bg}' /><text x='50%' y='50%' font-size='96' dominant-baseline='middle' text-anchor='middle'>${emoji}</text></svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  let img = container.querySelector(".fortune-img");
  if (!img) {
    img = document.createElement("img");
    img.className = "fortune-img";
    img.style.width = "140px";
    img.style.height = "140px";
    img.style.display = "block";
    img.style.marginTop = "8px";
    container.appendChild(img);
  }
  const bgColor = (colorMap[result] ? colorMap[result] : "#ffffff");
  img.src = emojiToDataURL(data.icon, bgColor + "22");
  img.alt = result;

  // ボタンの文言を変更して再度引けるようにする
  if (buttonElement) {
    buttonElement.textContent = "もう一度引く";
    buttonElement.disabled = false;
    buttonElement.style.display = "inline-block";
  }
}
