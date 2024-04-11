// "secondary-inner" 要素と "below" 要素を取得
var secondaryInnerElement = document.getElementById("secondary-inner");
var belowElement = document.getElementById("below");

// "secondary-inner" 要素を "below" 要素の子要素として移動する
belowElement.appendChild(secondaryInnerElement);

// "bottom-grid" 要素と "secondary" 要素を取得
var bottomGridElement = document.getElementById("bottom-grid");
var secondaryElement = document.getElementById("secondary");

// "bottom-grid" 要素を "secondary" 要素の子要素として移動する
secondaryElement.appendChild(bottomGridElement);
