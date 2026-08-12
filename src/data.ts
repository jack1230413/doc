import { Senior, NostalgicPhoto, TownshipInfo } from './types';
import kinmenTraditionalHouseImg from './assets/images/kinmen_traditional_house_1783351809433.jpg';
import kinmenOldStreetImg from './assets/images/kinmen_old_street_1783351821867.jpg';
import kinmenOystersFieldImg from './assets/images/kinmen_oysters_field_1783351842719.jpg';
import elderly01Img from './assets/images/regenerated_image_1786444088638.jpg';
import elderly02Img from './assets/images/regenerated_image_1786444090907.jpg';
import elderly03Img from './assets/images/regenerated_image_1786466410442.jpg';
import elderly04Img from './assets/images/regenerated_image_1786470484127.jpg';
import elderly05Img from './assets/images/regenerated_image_1786472569099.jpg';
import elderly06Img from './assets/images/regenerated_image_1786472571479.jpg';
import elderly07Img from './assets/images/regenerated_image_1786513772383.jpg';
import elderly08Img from './assets/images/regenerated_image_1786513872747.jpg';
import elderly09Img from './assets/images/regenerated_image_1786515011460.jpg';
import elderly10Img from './assets/images/regenerated_image_1786515028076.jpg';
import elderly11Img from './assets/images/regenerated_image_1786515037925.jpg';
import elderly12Img from './assets/images/regenerated_image_1786515051717.jpg';
import elderly13Img from './assets/images/regenerated_image_1786536808171.jpg';
import elderly14Img from './assets/images/regenerated_image_1786536810060.jpg';

