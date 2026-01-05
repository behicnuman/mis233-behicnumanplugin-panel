type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  // Bonus: Yeni eklediğimiz ayarların tiplerini tanımlıyoruz
  nameColor: string;      // İsim rengi için
  circleOpacity: number;  // Daire şeffaflığı için
}