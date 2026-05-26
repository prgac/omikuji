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

  const fortune = {
    "大吉": { text: "最高の幸運が訪れます。前向きに進みましょう。", icon: "🎉", color: "#e91e63" },
    "中吉": { text: "良い流れがあります。忙しくても楽しい出来事がありそう。", icon: "✨", color: "#ff9800" },
    "小吉": { text: "控えめな運勢です。小さな幸せに気づける一日。", icon: "🌸", color: "#4caf50" },
    "吉": { text: "安定した日。こつこつと続けることが大切です。", icon: "🍀", color: "#2196f3" },
    "末吉": { text: "まだ伸びしろがあります。焦らずじっくり準備を。", icon: "🌙", color: "#9c27b0" },
    "凶": { text: "注意が必要な日。無理をせず落ち着いて行動しましょう。", icon: "⚠️", color: "#607d8b" }
  };

  const result = omikuji[Math.floor(Math.random() * omikuji.length)];
  const today = fortune[result];
  const phrase = document.querySelector(".fortune-phrase");
  const icon = document.querySelector(".fortune-icon");
  const button = document.querySelector("button");
  let details = document.querySelector(".fortune-details");
  let img = document.querySelector(".fortune-img");

  if (phrase) {
    phrase.textContent = `今日の運勢は「${result}」です`;
    phrase.style.color = today.color;
  }

  if (icon) {
    icon.textContent = today.icon;
    icon.style.color = today.color;
  }

  if (!details) {
    details = document.createElement("ul");
    details.className = "fortune-details";
    document.querySelector("#omikuji").appendChild(details);
  }

  details.innerHTML = today.text
    .split("。")
    .filter(Boolean)
    .map(line => `<li>${line}。</li>`)
    .join("");

  if (!img) {
    img = document.createElement("img");
    img.className = "fortune-img";
    img.style.width = "120px";
    img.style.height = "120px";
    img.style.display = "block";
    img.style.marginTop = "12px";
    document.querySelector("#omikuji").appendChild(img);
  }

  img.src = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='100%' height='100%' fill='${today.color}22'/><text x='50%' y='55%' font-size='64' text-anchor='middle' dominant-baseline='middle'>${today.icon}</text></svg>`
  )}`;
  img.alt = result;

  if (button) {
    button.textContent = "もう一度引く";
  }
}
