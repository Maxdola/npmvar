export interface PackageJson {
    name: string;
    version: string;
    description: string;
    main: string;
    files: string[];
    bin: Bin;
    scripts: Scripts;
    author: string;
    license: string;
    devDependencies: DevDependencies;
    dependencies: Dependencies;
}
export interface Bin {
    [key: string]: string;
}
export interface Dependencies {
    "@types/figlet": string;
    chalk: string;
    figlet: string;
    terser: string;
}
export interface DevDependencies {
    [key: string]: string;
}
export interface Scripts {
    [key: string]: string;
}
