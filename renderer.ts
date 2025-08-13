import {createGenerator, transformerDirectives, presetIcons, presetUno} from "unocss";
// import extractorPug from "@unocss/extractor-pug";
import pug from "pug";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import matter from "gray-matter";

async function unocss(src: string): Promise<string> {
    const uno = await createGenerator({
        presets: [presetIcons(), presetUno()],
        transformers: [transformerDirectives()],
        preflights: [{
            getCSS: async ({theme}) => await Deno.readTextFile("./_assets/reset-css.css"),
        }],
        // extractors: [
        //     extractorPug(),
        // ],
    });
    return (await uno.generate(src)).css;
}

const md = new MarkdownIt({
    highlight: (code, lang) => {
        const language = hljs.getLanguage(lang)?.name ?? "plaintext";
        
        try {
            const res = `<pre class="hljs language-${lang}"><code>` +
                        hljs.highlight(code, {language}).value +
                        `</code></pre>`;
            return res;
        } catch(_e) {}
        
        return "";
    },
});

export const renderer = {
    markdown(str: string) {return md.render(str);},
    matter(str: string) {return matter(str);},
    async unocss(str: string) {return await unocss(str);},
    pug(str: string, obj: pug.LocalsObject) {return pug.render(str, obj);},
};