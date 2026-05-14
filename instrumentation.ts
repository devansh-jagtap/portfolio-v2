export async function register() {
  const { init } = await import("keydrop")
  await init()
}