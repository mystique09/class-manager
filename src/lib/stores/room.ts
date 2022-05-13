import { writable, type Writable } from "svelte/store";

const store: Writable<string[]> = writable([]);

function createRoomStore() {
  return {
    subscribe: store.subscribe,
    addRoom,
    updateRoom,
    deleteRoom
  }
}

async function addRoom() {
  store.update(n => {
    n.push("yo");
    return n;
  });
}

async function updateRoom() { }
async function deleteRoom() { }

export const roomStore = createRoomStore();
