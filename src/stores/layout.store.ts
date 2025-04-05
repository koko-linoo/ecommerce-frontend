import { create } from "zustand";

interface LayoutStore {
  collapsed: boolean;
  toggle: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  collapsed: true,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
}));
