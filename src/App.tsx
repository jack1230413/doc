import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Users, MapPin, Heart, BookOpen, Compass, Image as ImageIcon } from 'lucide-react';
import Header from './components/Header';
import SeniorList from './components/SeniorList';
import NostalgicGallery from './components/NostalgicGallery';
import InteractiveMap from './components/InteractiveMap';

export default function App() {
  // Simple navigation handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50/15 font-sans selection:bg-orange-100 selection:text-orange-900 pb-16">
      
      {/* 1. Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-100/50 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo & Mascot */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-xl shadow-xs">
              🦁
            </div>
            <div>
              <span className="font-extrabold text-base text-stone-800 tracking-tight font-sans">
                金寧數位資訊中心
              </span>
              <span className="hidden sm:inline-block text-[10px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.2 rounded ml-1.5 border border-orange-200">
                金寧 DOC
              </span>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-xs md:text-sm font-semibold text-stone-600">
            <button 
              onClick={() => scrollToSection('senior-directory')}
              className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all flex items-center gap-1"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">長輩選單</span>
            </button>
            <button 
              onClick={() => scrollToSection('nostalgia-gallery')}
              className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all flex items-center gap-1"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">懷舊相簿</span>
            </button>
            <button 
              onClick={() => scrollToSection('kinmen-map')}
              className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">金門地圖</span>
            </button>
          </div>

        </div>
      </nav>

      {/* 2. Cozy Hero Header Banner */}
      <Header />

      {/* 3. Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 mt-12 space-y-16">
        
        {/* Intro Highlight Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-orange-500 to-amber-500 text-white p-6 md:p-8 rounded-3xl shadow-md border border-orange-400 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Backdrop decors */}
          <div className="absolute right-0 bottom-0 text-[160px] opacity-10 pointer-events-none select-none font-sans font-extrabold">
            DOC
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs font-bold border border-white/25">
              💡 科技無礙，溫馨共學
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              想要直接進入懷舊時光，觀看長輩們的家鄉風景嗎？
            </h3>
            <p className="text-orange-50 text-xs md:text-sm max-w-xl">
              我們為您精心整理了金門的古建築、歷史街道與天然石蚵田，帶您回到長輩們最美的青春回憶！
            </p>
          </div>

          <button 
            onClick={() => scrollToSection('nostalgia-gallery')}
            className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 font-extrabold text-xs md:text-sm px-6 py-3 rounded-2xl shadow-md flex items-center gap-2 group shrink-0"
          >
            <ImageIcon className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform" />
            點此開啟懷舊照片 🎞️
          </button>
        </motion.section>

        {/* --- SECTION A: SENIOR LIST --- */}
        <SeniorList />

        {/* --- SECTION B: NOSTALGIC GALLERY --- */}
        <NostalgicGallery />

        {/* --- SECTION C: INTERACTIVE KINMEN MAP --- */}
        <InteractiveMap />

      </main>

      {/* 4. Interactive Sticky Floating Action Button (懷舊照片) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 hidden sm:block"
      >
        <button
          onClick={() => scrollToSection('nostalgia-gallery')}
          className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-3 rounded-full font-bold text-xs shadow-lg flex items-center gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20 active:scale-95 border-2 border-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          懷舊相簿 🎞️
        </button>
      </motion.div>

      {/* 5. Polished Footing Credits */}
      <footer className="mt-20 border-t border-orange-100/50 bg-stone-50 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-stone-500 text-xs md:text-sm">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-lg shadow-xs">
                🦁
              </div>
              <span className="font-extrabold text-base text-stone-800 tracking-tight">
                金寧數位資訊中心 (DOC)
              </span>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
              致力於推廣偏鄉數位落差改善、樂活銀髮數位共學，
              協助長輩運用平板與手機科技，記錄生活美好、傳承珍貴的金門歷史故事與無形文化。
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-bold text-stone-700 tracking-wider">快捷選單導覽</h4>
            <div className="space-y-1.5 flex flex-col text-xs">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left hover:text-orange-500 transition-colors">回網頁最頂端</button>
              <button onClick={() => scrollToSection('senior-directory')} className="text-left hover:text-orange-500 transition-colors">長輩樂活選單 (全部/男/女)</button>
              <button onClick={() => scrollToSection('nostalgia-gallery')} className="text-left hover:text-orange-500 transition-colors">懷舊時光相簿 (三大懷舊視角)</button>
              <button onClick={() => scrollToSection('kinmen-map')} className="text-left hover:text-orange-500 transition-colors">金門互動地圖 (金寧鄉特別標記)</button>
            </div>
          </div>

          {/* Info Contact */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-bold text-stone-700 tracking-wider">中心聯絡資訊</h4>
            <div className="space-y-1.5 text-xs text-stone-500 leading-relaxed">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>金門縣金寧鄉雅賢街 1 號 (金寧鄉公所圖書館2樓)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>指導單位：教育部 ｜ 承辦單位：金寧鄉公所</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 shrink-0 animate-pulse" />
                <span>金門大橋旁，伴您樂學數位生活</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="max-w-6xl mx-auto border-t border-stone-200/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <p>版權所有 © 2026 金寧數位資訊中心 (Jinning Digital Option Center). All Rights Reserved.</p>
          <div className="flex items-center gap-3 font-mono">
            <span>設計：樂活數位開發團隊</span>
            <span>｜</span>
            <span>地點：台灣金門縣金寧鄉</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
