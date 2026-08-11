import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Info, Compass, Sparkles, Building2 } from 'lucide-react';
import { TOWNSHIPS } from '../data';
import { TownshipInfo } from '../types';
import mapImg from '../assets/images/doc/src/assets/images/kinmen-map-doc.png';

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
            <div className="w-full flex-1 flex items-center justify-center py-2 relative group overflow-hidden rounded-xl bg-stone-50/50 border border-stone-100">
              <img 
                src={mapImg} 
                alt="金門地圖" 
                className="w-full h-auto max-h-[380px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-102"
              />
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
