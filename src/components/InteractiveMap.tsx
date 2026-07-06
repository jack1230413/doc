import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Info, Compass, Sparkles, Building2 } from 'lucide-react';
import { TOWNSHIPS } from '../data';
import { TownshipInfo } from '../types';

export default function InteractiveMap() {
  const [selectedTownship, setSelectedTownship] = useState<TownshipInfo>(
    TOWNSHIPS.find(t => t.id === 'jinning') || TOWNSHIPS[0]
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Customized coordinate points for interactive pins on the map
  const landmarks = [
    { name: '金寧DOC (金寧圖書館)', x: 340, y: 175, type: 'doc', desc: '我們的數位學習大本營！' },
    { name: '古寧頭戰史館', x: 305, y: 135, type: 'landmark', desc: '歷史戰役紀念地' },
    { name: '北山播音牆', x: 285, y: 145, type: 'landmark', desc: '巨大的水泥播音牆古蹟' },
    { name: '慈湖落日平台', x: 295, y: 185, type: 'landmark', desc: '絕美落日夕陽與鸕鶿景觀' },
    { name: '莒光樓', x: 310, y: 265, type: 'landmark', desc: '金門精神地標' },
    { name: '陳景蘭洋樓', x: 530, y: 255, type: 'landmark', desc: '金門最大最華麗的西洋式洋樓' },
    { name: '太武山 (毋忘在莒)', x: 520, y: 205, type: 'landmark', desc: '金門最高峰，登山遠眺' },
    { name: '山后民俗文化村', x: 610, y: 125, type: 'landmark', desc: '完整18棟閩南傳統古厝聚落' },
    { name: '沙溪堡', x: 95, y: 275, type: 'landmark', desc: '小金門最西端守衛哨' },
  ];

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
            點擊下方互動地圖的各個區域，探索金門五大鄉鎮的獨特風情！金寧DOC正在熱情地對您招手喔 🦁✨
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Area (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-stone-100 flex flex-col justify-between relative overflow-hidden min-h-[380px] md:min-h-[440px]">
            {/* Background elements */}
            <div className="absolute top-2 left-3 text-[10px] font-mono text-stone-300 pointer-events-none select-none">
              TAIWAN STRAIT / KINMEN MAP v1.0
            </div>
            
            {/* Legend / Title overlay */}
            <div className="absolute top-4 right-4 bg-amber-50/90 backdrop-blur-xs border border-amber-200/50 p-3 rounded-xl text-xs pointer-events-none shadow-xs">
              <p className="font-semibold text-stone-700 mb-1.5 flex items-center gap-1">
                <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-xs"></span>
                地圖圖例說明
              </p>
              <div className="space-y-1 text-stone-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>金寧DOC (學習中心)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>知名地標/景點</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-4 h-0.5 border-t border-dashed border-sky-400"></span>
                  <span>金門大橋 (2022開通)</span>
                </div>
              </div>
            </div>

            {/* SVG Interactive Map */}
            <div className="w-full flex-1 flex items-center justify-center">
              <svg 
                viewBox="0 0 750 380" 
                className="w-full h-auto max-w-[620px] select-none filter drop-shadow-md"
              >
                {/* Sea/Water Accents */}
                <path d="M 50,320 Q 120,330 180,310 T 320,320" fill="none" stroke="#bae6fd" strokeWidth="2" strokeDasharray="5,10" opacity="0.6" />
                <path d="M 400,80 Q 480,70 560,90" fill="none" stroke="#bae6fd" strokeWidth="2" strokeDasharray="5,10" opacity="0.6" />

                {/* --- KINMEN BRIDGE (金門大橋) --- */}
                {/* Connects Lieyu (145, 250) to Jinning (280, 200) */}
                <path 
                  d="M 145,245 Q 210,210 280,195" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth="3.5" 
                  strokeDasharray="4,5" 
                  className="animate-pulse"
                />
                <text x="210" y="200" transform="rotate(-15, 210, 200)" fill="#0284c7" className="text-[10px] font-bold tracking-wider font-sans">
                  金門大橋
                </text>

                {/* --- TOWNSHIP SHAPES --- */}
                
                {/* 1. 烈嶼鄉 (Lieyu) - Little Kinmen */}
                <g 
                  onClick={() => setSelectedTownship(TOWNSHIPS.find(t => t.id === 'lieyu')!)}
                  onMouseEnter={() => setHoveredId('lieyu')}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <path 
                    d="M 80,240 C 90,200 135,210 145,230 C 160,250 145,285 115,290 C 85,295 70,265 80,240 Z" 
                    className={`transition-colors duration-300 ${
                      selectedTownship.id === 'lieyu' 
                        ? 'fill-sky-200 stroke-sky-500 stroke-2 shadow-xs' 
                        : hoveredId === 'lieyu'
                          ? 'fill-sky-100 stroke-sky-400 stroke-2'
                          : 'fill-sky-50/90 stroke-sky-300'
                    }`}
                  />
                  <text x="110" y="255" className="fill-sky-800 font-bold text-xs font-sans pointer-events-none">烈嶼鄉</text>
                </g>

                {/* 2. 金城鎮 (Jincheng) */}
                <g 
                  onClick={() => setSelectedTownship(TOWNSHIPS.find(t => t.id === 'jincheng')!)}
                  onMouseEnter={() => setHoveredId('jincheng')}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <path 
                    d="M 280,225 C 280,210 320,220 330,230 C 355,210 380,240 380,265 C 380,295 330,315 295,300 C 270,290 260,255 280,225 Z" 
                    className={`transition-colors duration-300 ${
                      selectedTownship.id === 'jincheng' 
                        ? 'fill-teal-200 stroke-teal-500 stroke-2' 
                        : hoveredId === 'jincheng'
                          ? 'fill-teal-100 stroke-teal-400 stroke-2'
                          : 'fill-teal-50/90 stroke-teal-300'
                    }`}
                  />
                  <text x="325" y="275" className="fill-teal-800 font-bold text-xs font-sans pointer-events-none">金城鎮</text>
                </g>

                {/* 3. 金寧鄉 (Jinning) - TARGET SPECIAL REGION */}
                <g 
                  onClick={() => setSelectedTownship(TOWNSHIPS.find(t => t.id === 'jinning')!)}
                  onMouseEnter={() => setHoveredId('jinning')}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <path 
                    d="M 280,225 C 290,170 330,125 385,145 C 405,155 425,185 410,210 C 390,230 355,220 330,230 C 320,220 280,210 280,225 Z" 
                    className={`transition-colors duration-300 ${
                      selectedTownship.id === 'jinning' 
                        ? 'fill-amber-300 stroke-orange-500 stroke-3 filter drop-shadow-sm' 
                        : hoveredId === 'jinning'
                          ? 'fill-amber-200 stroke-orange-400 stroke-2'
                          : 'fill-amber-100/90 stroke-amber-400'
                    }`}
                  />
                  {/* Glowing border ring for Jinning */}
                  {selectedTownship.id === 'jinning' && (
                    <path 
                      d="M 280,225 C 290,170 330,125 385,145 C 405,155 425,185 410,210 C 390,230 355,220 330,230 C 320,220 280,210 280,225 Z" 
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="1.5"
                      className="animate-ping opacity-30"
                    />
                  )}
                  <text x="330" y="165" className="fill-amber-900 font-extrabold text-sm font-sans pointer-events-none flex items-center">
                    金寧鄉 🦁
                  </text>
                </g>

                {/* Isthmus/Connecting Middle Land */}
                <path 
                  d="M 380,245 Q 430,215 465,215 Q 430,250 380,245" 
                  fill="#f5f5f4" 
                  stroke="#d6d3d1" 
                  strokeWidth="1"
                  opacity="0.9"
                />

                {/* 4. 金沙鎮 (Jinsha) */}
                <g 
                  onClick={() => setSelectedTownship(TOWNSHIPS.find(t => t.id === 'jinsha')!)}
                  onMouseEnter={() => setHoveredId('jinsha')}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <path 
                    d="M 465,215 C 465,185 480,140 520,115 C 580,95 650,115 660,155 C 670,195 620,215 575,205 C 535,205 480,215 465,215 Z" 
                    className={`transition-colors duration-300 ${
                      selectedTownship.id === 'jinsha' 
                        ? 'fill-emerald-200 stroke-emerald-500 stroke-2' 
                        : hoveredId === 'jinsha'
                          ? 'fill-emerald-100 stroke-emerald-400 stroke-2'
                          : 'fill-emerald-50/90 stroke-emerald-300'
                    }`}
                  />
                  <text x="560" y="150" className="fill-emerald-800 font-bold text-xs font-sans pointer-events-none">金沙鎮</text>
                </g>

                {/* 5. 金湖鎮 (Jinhu) */}
                <g 
                  onClick={() => setSelectedTownship(TOWNSHIPS.find(t => t.id === 'jinhu')!)}
                  onMouseEnter={() => setHoveredId('jinhu')}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <path 
                    d="M 465,215 C 485,235 535,225 575,205 C 620,215 650,235 640,265 C 620,315 540,315 500,285 C 475,265 455,235 465,215 Z" 
                    className={`transition-colors duration-300 ${
                      selectedTownship.id === 'jinhu' 
                        ? 'fill-indigo-200 stroke-indigo-500 stroke-2' 
                        : hoveredId === 'jinhu'
                          ? 'fill-indigo-100 stroke-indigo-400 stroke-2'
                          : 'fill-indigo-50/90 stroke-indigo-300'
                    }`}
                  />
                  <text x="535" y="265" className="fill-indigo-800 font-bold text-xs font-sans pointer-events-none">金湖鎮</text>
                </g>

                {/* --- DYNAMIC INTERACTIVE PINS --- */}
                <AnimatePresence>
                  {landmarks.map((pin, i) => {
                    const isDoc = pin.type === 'doc';
                    return (
                      <g key={i} className="group/pin cursor-pointer">
                        {isDoc ? (
                          <>
                            {/* Special pulsing ring for DOC */}
                            <circle 
                              cx={pin.x} 
                              cy={pin.y} 
                              r="11" 
                              fill="none" 
                              stroke="#ef4444" 
                              strokeWidth="2" 
                              className="animate-ping opacity-60"
                            />
                            {/* Outer interactive circle */}
                            <circle 
                              cx={pin.x} 
                              cy={pin.y} 
                              r="7" 
                              fill="#ef4444" 
                              className="stroke-white stroke-2 drop-shadow-sm" 
                            />
                            {/* Mascot or center dot */}
                            <circle cx={pin.x} cy={pin.y} r="2.5" fill="#ffffff" />
                            {/* Wind Lion Mascot flag */}
                            <g transform={`translate(${pin.x - 14}, ${pin.y - 32})`}>
                              <rect width="28" height="18" rx="4" fill="#ea580c" className="stroke-white stroke-1 drop-shadow-sm" />
                              <text x="14" y="13" textAnchor="middle" className="fill-white text-[10px] font-bold">DOC</text>
                            </g>
                          </>
                        ) : (
                          <>
                            {/* Small pin for standard landmarks */}
                            <circle 
                              cx={pin.x} 
                              cy={pin.y} 
                              r="4.5" 
                              fill="#f59e0b" 
                              className="stroke-white stroke-1.5 hover:scale-130 transition-transform duration-200" 
                            />
                          </>
                        )}
                        
                        {/* Tooltip on hover */}
                        <g className="opacity-0 group-hover/pin:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <rect 
                            x={pin.x - 70} 
                            y={pin.y - 52} 
                            width="140" 
                            height="34" 
                            rx="6" 
                            fill="#1c1917" 
                            opacity="0.9" 
                          />
                          <text 
                            x={pin.x} 
                            y={pin.y - 38} 
                            textAnchor="middle" 
                            className="fill-white font-bold text-[9px] font-sans"
                          >
                            {pin.name}
                          </text>
                          <text 
                            x={pin.x} 
                            y={pin.y - 26} 
                            textAnchor="middle" 
                            className="fill-stone-300 text-[8px] font-sans"
                          >
                            {pin.desc}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </AnimatePresence>
              </svg>
            </div>

            {/* Hint for interaction */}
            <div className="text-center text-xs text-stone-400 font-sans mt-2 flex items-center justify-center gap-1">
              <Info className="w-3.5 h-3.5 text-stone-300" />
              點擊地圖色塊可切換右側鄉鎮導覽；游標懸停在圓點上可看景點名稱。
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
                      <h5 className="text-xs font-bold text-red-800 mb-0.5">金寧數位資訊中心 (圖書館2F)</h5>
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
