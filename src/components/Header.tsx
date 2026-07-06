import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, BookOpen, Clock, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>('');
  
  useEffect(() => {
    // Show current local time dynamically
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('zh-TW', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine warm greeting based on hour
  const getMascotGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) return '「早安！金寧風獅爺向您問好！長輩們都開始來圖書館學平板囉，快進來看看吧！」';
    if (hour >= 11 && hour < 14) return '「中午好！風獅爺剛吃完金門石蚵麵線呢！天氣熱，記得常補充水分喔！」';
    if (hour >= 14 && hour < 18) return '「下午好！泡杯金門貢糖茶，跟著DOC長輩們一起看看過去的老相簿吧！」';
    return '「晚安！風獅爺在古寧頭慈湖畔守護著大家。夜深了，點盞溫馨的小燈，回顧長輩們的精彩回憶吧！」';
  };

  const bannerImagePath = '/src/assets/images/jinning_doc_banner_1783351796414.jpg';

  return (
    <header className="relative w-full overflow-hidden bg-linear-to-b from-amber-50/50 to-orange-50/30 border-b border-orange-100/40 pb-12 pt-8 px-4 md:px-8">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-stone-200/50 pb-4 mb-8 text-stone-500 text-xs font-sans gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>金寧數位資訊中心 ｜ 樂活老幼銀髮數位網 🟢</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="bg-stone-200/60 text-stone-600 px-2 py-0.5 rounded-md font-mono text-[11px] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              {currentTime || '金門時間載入中...'}
            </span>
            <span className="text-orange-600 font-semibold flex items-center gap-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              金門大橋直達 🌉
            </span>
          </div>
        </div>

        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (7 cols on large screens) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-800 border border-orange-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold"
            >
              <Sparkles className="w-4 h-4 text-orange-600 animate-spin-slow" />
              溫馨・樂活・數位・共學
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-stone-800 font-sans tracking-tight leading-tight"
              >
                金寧數位資訊中心
                <span className="block mt-1 text-linear-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  銀髮數位學習樂園
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-stone-600 text-sm md:text-base leading-relaxed"
              >
                金寧數位資訊中心 (Jinning DOC) 坐落於美麗的金寧鄉公所圖書館二樓。
                我們專為金寧鄉的長輩們提供最溫暖、貼心的數位學習服務。從平板電腦、
                手機拍照、LINE長輩圖設計，到傳承金門記憶的數位回憶錄，讓每位長輩都能在科技世界中活出自信、樂活不老！
              </motion.p>
            </div>

            {/* Mascot Hello Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3.5 shadow-xs relative"
            >
              {/* Cute Wind Lion God Indicator */}
              <div className="text-3xl select-none shrink-0 animate-bounce mt-1">
                🦁
              </div>
              <div>
                <h4 className="text-xs font-bold text-amber-900 tracking-wider flex items-center gap-1.5 mb-1">
                  <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                  金寧風獅爺 (DOC吉祥物)
                </h4>
                <p className="text-xs md:text-sm text-amber-800 font-medium leading-relaxed italic">
                  {getMascotGreeting()}
                </p>
              </div>
            </motion.div>

            {/* Dynamic Counter Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-stone-200/60 pt-6"
            >
              <div className="text-center bg-white p-3 rounded-xl border border-stone-100 shadow-xs">
                <p className="text-2xl font-extrabold text-orange-600">8 名</p>
                <p className="text-[10px] font-bold text-stone-400 mt-0.5">常駐樂活長輩</p>
              </div>
              <div className="text-center bg-white p-3 rounded-xl border border-stone-100 shadow-xs">
                <p className="text-2xl font-extrabold text-amber-600">300+ 堂</p>
                <p className="text-[10px] font-bold text-stone-400 mt-0.5">累計學習課程</p>
              </div>
              <div className="text-center bg-white p-3 rounded-xl border border-stone-100 shadow-xs">
                <p className="text-2xl font-extrabold text-emerald-600">100%</p>
                <p className="text-[10px] font-bold text-stone-400 mt-0.5">熱情分享與愛</p>
              </div>
            </motion.div>

          </div>

          {/* Right Image/Banner Column (5 cols on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-[460px] aspect-16/10 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-orange-500/5 bg-stone-100 group">
              <img
                src={bannerImagePath}
                alt="長輩在金寧DOC數位資訊中心共同學習"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              {/* Overlaid Tag */}
              <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                數位共學日常實景
              </div>
            </div>

            {/* Circular Stamp Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600 text-white rounded-full flex flex-col items-center justify-center text-center p-2 shadow-lg border-2 border-white select-none pointer-events-none hidden md:flex"
            >
              <span className="text-[8px] tracking-widest font-extrabold">JINNING DOC</span>
              <span className="text-lg">🏮</span>
              <span className="text-[8px] font-bold">樂活長青</span>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </header>
  );
}
