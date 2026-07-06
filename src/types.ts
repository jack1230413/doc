export interface Senior {
  id: string;
  name: string;
  age: number;
  gender: '男' | '女';
  personality: string;
  avatar: string; // Emoji representing their personality or look
  hobby: string;
  docStory: string; // Their proudest learning story at Jinning DOC
  favoriteMemory: string; // Their nostalgic Kinmen memory
  badge: string; // DOC learning badge (e.g., "平板達人")
  badgeColor: string; // Badge badge background/text style
}

export interface NostalgicPhoto {
  id: string;
  title: string;
  description: string;
  year: string;
  imageUrl: string;
  category: '建築' | '生活' | '學習' | '風景';
  location: string;
}

export interface TownshipInfo {
  id: string;
  name: string;
  chineseName: string;
  description: string;
  specialty: string;
  attractions: string[];
}
