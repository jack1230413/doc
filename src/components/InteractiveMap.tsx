import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Info, Compass, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { TOWNSHIPS } from '../data';
import { TownshipInfo } from '../types';
import mapImg from '../assets/images/kinmen-map.png';

export default function InteractiveMap() {
  const [selectedTownship, setSelectedTownship] = useState<TownshipInfo>(
    TOWNSHIPS.find(t => t.id === 'jinning') || TOWNSHIPS[0]
  );

  return (
    <section id="kinmen-map" className="py-12 px-4 md:px-8 bg-gradient-to-b from-amber-50/20 to-orange-50/50 rounded-3xl border border-orange-100/60 my-12 shadow-sm">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 shadow-xs"
          >
            <Compass className="w-4 h-4 animate-spin-slow text-orange-600" />
            金門地圖導覽
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-stone-800 font-sans tracking-tight"
          >
            尋找我們的家：美麗的<span className="text-orange-600 relative inline-block px-1">金寧鄉
              <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 -z-10 rounded-full"></span>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            探索金門五大鄉鎮的獨特風情！昔果山數位機會中心位於金寧鄉，熱情歡迎大家前來學習交流 🦁✨
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Image Area (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex flex-col justify-between relative overflow-hidden min-h-[380px] md:min-h-[440px]">
            
            {/* Top Bar Label */}
            <div className="flex items-center justify-between mb-3 text-xs text-stone-500 font-medium">
              <span className="font-mono text-[11px] text-stone-400">KINMEN MAP</span>
              <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-bold text-[11px]">
                昔果山數位機會中心所在地：金寧鄉
              </span>
            </div>

            {/* Kinmen Map Image Container */}
            <div className="w-full flex-1 flex items-center justify-center py-2 relative group rounded-xl bg-stone-50/50 border border-stone-100">
              <div className="relative inline-block max-w-full">
                <img 
                  src={mapImg} 
                  alt="金門地圖" 
                  className="w-full h-auto max-h-[380px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-102"
                />

                {/* DOC Location Pin Marker (金寧數位機會中心) */}
                <motion.a 
                  href="https://www.google.com/maps/place/%E6%98%94%E6%9E%9C%E5%B1%B1%E7%A4%BE%E5%8D%80%E6%B4%BB%E5%8B%95%E4%B8%AD%E5%BF%83/data=!4m2!3m1!1s0x0:0xbfbb47b5f319adfb?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="absolute -translate-x-1/2 -translate-y-full cursor-pointer z-10 group/pin block"
                  style={{ left: '56.5%', top: '69%' }}
                  onClick={() => setSelectedTownship(TOWNSHIPS.find(t => t.id === 'jinning') || TOWNSHIPS[0])}
                  title="點擊前往 Google 地圖（昔果山社區活動中心）"
                >
                  {/* Ping Animation Rings */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-red-500/40 rounded-full animate-ping pointer-events-none" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white shadow-xs pointer-events-none" />

                  {/* Pin Badge Label */}
                  <div className="relative flex items-center gap-1 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-lg border-2 border-white ring-2 ring-red-400/30 transform hover:scale-110 transition-transform whitespace-nowrap">
                    <MapPin className="w-3.5 h-3.5 fill-white text-red-600 animate-bounce" />
                    <span>金寧DOC 📍</span>
                    <ExternalLink className="w-3 h-3 text-amber-200 ml-0.5 opacity-80" />
                  </div>

                  {/* Tooltip on Hover */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-2.5 bg-stone-900/95 text-white rounded-xl shadow-xl backdrop-blur-xs opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-20 text-center border border-stone-700">
                    <p className="font-bold text-amber-300 text-xs flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      金寧數位機會中心 (DOC)
                    </p>
                    <p className="text-[10px] text-stone-300 mt-1 leading-relaxed">
                      位於金寧鄉昔果山社區活動中心，熱情歡迎大家前來數位學習！
                    </p>
                    <p className="text-[10px] text-amber-400 font-semibold mt-1.5 pt-1 border-t border-stone-800 flex items-center justify-center gap-1">
                      <ExternalLink className="w-3 h-3" /> 點擊開啟 Google 地圖導航 🗺️
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Township Selector Buttons underneath the map image */}
            <div className="mt-4 pt-3 border-t border-stone-100">
              <p className="text-xs text-stone-500 font-semibold mb-2 text-center flex items-center justify-center gap-1">
                <Info className="w-3.5 h-3.5 text-orange-500" />
                點擊選擇鄉鎮看詳細導覽與特產介紹：
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {TOWNSHIPS.map((township) => {
                  const isSelected = selectedTownship.id === township.id;
                  const isJinning = township.id === 'jinning';
                  return (
                    <button
                      key={township.id}
                      onClick={() => setSelectedTownship(township)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? isJinning
                            ? 'bg-amber-500 text-white border-amber-600 shadow-sm scale-105 ring-2 ring-amber-200'
                            : 'bg-orange-500 text-white border-orange-600 shadow-sm scale-105'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
                      }`}
                    >
                      {township.chineseName} {isJinning && '🦁'}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTownship.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100/60 h-full flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedTownship.id === 'jinning' 
                        ? 'bg-amber-100 text-amber-900 border border-amber-200 animate-pulse' 
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      {selectedTownship.id === 'jinning' ? '✨ 我們的所在地' : '金門鄉鎮導覽'}
                    </span>
                    <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">
                      {selectedTownship.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-stone-800 flex items-center gap-2 mb-3">
                    {selectedTownship.chineseName}
                    {selectedTownship.id === 'jinning' && (
                      <span className="text-xl animate-bounce">🦁</span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-5">
                    {selectedTownship.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-5 bg-orange-50/50 p-3.5 rounded-xl border border-orange-100/50">
                    <h4 className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-orange-500" />
                      在地特產 (美食與特產)
                    </h4>
                    <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
                      {selectedTownship.specialty}
                    </p>
                  </div>
                </div>

                {/* Popular Attractions */}
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-stone-400" />
                    推薦必遊景點
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTownship.attractions.map((attraction, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                          selectedTownship.id === 'jinning'
                            ? 'bg-amber-50 text-amber-800 border-amber-200/60 hover:bg-amber-100 transition-colors'
                            : 'bg-stone-50 text-stone-600 border-stone-200/50'
                        }`}
                      >
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Highlight on Jinning DOC */}
                {selectedTownship.id === 'jinning' && (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3"
                  >
                    <div className="p-2 bg-red-100 text-red-600 rounded-lg shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 animate-bounce" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-red-800 mb-0.5">昔果山 (活動中心)</h5>
                      <p className="text-[11px] text-red-700 leading-relaxed">
                        我們在這裡教導長輩使用平板電腦、智慧型手機和各類數位工具。歡迎長輩們每天來喝茶、上網學習、一起記錄精彩人生！
                      </p>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
