import { readFileSync } from "node:fs";

const includeStrRegex = /include_str!\("(.+?)"\)/g;

const ViteMacros = function macros({ extensions = ['.js', '.ts', '.jsx', '.tsx', '.vue'] }) {
    return {
        name: "macros",

        enforce: "pre",

        transform(code: string, id: string) {
            if (extensions.every(ext => !id.endsWith(ext))) {
                return;
            }

            let match;

            do {
                match = includeStrRegex.exec(code);

                if (match) {
                    try {
                        const filePath = match[1];
                        const data = readFileSync(filePath, "utf8");
                        code = code.replace(match[0], "`" + data + "`");
                    } catch {
                        throw new Error(`Failed to read file ${match[1]}`);
                    }
                }
            } while (match);

            return code;
        },
    };
};

export default ViteMacros;
