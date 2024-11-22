import './App.css';

function DogApp() {
    const dogBreeds = [
        { name: '黃金獵犬', img: '黃金獵犬.jpg', desc: '溫順友好、智商高，是家庭伴侶的理想選擇。', wiki: 'https://zh.wikipedia.org/wiki/黃金獵犬' },
        { name: '哈士奇', img: '哈士奇.jpg', desc: '活潑好動、外貌帥氣，但需要大量運動。', wiki: 'https://zh.wikipedia.org/wiki/西伯利亚雪橇犬' },
        { name: '柴犬', img: '柴犬.webp', desc: '獨立自信、表情豐富，適合有經驗的飼主。', wiki: 'https://zh.wikipedia.org/wiki/柴犬' },
        { name: '拉布拉多', img: '拉不拉多.jpg', desc: '忠誠可靠，極具訓練潛力，是導盲犬的首選。', wiki: 'https://zh.wikipedia.org/wiki/拉布拉多犬' },
        { name: '比熊犬', img: '比熊犬.jpg', desc: '小巧可愛，性格溫和，適合公寓生活。', wiki: 'https://zh.wikipedia.org/wiki/比熊犬' },
        { name: '邊境牧羊犬', img: '邊境牧羊犬.jpg', desc: '智商極高，工作能力出色，適合活躍家庭。', wiki: 'https://zh.wikipedia.org/wiki/邊境牧羊犬' },
        { name: '貴賓犬', img: '貴賓犬.jpg', desc: '聰明優雅，善於學習技巧，適合家庭伴侶。', wiki: 'https://zh.wikipedia.org/wiki/貴賓犬' },
        { name: '鬆獅犬', img: '鬆獅犬.jpg', desc: '外貌威武，性格忠誠，但略顯固執。', wiki: 'https://zh.wikipedia.org/wiki/鬆獅犬' },
        { name: '德國牧羊犬', img: '德國牧羊.jpg', desc: '勇敢忠誠，是軍警工作犬的首選。', wiki: 'https://zh.wikipedia.org/wiki/德國牧羊犬' },
        { name: '吉娃娃', img: '吉娃娃.jpg', desc: '體型嬌小，性格勇敢，適合小型家庭。', wiki: 'https://zh.wikipedia.org/wiki/吉娃娃' },
        { name: '秋田犬', img: '秋田犬.jpg', desc: '性格忠誠穩重，對家庭極其忠心。', wiki: 'https://zh.wikipedia.org/wiki/秋田犬' },
        { name: '約克夏犬', img: '約克夏犬.jpg', desc: '外表優雅，性格活潑，非常適合室內飼養。', wiki: 'https://zh.wikipedia.org/wiki/約克夏梗' },
        { name: '杜賓犬', img: '杜賓犬.jpg', desc: '敏捷勇敢，具備強大的守衛能力。', wiki: 'https://zh.wikipedia.org/wiki/杜賓犬' },
        { name: '雪納瑞', img: '雪納瑞.jpg', desc: '外型獨特，性格友善且容易訓練。', wiki: 'https://zh.wikipedia.org/wiki/雪纳瑞犬' },
        { name: '博美犬', img: '松鼠犬.jpg', desc: '體型迷你，毛髮蓬鬆，適合作為玩賞犬。', wiki: 'https://zh.wikipedia.org/wiki/博美犬' },
        { name: '大丹犬', img: '大丹犬.jpg', desc: '體型巨大但性格溫順，是巨型犬中的溫柔代表。', wiki: 'https://zh.wikipedia.org/wiki/大丹犬' },
        { name: '聖伯納犬', img: '聖伯納.jpg', desc: '性格友善，喜愛小孩，是家庭中的守護天使。', wiki: 'https://zh.wikipedia.org/wiki/聖伯納犬' },
        { name: '比特犬', img: '比特犬.jpg', desc: '肌肉發達，性格堅毅，但對主人極其忠誠。', wiki: 'https://zh.wikipedia.org/wiki/比特犬' },
        { name: '巴哥犬', img: '巴哥犬.jpg', desc: '表情逗趣，性格友好，是玩賞犬的明星品種。', wiki: 'https://zh.wikipedia.org/wiki/巴哥犬' },
        { name: '獵狐梗', img: '獵狐梗.jpg', desc: '精力充沛，性格機警，是優秀的狩獵犬。', wiki: 'https://zh.wikipedia.org/wiki/獵狐梗' },
];
  return (
    <>
      {/* 頁首 */}
      <header className="header">
        <h1>狗狗百科</h1>
        <p>了解狗狗的品種、特性與飼養建議。</p>
      </header>

      {/* 主內容 */}
      <main className="content">
        <section className="breeds">
          <h2>狗狗品種介紹</h2>
          <div className="breed-cards">
            {dogBreeds.map((breed, index) => (
              <div className="card" key={index}>
                <img src={breed.img} alt={breed.name} />
                <h3>{breed.name}</h3>
                <p>{breed.desc}</p>
                <a href={breed.wiki} target="_blank" rel="noopener noreferrer" className="button">
                  詳細說明
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 頁底 */}
      <footer className="footer">
        <p>&copy; 2024 狗狗百科全書 | 團隊成員：盧冠寧、梁芳瑀、佘佳穎、張蔡大鈞、高廷</p>
      </footer>
    </>
  );
}

export default DogApp;