export const SENIORS: Senior[] = [
  {
    id: '1',
    name: '歐陽可進 (可進阿伯)',
    age: 78,
    gender: '男',
    personality: '幽默風趣、金門故事通、熱愛唱歌',
    avatar: '👴🏻',
    hobby: '聽閩南語老歌、研究地方文史、講古寧頭故事',
    docStory: '剛來DOC時連怎麼解鎖平板都不會，在講師耐心指導下，現在歐陽阿伯已經學會用YouTube搜尋他最愛的陳一郎台語老歌，還會用藍牙耳機聽歌跟著哼唱，是班上的「數位歌王」！',
    favoriteMemory: '小時候在雙鯉湖旁看夕陽、抓泥鰍。那時候的古寧頭雖然經歷戰火，但村民們互相扶持的溫暖人情味，是他這輩子最難忘的記憶。',
    badge: '數位歌王',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    lifePhotos: [
      {
        url: elderly03Img,
        caption: '在自家庭院彈琴哼唱陳一郎台語經典老歌'
      },
      {
        url: elderly04Img,
        caption: '古寧頭社區活動中心與老老少少講金門戰地故事'
      }
    ]
  },
  {
    id: '2',
    name: '楊秀卿 (秀卿阿嬤)',
    age: 72,
    gender: '女',
    personality: '溫柔熱情、手藝精湛、樂於分享',
    avatar: '👵🏻',
    hobby: '製作貢糖、紅龜粿、種植小盆栽',
    docStory: '秀卿阿嬤手藝一絕，做出來的貢糖香酥可口。在DOC學會用手機拍照後，她開始記錄自己做糕點的每一步驟，還學會了把漂亮的成品照片發到LINE群組，讓親友羨慕不已，堪稱「美食Line達人」！',
    favoriteMemory: '年輕時在金門老街上學做貢糖，那時滿街都是穿著草綠服的阿兵哥。大家下午會聚在井邊洗衣服、聊天，生活簡單卻充滿笑聲。',
    badge: '美食Line達人',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    lifePhotos: [
      {
        url: elderly01Img,
        caption: '準備剛剛出爐的古法手作金門貢糖與傳統糕點'
      },
      {
        url: elderly02Img,
        caption: '用智慧型手機紀錄庭院悉心照料的花草綠植'
      }
    ]
  },
  {
    id: '3',
    name: '李能標 (能標阿嬤)',
    age: 81,
    gender: '女',
    personality: '認真嚴謹、樂觀進取、金門傳統女性',
    avatar: '👵🏼',
    hobby: '撰寫回憶錄、晨間散步、閱讀歷史書',
    docStory: '身為金門戰地政務時期的經歷者，能標阿嬤一直想把自己的經歷記錄下來。來到DOC後，她一字一字學會了電腦鍵盤打字，成功在Word上敲打出超過萬字的回憶錄！DOC團隊協助她數位保存並列印成冊。',
    favoriteMemory: '在砲火交織的年代守護家庭，望著慈湖海岸線外的滿天星斗。夜裡海浪拍打沙灘的聲音，陪伴她走過艱辛年代。',
    badge: '回憶錄作家',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    lifePhotos: [
      {
        url: elderly05Img,
        caption: '在書房用筆電專心一字一句打出金門戰地回憶錄'
      },
      {
        url: elderly06Img,
        caption: '清晨前往慈湖海岸海堤步道晨跑鍛鍊身體'
      }
    ]
  },
  {
    id: '4',
    name: '楊秀雲 (秀雲阿嬤)',
    age: 69,
    gender: '女',
    personality: '開朗活潑、創意無限、穿搭時尚',
    avatar: '👩🏼‍🦳',
    hobby: '手工藝編織、研究新食譜、跳廣場舞',
    docStory: '秀雲阿嬤是我們DOC的「創意美編天后」！她不僅學會了使用平板，還在老師的引導下學會用免費設計軟體 Canva。她親自為自己做的純手工紅龜粿設計了專屬的包裝貼紙，還自豪地印出來貼在送給朋友的盒子上面！',
    favoriteMemory: '以前每逢元宵節或中秋節，全村的婦女都會聚在宗祠前一起蒸紅龜粿、聊家常。那種柴火的煙霧跟阿嬤們的笑聲交織在一起的畫面，非常溫馨。',
    badge: '設計小幫手',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    lifePhotos: [
      {
        url: elderly07Img,
        caption: '開心展現親手完成的繽紛編織作品與創意飾品'
      },
      {
        url: elderly08Img,
        caption: '在數位教室使用 Canva 為紅龜粿設計包装貼紙'
      }
    ]
  },
  {
    id: '5',
    name: '李璇應 (璇應阿嬤)',
    age: 75,
    gender: '女',
    personality: '樂觀大方、古道熱腸、熱愛旅遊',
    avatar: '👵🏽',
    hobby: '研究園藝、泡茶聊天、收集舊物',
    docStory: '璇應阿嬤總是對新鮮事物充滿好奇。在DOC學會使用Google地圖與導航後，她就像插上了翅膀，現在常常帶著DOC的姊妹們，一邊看著導航、一邊前往金門各個社區進行數位交流，是我們公認的「導航達人」！',
    favoriteMemory: '年輕時在自家的金黃色高粱田裡揮汗如雨地收割。收成後將高粱送到酒廠，換回熱騰騰、香氣撲鼻的現釀金門高粱酒，與姊妹們在樹下暢談。',
    badge: '導航達人',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    lifePhotos: [
      {
        url: elderly09Img,
        caption: '在傳統紅磚厝埕前擺上茶具熱情招待鄉親與同樂'
      },
      {
        url: elderly10Img,
        caption: '利用手機地圖導航載著 DOC 學員探訪周邊村落'
      }
    ]
  },
  {
    id: '6',
    name: '翁淑理 (淑理姐)',
    age: 66,
    gender: '女',
    personality: '精明能幹、熱心公益、編織達人',
    avatar: '👵🏼',
    hobby: '毛線編織、園藝栽培、看烹飪影片',
    docStory: '淑理姐不甘於只當學員，她希望能把編織手藝傳承下去。在DOC，她學習了如何手持腳架、調整光線，並用平板錄製自己一步一步編織毛線的過程。她還學會了上傳YouTube與親友分享，在DOC群組裡有「百萬潛力網紅」的美稱！',
    favoriteMemory: '以前在煤油燈下，一針一線為剛出生的孩子們織毛線衣。雖然眼睛很酸，但看著孩子們穿上毛衣時紅通通的笑臉，心裡就暖洋洋的。',
    badge: '明星YouTuber',
    badgeColor: 'bg-red-100 text-red-800 border-red-300',
    lifePhotos: [
      {
        url: elderly11Img,
        caption: '架設平板腳架錄製編織教學影片準備上傳影音平台'
      },
      {
        url: elderly12Img,
        caption: '細心編織出送給小孫子的暖心純羊毛花帽'
      }
    ]
  },
  {
    id: '7',
    name: '莊彩花 (彩花阿嬤)',
    age: 76,
    gender: '女',
    personality: '豪爽幽默、腳踏實地、採蚵大師',
    avatar: '👵🏼',
    hobby: '古寧頭石蚵養殖、海邊散步、品嚐海鮮',
    docStory: '彩花阿嬤這輩子都在跟石蚵打交道。來到DOC後，她學會用平板查詢中央氣象署的「每日潮汐時間預報」，現在出海採蚵前都會先精準對照時間。她還用手機記錄下古寧頭潮間帶的「石蚵林」壯麗景觀，與全班分享。',
    favoriteMemory: '每天退潮時，挑著扁擔、踩著鬆軟的泥濘，走向海中一根根挺立的石蚵柱。雖然海风冰冷刺骨，但挑著沉甸甸、飽滿的石蚵回家時，內心的幸福感無可比擬。',
    badge: '智慧石蚵農',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    lifePhotos: [
      {
        url: elderly13Img,
        caption: '古寧頭潮間帶花崗岩石蚵柱前巡視自家蚵田'
      },
      {
        url: elderly14Img,
        caption: '出海前使用平板精準查詢中央氣象署每日潮汐預報'
      }
    ]
  },
  {
    id: '8',
    name: '蔡麗珠 (麗珠阿嬤)',
    age: 83,
    gender: '女',
    personality: '慈祥和藹、開朗豁達、民俗活字典',
    avatar: '👵🏾',
    hobby: '吟唱傳統歌謠、跟鄰居聊天、摺紙藝',
    docStory: '麗珠阿嬤是DOC年齡最大的學員，也是大家的寶貝。她會唱許多快要失傳的金門傳統閩南語童謠。DOC老師教她使用數位錄音與平板錄音軟體，將她溫潤、充滿歷史感的歌聲錄製下來，為金門的無形文化資產留下珍貴紀錄。',
    favoriteMemory: '小時候在四合院大樹下，聽阿嬤一邊搖著蒲扇、一邊哼唱著「月光光，秀才郎」等童謠，伴隨周圍的蟲鳴與微風，沉沉入睡的夏夜。',
    badge: '文化傳承大使',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    lifePhotos: [
      {
        url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
        caption: '在金寧傳統古厝前大樹下吟唱即將失傳的金門古調'
      },
      {
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        caption: '在數位錄音教室將珍貴的金門語童謠數位保存'
      }
    ]
  }
];

