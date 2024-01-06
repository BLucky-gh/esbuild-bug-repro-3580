import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ["main.ts"],
  bundle: true,
  splitting: true,
  outdir: 'dist',
  format: 'esm',
  platform: "node",
  target: 'node20',
  keepNames: true,
  banner: {
    js: [
      `import { createRequire as topLevelCreateRequire } from 'module';`,
      `const require = topLevelCreateRequire(import.meta.url);`,
      `import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"`,
      `const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))`,
    ].join("\n"),
  },
})