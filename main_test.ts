import {renderer} from "./renderer.ts";

{
    const md = "# 안녕\n```js\nconsole.log('안녕');\n```";
    const res = renderer.markdown(md);
    console.log(res);
}

{
    const css = "div(class='bg-blue-500')\n  p(class='text-xl') 안녕";
    const res = await renderer.unocss(css);
    console.log(res);

    const res2 = renderer.pug(css, {});
    console.log(res2);
}

{
    const md = "---\nlayout: 'page'\n---\n# 안녕";
    const res = renderer.matter(md);
    console.log(res.data, renderer.markdown(res.content));
}