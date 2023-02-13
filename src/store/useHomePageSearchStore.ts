import { create } from 'zustand';

interface HomePageSearchStoreProps {
  keyword: string;
  pageSize: number;
  updateKeyword : (keyword:string) => void
  updatePageSize : (pageSize:number) => void
}

const useHomePageSearchStore = create<HomePageSearchStoreProps>((set) => ({
  keyword: '',
  pageSize: 15,
  updateKeyword: (keyword) => set({ keyword }),
  updatePageSize: (pageSize) => set({ pageSize }),
}));

export default useHomePageSearchStore;
