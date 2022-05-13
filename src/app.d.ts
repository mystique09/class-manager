/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  interface Locals {
    user: UserSession | null
  }
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

interface Classroom {
  id: string;
  name: string;
  section: string;
  room: subject;
  subject: string;
}

interface UserSession {
  id: string | null;
  username: string | null;
}
