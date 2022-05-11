<script lang="ts">
	let loading = false;
	let errors = {
		username: 'Minimum length of 8 characters',
		email: 'Invalid email format.',
		password: 'Minimum length of 8 alphanumeric characters'
	};

	async function submitForm() {
		// todo
		loading = true;
		setTimeout(() => (loading = false), 1000);
		console.log('todo!');
	}
</script>

<svelte:head>
	<title>Class Management - Sign Up</title>
</svelte:head>

<div class="h-1/2 m-auto flex flex-center items-center justify-center">
	<form
		on:submit|preventDefault={submitForm}
		class="my-10 h-full w-full form-control rounded w-full max-w-xs bg-gray-100 shadow shadow-md p-3"
	>
		<h1 class="mb-8 font-light text-4xl text-center text-black text-sm">Create new Account</h1>

		<button type="button" class="btn btn-md  w-full btn-outline text-black"
			>Continue with Google</button
		>
		<button type="button" class="mt-3 btn btn-outline w-full bg-blue-600 text-white"
			>Continue with Facebook</button
		>

		<div class="divider" />

		{#if !!errors.username.length}
			<label class="label text-xs text-red-500" for="username">{errors.username}</label>
		{/if}
		<label class="input-group py-1 mt-auto">
			<span class="bg-gray-300">
				<img class="h-6 w-6" src="/user-svgrepo-com.svg" alt="user-icon" />
			</span>
			<input
				id="username"
				type="text"
				placeholder="johndoe2993"
				class:input-outline={!!errors.username.length}
				class:input-error={!!errors.username.length}
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</label>

		{#if !!errors.email.length}
			<label class="label text-xs text-red-500" for="username">{errors.email}</label>
		{/if}
		<label class="input-group py-1">
			<span class="bg-gray-300">
				<img class="h-6 w-6" src="/email-svgrepo-com.svg" alt="user-icon" />
			</span>
			<input
				id="email"
				type="email"
				placeholder="johndoe2993@email.com"
				class:input-outline={!!errors.email.length}
				class:input-error={!!errors.email.length}
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</label>

		{#if !!errors.password.length}
			<label class="label text-xs text-red-500" for="username">{errors.password}</label>
		{/if}
		<label class="input-group py-1">
			<span class="bg-gray-300">
				<img class="h-6 w-6" src="/password-svgrepo-com.svg" alt="user-icon" />
			</span>
			<input
				id="password"
				type="password"
				placeholder="********"
				class:input-outline={!!errors.password.length}
				class:input-error={!!errors.password.length}
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</label>

		<button type="submit" tabindex="-1" class:loading class="mt-4 btn btn-primary">Sign Up</button>
		<p class="text-xs text-center m-5">
			Already have an account?
			<span><a href="/auth" class="link link-accent">Login</a></span>
		</p>
	</form>
</div>
