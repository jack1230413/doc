import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, X, Calendar, MapPin, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { NOSTALGIC_PHOTOS } from '../data';
import { NostalgicPhoto } from '../types';

interface NostalgicGalleryProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function NostalgicGallery({ isOpen, onClose }: NostalgicGalleryProps) {
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [isSepiaMode, setIsSepiaMode] = useState<boolean>(true);

  const categories = ['全部', '建築', '生活', '風景'];

  const filteredPhotos = activeCategory === '全部'
    ? NOSTALGIC_PHOTOS
    : NOSTALGIC_PHOTOS.filter(p => p.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIdx === null) return;
    setSelectedPhotoIdx(prev => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIdx === null) return;
    setSelectedPhotoIdx(prev => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  const currentPhoto = selectedPhotoIdx !== null ? filteredPhotos[selectedPhotoIdx] : null;

  return (
    <div className="w-full">
      
      {/* 1. Main Gallery Section in page */}
      <section id="nostalgia-gallery" className="py-12 bg-orange-50/20 rounded-3xl border border-orange-100/40 p-6 md:p-8 relative overflow-hidden">
        
        {/* Background Vintage Stamps/Decors */}
        <div className="absolute top-4 right-6 text-6xl opacity-10 select-none pointer-events-none font-serif font-bold text-orange-900">
          金寧 1970
        </div>
        <div className="absolute bottom-6 left-6 text-7xl opacity-5 select-none pointer-events-none">
          📮
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                回憶時光機
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 tracking-tight">
                金寧懷舊時光相簿
              </h2>
              <p className="text-stone-500 text-xs md:text-sm mt-1 max-w-lg">
                這些黑白與彩色的影像，是長輩們年輕時生活的舞台，承載著金寧鄉厚重的歷史與愛。點擊照片看故事！
              </p>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-1.5 bg-stone-100 p-1 rounded-xl self-start md:self-end border border-stone-200/50">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedPhotoIdx(null); // Reset selected idx in filter
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-stone-600 hover:bg-stone-200/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Polaroid Photo Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => {
                // Find actual overall index in NOSTALGIC_PHOTOS for lightbox matching
                const globalIdx = NOSTALGIC_PHOTOS.findIndex(p => p.id === photo.id);
                return (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    whileHover={{ y: -6, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={() => setSelectedPhotoIdx(index)}
                    className="cursor-pointer bg-white p-4 pb-6 rounded-xs shadow-md border border-stone-200/70 max-w-[320px] w-full flex flex-col items-center relative group"
                  >
                    {/* Shadow overlay effect */}
                    <div className="absolute inset-x-0 top-0 h-4 bg-linear-to-b from-stone-900/5 to-transparent pointer-events-none rounded-t-xs" />
                    
                    {/* Image frame */}
                    <div className="w-full aspect-4/3 bg-stone-100 overflow-hidden rounded-xs border border-stone-200 relative">
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-all duration-700 filter sepia-[0.3] group-hover:scale-105 group-hover:sepia-0"
                      />
                      <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/90 text-stone-800 text-xs px-3 py-1.5 rounded-full font-bold shadow-md flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          點擊進入時光機
                        </span>
                      </div>
                    </div>

                    {/* Bottom tape-like style or handwriting */}
                    <div className="mt-4 w-full text-center">
                      <span className="inline-block text-[10px] tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/50 mb-1 font-semibold uppercase">
                        {photo.category}
                      </span>
                      <h3 className="text-base font-bold text-stone-800 line-clamp-1 font-sans">
                        {photo.title}
                      </h3>
                      <div className="flex items-center justify-center gap-3 text-stone-500 text-[11px] mt-1.5 font-mono">
                        <span className="flex items-center gap-0.5">
                          <Calendar className="w-3 h-3 text-stone-400" />
                          {photo.year}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          {photo.location.split(' ')[1] || '金門'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 2. TIMELINE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhotoIdx !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedPhotoIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIdx(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors z-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="w-full max-w-5xl bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12"
              onClick={e => e.stopPropagation()} // Stop bubbling
            >
              {/* Left Column: Interactive Image Frame (7 Cols) */}
              <div className="lg:col-span-7 bg-stone-950 flex flex-col justify-between items-center p-6 relative min-h-[300px] md:min-h-[420px]">
                {/* Vintage Sepia Control Bar */}
                <div className="absolute top-4 left-6 flex items-center gap-3 z-10">
                  <span className="text-[10px] text-stone-400 font-mono tracking-wider">相片風格：</span>
                  <div className="flex bg-stone-800 p-0.5 rounded-lg border border-stone-700 text-[10px] text-stone-300">
                    <button
                      onClick={() => setIsSepiaMode(true)}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        isSepiaMode ? 'bg-amber-600 text-white font-bold' : 'hover:text-white'
                      }`}
                    >
                      懷舊黃褐
                    </button>
                    <button
                      onClick={() => setIsSepiaMode(false)}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        !isSepiaMode ? 'bg-stone-700 text-white font-bold' : 'hover:text-white'
                      }`}
                    >
                      原始彩色
                    </button>
                  </div>
                </div>

                {/* Main Image Slider Container */}
                <div className="w-full flex-1 flex items-center justify-center py-6 relative">
                  {/* Left Slider Arrow */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 md:-left-2 bg-stone-800/80 hover:bg-stone-700 text-white p-2.5 rounded-full transition-colors shadow-lg z-10 hover:scale-105 border border-stone-700"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Image Frame */}
                  <motion.div
                    key={currentPhoto.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-full max-h-[480px] overflow-hidden rounded-lg shadow-xl border border-stone-800"
                  >
                    <img
                      src={currentPhoto.imageUrl}
                      alt={currentPhoto.title}
                      referrerPolicy="no-referrer"
                      className={`w-full max-h-[400px] object-contain transition-all duration-300 ${
                        isSepiaMode ? 'filter sepia-[0.8] contrast-110 saturate-75 brightness-95' : ''
                      }`}
                    />
                  </motion.div>

                  {/* Right Slider Arrow */}
                  <button
                    onClick={handleNext}
                    className="absolute right-0 md:-right-2 bg-stone-800/80 hover:bg-stone-700 text-white p-2.5 rounded-full transition-colors shadow-lg z-10 hover:scale-105 border border-stone-700"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Sub-label inside image section */}
                <div className="w-full flex justify-between items-center text-[10px] text-stone-400 font-mono border-t border-stone-800/40 pt-3">
                  <span>{currentPhoto.location}</span>
                  <span>{selectedPhotoIdx + 1} / {filteredPhotos.length}</span>
                </div>
              </div>

              {/* Right Column: Descriptions & Story telling (5 Cols) */}
              <div className="lg:col-span-5 bg-stone-900 p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-amber-950 text-amber-400 border border-amber-900/50 font-bold">
                      {currentPhoto.category}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-500" />
                      {currentPhoto.year}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    {currentPhoto.title}
                  </h3>

                  <div className="h-0.5 bg-stone-800 w-full mb-5" />

                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed mb-6 whitespace-pre-line font-sans">
                    {currentPhoto.description}
                  </p>

                  <div className="bg-stone-950/50 p-4 rounded-xl border border-stone-800/60">
                    <h4 className="text-xs font-bold text-amber-500/80 tracking-widest uppercase mb-1.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      歷史地理地標
                    </h4>
                    <p className="text-stone-400 text-xs font-medium">
                      {currentPhoto.location}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏡</span>
                    <span className="text-[11px] text-stone-400">金寧鄉數位資訊中心關心您</span>
                  </div>
                  <button
                    onClick={() => setSelectedPhotoIdx(null)}
                    className="text-xs text-amber-500 hover:text-amber-400 transition-colors font-semibold"
                  >
                    返回相簿目錄
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
