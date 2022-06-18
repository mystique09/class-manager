<script context="module">
    // @ts-ignore
    export async function load({ session }) {
		// authorize user
		if (!session.user) {
			return { redirect: '/auth', status: 302 };
		}

		return {
			status: 200,
			props: {
				classrooms: []
			}
		};
	}
</script>