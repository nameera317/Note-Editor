
import { defineStore } from 'pinia';

export const useNotesStore = defineStore({
  id: 'notes',
  state: () => ({
    notes: [],
  }),
  actions: {
    addNote(inputText) {
      this.notes.push(inputText);
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
});