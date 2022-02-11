const { resolve } = require("path");
const exec = require("util").promisify(require("child_process").exec);

async function calculateBuildSize(buildDirectory, bundleDirectory, samplePath) {
  const sample = resolve(__dirname, samplePath);
  const build = resolve(sample, buildDirectory);

  const mainBundleSize = Number(
    (
      await exec(
        `find ${resolve(build, bundleDirectory)} -name '*.js' -type f -printf "%s\t%p\n" | sort -nr | head -1 | cut -f1`
      )
    ).stdout.trim() / 1e6 // convert bytes to megabytes
  )
    .toFixed(2)
    .toString();

  const buildSize = Number((await exec(`du -sb ${build} | cut -f1`)).stdout.trim() / 1e6)
    .toFixed(2)
    .toString();

  const fileCount = (await exec(`find ${build} -type f | wc -l`)).stdout.trim();

  return { mainBundleSize, buildSize, fileCount };
}

if (require.main === module) {
  (async () => {
    const [buildDirectory, bundleDirectory, samplePath] = process.argv.splice(2);
    const { mainBundleSize, buildSize, fileCount } = await calculateBuildSize(
      buildDirectory,
      bundleDirectory || "./",
      samplePath || "./"
    );
    console.log(
      `Main bundle size (MB): ${mainBundleSize}\nOn-disk size (MB): ${buildSize}\nOn-disk files: ${fileCount}\n`
    );
  })();
}

module.exports = calculateBuildSize;
