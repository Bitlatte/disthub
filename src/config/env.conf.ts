export const port: number = typeof process.env.PORT == "string" ? parseInt(process.env.PORT) : 3000;
