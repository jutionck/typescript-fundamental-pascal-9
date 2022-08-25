export interface IAction {
  isi: string[];
  lihat(): Promise<string[]>;
  ambil(item: string): Promise<string>;
  simpan(item: string): Promise<string>;
}

export interface IKulkas {
  buka(): Promise<IAction>;
  tutup(): Promise<void>;
}
