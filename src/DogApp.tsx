import './App.css';

function DogApp() {
  const dogBreeds = [
    {
      name: '黃金獵犬',
      img: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400',
      desc: '溫順友好、智商高，是家庭伴侶的理想選擇。',
      wiki: 'https://zh.wikipedia.org/wiki/黃金獵犬',
    },
    {
      name: '哈士奇',
      img: 'https://images.pexels.com/photos/3715587/pexels-photo-3715587.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '活潑好動、外貌帥氣，但需要大量運動。',
      wiki: 'https://zh.wikipedia.org/wiki/西伯利亚雪橇犬',
    },
    {
      name: '柴犬',
      img: 'https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '獨立自信、表情豐富，適合有經驗的飼主。',
      wiki: 'https://zh.wikipedia.org/wiki/柴犬',
    },
    {
      name: '拉布拉多',
      img: 'https://images.pexels.com/photos/1696589/pexels-photo-1696589.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '忠誠可靠，極具訓練潛力，是導盲犬的首選。',
      wiki: 'https://zh.wikipedia.org/wiki/拉布拉多犬',
    },
    {
      name: '比熊犬',
      img: 'https://media.istockphoto.com/id/1377934317/zh/%E7%85%A7%E7%89%87/funny-white-bichon-frise.jpg?b=1&s=612x612&w=0&k=20&c=OMLdC7k09I5MS-hNzW9cfq1rBK1n3rFLueYRLv5GtjE=',
      desc: '小巧可愛，性格溫和，適合公寓生活。',
      wiki: 'https://zh.wikipedia.org/wiki/比熊犬',
    },
    {
      name: '邊境牧羊犬',
      img: 'https://images.pexels.com/photos/28444864/pexels-photo-28444864.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '智商極高，工作能力出色，適合活躍家庭。',
      wiki: 'https://zh.wikipedia.org/wiki/邊境牧羊犬',
    },
    {
      name: '貴賓犬',
      img: 'https://images.pexels.com/photos/15193152/pexels-photo-15193152.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '聰明優雅，善於學習技巧，適合家庭伴侶。',
      wiki: 'https://zh.wikipedia.org/wiki/貴賓犬',
    },
    {
      name: '鬆獅犬',
      img: 'https://images.pexels.com/photos/11485114/pexels-photo-11485114.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '外貌威武，性格忠誠，但略顯固執。',
      wiki: 'https://zh.wikipedia.org/wiki/鬆獅犬',
    },
    {
      name: '德國牧羊犬',
      img: 'https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '勇敢忠誠，是軍警工作犬的首選。',
      wiki: 'https://zh.wikipedia.org/wiki/德國牧羊犬',
    },
    {
      name: '吉娃娃',
      img: 'https://images.pexels.com/photos/3299904/pexels-photo-3299904.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '體型嬌小，性格勇敢，適合小型家庭。',
      wiki: 'https://zh.wikipedia.org/wiki/吉娃娃',
    },
    {
      name: '秋田犬',
      img: 'https://images.pexels.com/photos/9956262/pexels-photo-9956262.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '性格忠誠穩重，對家庭極其忠心。',
      wiki: 'https://zh.wikipedia.org/wiki/秋田犬',
    },
    {
      name: '約克夏犬',
      img: 'https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '外表優雅，性格活潑，非常適合室內飼養。',
      wiki: 'https://zh.wikipedia.org/wiki/約克夏梗',
    },
    {
      name: '杜賓犬',
      img: 'https://images.pexels.com/photos/29438698/pexels-photo-29438698.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '敏捷勇敢，具備強大的守衛能力。',
      wiki: 'https://zh.wikipedia.org/wiki/杜賓犬',
    },
    {
      name: '雪納瑞',
      img: 'https://images.pexels.com/photos/18344059/pexels-photo-18344059.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '外型獨特，性格友善且容易訓練。',
      wiki: 'https://zh.wikipedia.org/wiki/雪纳瑞犬',
    },
    {
      name: '博美犬',
      img: 'https://images.pexels.com/photos/8473723/pexels-photo-8473723.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '體型迷你，毛髮蓬鬆，適合作為玩賞犬。',
      wiki: 'https://zh.wikipedia.org/wiki/博美犬',
    },
    {
      name: '大丹犬',
      img: 'https://images.pexels.com/photos/28479799/pexels-photo-28479799.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '體型巨大但性格溫順，是巨型犬中的溫柔代表。',
      wiki: 'https://zh.wikipedia.org/wiki/大丹犬',
    },
    {
      name: '聖伯納犬',
      img: 'https://media.istockphoto.com/id/1263320809/photo/saint-bernard-rescue-dog.jpg?s=612x612&w=is&k=20&c=61moHzB1R3P8qIb1CG7JEMXhk37Wm15pG3v56RVz-9A=',
      desc: '性格友善，喜愛小孩，是家庭中的守護天使。',
      wiki: 'https://zh.wikipedia.org/wiki/聖伯納犬',
    },
    {
      name: '比特犬',
      img: 'https://images.pexels.com/photos/29472561/pexels-photo-29472561.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '肌肉發達，性格堅毅，但對主人極其忠誠。',
      wiki: 'https://zh.wikipedia.org/wiki/比特犬',
    },
    {
      name: '巴哥犬',
      img: 'https://images.pexels.com/photos/3475680/pexels-photo-3475680.jpeg?auto=compress&cs=tinysrgb&w=400',
      desc: '表情逗趣，性格友好，是玩賞犬的明星品種。',
      wiki: 'https://zh.wikipedia.org/wiki/巴哥犬',
    },
    {
      name: '獵狐梗',
      img: 'https://media.istockphoto.com/id/1307988320/zh/%E7%85%A7%E7%89%87/%E9%A0%AD%E5%82%BE%E6%96%9C%E7%9A%84%E7%BE%8E%E5%9C%8B%E7%8B%90%E7%8B%B8%E7%8B%97%E7%8B%97.jpg?b=1&s=612x612&w=0&k=20&c=s4PZB0c3hm8qdPZXtBIQOizrAbnwxCCDl7A-qZM7pFc=',
      desc: '精力充沛，性格機警，是優秀的狩獵犬。',
      wiki: 'https://zh.wikipedia.org/wiki/獵狐梗',
    },
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

