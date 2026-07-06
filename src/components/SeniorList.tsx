import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, UserCheck, Heart, Award, Sparkles, BookOpen, Clock, X } from 'lucide-react';
import { SENIORS } from '../data';
import { Senior } from '../types';

export default function SeniorList() {
  const [filter, setFilter] = useState<'全部' | '男' | '女'>('全部');
  const [selectedSenior, setSelectedSenior] = useState<Senior | null>(null);

  const filteredSeniors = filter === '全部'
    ? SENIORS
    : SENIORS.filter(s => s.gender === filter);

  // Stagger animation variants for cards list
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  return (
    <section id="senior-directory" className="py-12 max-w-6xl mx-auto px-4 md:px-0">
      
      {/* Filters and Header Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 border-b border-orange-100/50 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3.5 py-1 rounded-full text-xs font-semibold mb-2">
            <Users className="w-3.5 h-3.5 text-orange-600" />
            長輩樂活園地
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 tracking-tight flex items-center gap-2">
            金寧 DOC 長輩選單
            <span className="text-lg md:text-xl animate-pulse">🌟</span>
          </h2>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            這裡記錄了每一位在數位中心努力學習、開心交流的可愛長輩。點點看，看他們的數位驚奇歷程！
          </p>
        </div>

        {/* Filter Button Group */}
        <div className="flex bg-stone-100/90 border border-stone-200/50 p-1 rounded-xl shadow-xs self-stretch md:self-auto justify-center">
          {(['全部', '男', '女'] as const).map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all duration-300 relative ${
                filter === option
                  ? 'bg-orange-500 text-white shadow-sm scale-102'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              {option === '全部' ? '全部長輩' : option === '男' ? '👨🏻‍🦳 男生長輩' : '👵🏻 女生長輩'}
              {filter === option && (
                <motion.span 
                  layoutId="activeFilter" 
                  className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Senior Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredSeniors.map(senior => (
            <motion.div
              key={senior.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 12px 24px -10px rgba(249,115,22,0.15)",
                borderColor: "rgba(249,115,22,0.3)"
              }}
              onClick={() => setSelectedSenior(senior)}
              className="bg-white rounded-2xl p-5 border border-stone-100 shadow-xs cursor-pointer flex flex-col justify-between transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-orange-50/10 group relative overflow-hidden"
            >
              {/* Corner gender design accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-5 transition-transform group-hover:scale-110 ${
                senior.gender === '男' ? 'text-sky-500' : 'text-rose-500'
              }`}>
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 50,0 Q 100,0 100,50 L 100,0 Z" />
                </svg>
              </div>

              <div>
                {/* Avatar with dynamic ring */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm border ${
                    senior.gender === '男' 
                      ? 'bg-sky-50 border-sky-100/70 text-sky-800' 
                      : 'bg-rose-50 border-rose-100/70 text-rose-800'
                  }`}>
                    {senior.avatar}
                  </div>
                  
                  {/* Category badge */}
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${senior.badgeColor}`}>
                    {senior.badge}
                  </span>
                </div>

                {/* Name & Gender & Age Row */}
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-bold text-stone-800 group-hover:text-orange-600 transition-colors">
                    {senior.name}
                  </h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                    senior.gender === '男' 
                      ? 'bg-sky-50 text-sky-700 border border-sky-100' 
                      : 'bg-rose-50 text-rose-700 border border-rose-100'
                  }`}>
                    {senior.gender} ｜ {senior.age}歲
                  </span>
                </div>

                {/* Personality Snippet */}
                <p className="text-stone-600 text-xs md:text-[13px] leading-relaxed line-clamp-2 mt-2 flex items-start gap-1">
                  <Heart className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5 fill-orange-400" />
                  <span>
                    <strong className="text-stone-700">個性：</strong>
                    {senior.personality}
                  </span>
                </p>
              </div>

              {/* Read more footer inside card */}
              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-400 group-hover:text-orange-500 transition-colors">
                <span>看學習故事...</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- DETAILED SENIOR LEARNING DIALOG --- */}
      <AnimatePresence>
        {selectedSenior && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSenior(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border border-orange-100/50 p-6 md:p-8 relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSenior(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 bg-stone-100 p-1.5 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Top Banner Avatar */}
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-stone-100">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md border shrink-0 ${
                  selectedSenior.gender === '男' 
                    ? 'bg-sky-50 border-sky-100/70 text-sky-800' 
                    : 'bg-rose-50 border-rose-100/70 text-rose-800'
                }`}>
                  {selectedSenior.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-stone-800">{selectedSenior.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                      selectedSenior.gender === '男' 
                        ? 'bg-sky-100 text-sky-800' 
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {selectedSenior.gender}性 ｜ {selectedSenior.age}歲
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-orange-600 font-semibold mt-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>榮獲金寧DOC榮譽勳章：{selectedSenior.badge}</span>
                  </div>
                </div>
              </div>

              {/* Content sections */}
              <div className="space-y-5 text-stone-700">
                {/* 1. Personality */}
                <div>
                  <h4 className="text-xs font-bold text-stone-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-stone-400" />
                    個性特質
                  </h4>
                  <p className="text-sm text-stone-700 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    {selectedSenior.personality}
                  </p>
                </div>

                {/* 2. DOC Story */}
                <div>
                  <h4 className="text-xs font-bold text-orange-800 tracking-wider uppercase mb-1.5 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                    金寧 DOC 數位學習故事
                  </h4>
                  <div className="p-4 bg-orange-50/50 border border-orange-100/50 rounded-xl">
                    <p className="text-xs md:text-sm leading-relaxed text-stone-600">
                      {selectedSenior.docStory}
                    </p>
                  </div>
                </div>

                {/* 3. Favorite Nostalgic Memory */}
                <div>
                  <h4 className="text-xs font-bold text-stone-400 tracking-wider uppercase mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    珍貴懷舊回憶 (金門時光)
                  </h4>
                  <p className="text-xs md:text-sm leading-relaxed text-stone-500 italic bg-stone-50 p-3 rounded-xl border border-dashed border-stone-200">
                    「 {selectedSenior.favoriteMemory} 」
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex justify-between items-center">
                <div className="text-[10px] text-stone-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-orange-400 animate-pulse" />
                  <span>金寧數位中心活潑樂學 🦁</span>
                </div>
                <button
                  onClick={() => setSelectedSenior(null)}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-5 py-2 rounded-xl font-bold shadow-xs transition-colors"
                >
                  太棒了，關閉
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
