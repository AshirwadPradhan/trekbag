import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist(
    (set) => ({
      items: initialItems,
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });
          return { items: newItems };
        });
      },
      addItem: (itemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        };
        set((state) => {
          const newItems = [...state.items, newItem];
          return { items: newItems };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
