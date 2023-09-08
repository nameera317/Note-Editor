<script>
import { useNotesStore } from "@/stores/notes";
export default{
data() {
    return {
      inputText: '',
    };
  },
  computed: {
    notes() {
      const notesStore = useNotesStore();
      return notesStore.notes;
    },
  },
methods: {
    addNote() {
      if (this.inputText.trim() !== "") {
        const notesStore = useNotesStore();
        notesStore.addNote(this.inputText);
        this.inputText = "";
      }
    },
    deleteNote(index) {
      const notesStore = useNotesStore();
      notesStore.deleteNote(index);
    },
  },
}
</script>

<template>
  <div class="note p-4">
    <div class="div border border-black p-4 rounded-md">
      <textarea
        class="txt w-1/2 italic font-cursive p-4 rounded-md border focus:ring-primary-dark focus:border-primary-dark"
        v-model="inputText"
        placeholder="Add a new note..."
      ></textarea>
      <br>
      <button
        id="btn"
        @click="addNote"
        class="bg-black text-white p-2 rounded-md font-cursive mt-4 cursor-pointer hover:bg-gray-700"
      >Add Note</button>
    </div>
    <div class="List mt-4">
      <ul>
        <li
          v-for="(note, index) in notes"
          :key="index"
        >
          <div class="note-container">
            <div class="li-div italic font-cursive">{{ note }}</div>
            <button
              @click="deleteNote(index)"
              id="btn2"
              class="bg-black text-white p-2 rounded-md font-cursive ml-2 cursor-pointer hover:bg-gray-700"
            >Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.li-div{
  background-color: white;
  font-style: italic;
  font-family: "Caveat Brush", cursive;
  border-radius: 10px;
  border: none;
  text-align: left;
  padding: 5px;
  padding-left: 20px;
  flex: 1;
  
}
.note-container {
  display: flex; /* Use flexbox to make the div and button appear on the same line */
  margin-bottom: 10px; /* Add margin for spacing between items (adjust as needed) */
}
li{
list-style: none;
}


.div{
border: 3px solid black;
padding: 20px;
border-radius: 10px;
}
.List{
margin-top: 50px
}
</style>
