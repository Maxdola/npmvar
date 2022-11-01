import * as path from "path";
import * as fs from "fs";
import chalk, {reset} from "chalk";
import figlet from "figlet";
import clear from "clear";
import { exec } from "child_process";

export interface PackageJson {
  name:            string;
  version:         string;
  description:     string;
  main:            string;
  files:           string[];
  bin:             Bin;
  scripts:         Scripts;
  author:          string;
  license:         string;
  devDependencies: DevDependencies;
  dependencies:    Dependencies;
}

export interface Bin {
  [key : string] :string;
}

export interface Dependencies {
  "@types/figlet": string;
  chalk:           string;
  figlet:          string;
  terser:          string;
}

export interface DevDependencies {
  [key : string]: string;
}

export interface Scripts {
  [key : string] :string;
}

const run = () => {
  clear();
  console.log(
      chalk.blue(
          figlet.textSync('nodevar', { horizontalLayout: 'full' })
      )
  );
  console.log(chalk.blue("run commands with package.json variables"));
  console.log();

  const packagePath = path.join(process.cwd(), "package.json");
//console.log(packagePath);

  if (fs.existsSync(packagePath)) {
    try {
      const pj = JSON.parse(fs.readFileSync(packagePath).toString("utf-8")) as PackageJson;
      console.log(chalk.blue(`project: '${chalk.cyanBright(pj.name)}'`));
      console.log(chalk.blue(`version: '${chalk.cyanBright(pj.version)}'`));
      console.log(chalk.blue(`author:  '${chalk.cyanBright(pj.author)}'`));

      console.log();

      const args = process.argv.slice(2);
      const cmd = args.join(" ");
      const parsedCmd = cmd
          .replace(/\{project\}/g, pj.name)
          .replace(/\{version\}/g, pj.version)
          .replace(/\{author\}/g, pj.author)
      ;
      console.log(`${chalk.blue("raw command:")}\t ${chalk.cyanBright(cmd)}`);
      console.log(`${chalk.blue("parsed command:")}\t ${chalk.cyanBright(parsedCmd)}`);
      console.log();

      if (parsedCmd.trim().length === 0) {
        console.log(chalk.red("no command provided."))
        return;
      }

      try {
        const startTime = new Date().getTime();
        const child = exec(parsedCmd);
        if (child.stdout) {
          child.stdout.pipe(process.stdout);
        }
        if (child.stderr) {
          child.stderr.pipe(process.stderr);
        }

        child.on('close', (code) => {
          console.log(`child process exited with code ${code} (${new Date().getTime() - startTime}ms)`);
        });
      } catch (e) {
        console.error(e);
      }

    } catch (e) {
      console.log(chalk.red(`invalid package.json`))
    }
  } else {
    console.log(chalk.red(`no package.json found in '${process.cwd()}'`))
  }

}

run()
