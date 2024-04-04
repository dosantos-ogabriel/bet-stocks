export function $api<T>(
  request: Parameters<typeof $fetch<T>>[0],
  opts?: Parameters<typeof $fetch<T>>[1],
) {
  return $fetch<T>(request, {
    ...opts,
    onResponseError({ response }) {
      if (response.status == 401) {
        const { logout } = useAuthStore();
        logout();
      }
    },
  });
}
