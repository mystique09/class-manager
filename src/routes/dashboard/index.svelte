<script context="module">
	// @ts-ignore
	export async function load({ session }) {
		// authorize user
		if (!session.user) {
			return { redirect: '/auth', status: 302 };
		}

		const classrooms = await fetch(`/api/classrooms/${session.user.id}`).then(res => res.json());

		return {
			status: 200,
			props: {
				classrooms: []
			}
		};
	}
</script>

<script lang="ts">
	import ClassroomCard from '$lib/components/classroom_card.svelte';
	export let classrooms: Classroom[];
</script>

{#if classrooms.length === 0}
	<div class="flex flex-col items-center justify-center h-screen">
		<h1 class="font-semibold">Welcome, you don't have a classroom yet.</h1>
		<div class="flex gap-4 pt-6">
			<button class="btn px-8 btn-ghost normal-case text-secondary">Create Class</button>
			<button class="btn px-8 normal-case btn-secondary text-white">Join Class</button>
		</div>
	</div>
{:else}
	<div class="flex h-screen w-full p-2">
		<div class="classrooms flex flex-col w-full gap-2">
			{#each classrooms as room}
				<ClassroomCard {room} />
			{/each}
		</div>
	</div>
{/if}
