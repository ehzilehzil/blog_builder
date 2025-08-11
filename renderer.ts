import {createGenerator, transformerDirectives, presetIcons, presetUno} from "unocss";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export async function unocss(src: string): Promise<string> {
    const uno = await createGenerator({
        presets: [presetIcons(), presetUno()],
        transformers: [transformerDirectives()],
        preflights: [{
            getCSS: async ({theme}) => await Deno.readTextFile("./_assets/reset-css.css"),
        }],
    });
    return (await uno.generate(src)).css;
}

export const markdownit = new MarkdownIt({
    Highlight: (code, lang) => {
        lang = hljs.getLanguage(lang) ? lang : "plaintext";
    },
});