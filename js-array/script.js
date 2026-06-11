// 配列の宣言
let sampleArray = new Array();
console.log(sampleArray); // []

// 配列の要素
let fruits = ["林檎", "蜜柑", "葡萄"];

// 配列全体を出力
console.log(fruits); // (3)["林檎", "蜜柑", "葡萄"]

// 配列の要素を出力 インデックス (番号) / 添字 / 添え字
console.log(fruits[0]); // 林檎

// 配列の要素の追加
fruits.push("梨"); // 配列の末尾に要素を追加
console.log(fruits); // (4)["林檎", "蜜柑", "葡萄", "梨"]

fruits.unshift("桃"); // 配列の先頭に要素を追加
console.log(fruits); // (5)["桃", "林檎", "蜜柑", "葡萄", "梨"]
console.log(fruits[0]); // 桃

// 配列の要素の変更
fruits[4] = "苺"; // 添字を指定して要素を変更
console.log(fruits); // (5)["桃", "林檎", "蜜柑", "葡萄", "苺"]