export const NOSTALGIC_PHOTOS: NostalgicPhoto[] = [
  {
    id: 'photo_1',
    title: '閩南傳統紅磚燕尾厝',
    description: '金門最具代表性的燕尾脊與馬背屋頂。紅磚與白石交織，承載了數百年閩南家族的溫暖記憶與宗族精神。金寧鄉的北山與南山聚落至今仍完好保存著如此壯麗的聚落。',
    year: '民國 60 年代 (1970s)',
    imageUrl: kinmenTraditionalHouseImg,
    category: '建築',
    location: '金寧鄉 古寧頭南北山聚落'
  },
  {
    id: 'photo_2',
    title: '戰地時期的老街與標語',
    description: '金門戰地政務時期的街道。街道兩旁掛滿了手寫的商店招牌，以及高聳的愛國標語。那是個軍民一家的年代，草綠服的軍人是街上最獨特的風景，也是長輩們難忘的青春背景。',
    year: '民國 65 年 (1976)',
    imageUrl: kinmenOldStreetImg,
    category: '生活',
    location: '金城鎮與金寧鄉交界 舊老街'
  },
  {
    id: 'photo_3',
    title: '古寧頭潮間帶的百年石蚵田',
    description: '矗立在泥灘地上、排列整齊的「石蚵柱」(花崗岩石條)。這是金門傳承超過四百年的獨特養殖方式，造就了體積小卻肉質極其鮮甜、有「海中牛奶」之稱的古寧頭石蚵。',
    year: '民國 70 年 (1981)',
    imageUrl: kinmenOystersFieldImg,
    category: '風景',
    location: '金寧鄉 古寧頭北山海堤'
  }
];

