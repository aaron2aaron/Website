import { createApp, serveStatic } from "https://deno.land/x/servest@v1.3.1/mod.ts";
export default function startServer(directoryPath: string) {
    const app = createApp();
    app.use(serveStatic(directoryPath));
    app.listen({ port: 8080 });
    console.log(`🌳 /server running at http://localhost:8080/HomePage.html 🌳`)
}