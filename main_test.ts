import * as renderer from "./renderer.ts";

{
    const result = await renderer.UnoCSS(`<h1 class="w-full h-full">안녕</h1>`);
    console.log(result);
}