export const TOWNSHIPS: TownshipInfo[] = [
  {
    id: 'jinning',
    name: 'Jinning',
    chineseName: '金寧鄉',
    description: '【金寧鄉】是我們「昔果山 (DOC)」所在地！這裡融合了豐富的戰地歷史（古寧頭戰役發生地）、珍貴的石蚵生態以及知名的國立金門大學。走在古寧頭的聚落中，可以看見彈孔累累的北山洋樓，與美麗的雙鯉湖相映成趣。',
    specialty: '古寧頭石蚵、一條根、金門高粱酒、貢糖',
    attractions: ['古寧頭戰史館', '北山播音牆', '慈湖落日觀海平台', '雙鯉濕地自然中心', '金門大學']
  },
  {
    id: 'jincheng',
    name: 'Jincheng',
    chineseName: '金城鎮',
    description: '【金城鎮】是金門縣政府所在地，也是歷史悠久的政經中心。擁有模範街、邱良功母節孝坊等珍貴古蹟，以及充滿人文氣息的珠山、歐厝閩南聚落。',
    specialty: '高粱酒、鋼刀、貢糖、廣東粥',
    attractions: ['莒光樓', '翟山坑道', '建功嶼', '模範街', '總兵署']
  },
  {
    id: 'jinhu',
    name: 'Jinhu',
    chineseName: '金湖鎮',
    description: '【金湖鎮】坐擁金門第一大湖——太湖，以及美麗的太武山。太武山上的「毋忘在莒」石刻是金門的精神象徵。新湖漁港與陳景蘭洋樓也是極具人氣的打卡點。',
    specialty: '酸白菜、貢糖、牛肉乾、一條根',
    attractions: ['太武山 (毋忘在莒)', '陳景蘭洋樓', '特約茶室展示館', '新湖漁港', '八二三戰史館']
  },
  {
    id: 'jinsha',
    name: 'Jinsha',
    chineseName: '金沙鎮',
    description: '【金沙鎮】位於金門東北部，是風獅爺分布密度最高的地方。這裡有金門唯一的歷史民俗博物館，以及保留原始風貌的沙美老街（沙美摩洛哥）與山后民俗文化村。',
    specialty: '風獅爺紀念品、高粱燒餅、小麥製品',
    attractions: ['山后民俗文化村', '沙美老街', '獅山砲陣地', '馬山觀測所', '歷史民俗博物館']
  },
  {
    id: 'lieyu',
    name: 'Lieyu',
    chineseName: '烈嶼鄉',
    description: '【烈嶼鄉】又稱「小金門」，是唯一需要乘船或過金門大橋抵達的鄉鎮。保留了極為純樸的島嶼風情，擁有美麗的九宮坑道、沙溪堡以及著名的芋頭美食。',
    specialty: '烈嶼香芋頭、竹葉貢糖、桶餅',
    attractions: ['九宮坑道', '沙溪堡', '西方老街', '國姓井', '八達樓子']
  }
];
