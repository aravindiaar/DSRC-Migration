import { build as viteBuild } from "vite";
import { rm, writeFile } from "fs/promises";

const WEB_CONFIG = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA fallback" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
    </staticContent>
  </system.webServer>
</configuration>`;

async function buildStatic() {
  process.env.VITE_STATIC_BUILD = "true";

  console.log("Cleaning dist/public...");
  await rm("dist/public", { recursive: true, force: true });

  console.log("Building static client (JSON baked in, no API calls)...");
  await viteBuild();

  console.log("Writing IIS web.config...");
  await writeFile("dist/public/web.config", WEB_CONFIG, "utf-8");

  console.log("\n✓ Static build complete → dist/public/");
  console.log("  - All JSON content is baked into the JS bundle (no API calls at runtime)");
  console.log("  - web.config included for IIS SPA routing");
  console.log("  Deploy the contents of dist/public/ to your static host.\n");
}

buildStatic().catch((err) => {
  console.error(err);
  process.exit(1);
});
