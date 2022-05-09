<script lang="ts">
	async function submitForm() {
		// todo
		console.log('todo!');
	}
</script>

<div class="h-full container flex flex-center items-center justify-center">
	<form
		on:submit|preventDefault={submitForm}
		class="h-1/2 mt-28 form-control rounded w-full max-w-xs bg-gray-600 shadow shadow-md p-3"
	>
		<h1 class="mb-8 text-4xl text-center">Login</h1>

		<label class="input-group py-1 ">
			<span class="bg-gray-300">
				<img class="h-6 w-6" src="/user-svgrepo-com.svg" alt="user-icon" />
			</span>
			<input
				type="text"
				placeholder="johndoe2993"
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</label>

		<label class="input-group py-1">
			<span class="bg-gray-300">
				<img class="h-6 w-6" src="/password-svgrepo-com.svg" alt="user-icon" />
			</span>
			<input
				type="password"
				placeholder="********"
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</label>

		<label class="input-group py-1">
			<span class="bg-gray-300">
				<img class="h-6 w-6" src="/email-svgrepo-com.svg" alt="user-icon" />
			</span>
			<input
				type="email"
				placeholder="johndoe2993@email.com"
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</label>
		<button class="mt-4 btn btn-md btn-primary">Login</button>
	</form>
</div>
