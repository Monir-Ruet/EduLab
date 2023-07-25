"use client"
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from 'rehype-highlight'
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";


const Component = {
    h1: (props: any) => {
        return (<h1 className={"text-dark dark:text-white" + props.className}>{props.children}</h1>)
    },
    pre: (props: any) => {
        return (
            <pre className={props.className ? props.className : '' + " bg-white dark:bg-[#16181D] overflow-x-auto shadow-md"}>{props.children}</pre>
        )
    },
    code: (props: any) => {
        if (props.className != undefined) {
            return (
                <code className={"text-base bg-white dark:bg-[#16181D]"}>{props.children}</code>
            )
        } else {
            return (
                <code className="p-2 bg-red-800">{props.children}</code>
            )
        }
    },

}
function MDXCompile(data: string) {
    return new Promise((resolve, reject) => {
        try {
            const result = compileMDX<{ title: string, date: string, tags: string[] }>({
                source: data,
                options: {
                    parseFrontmatter: false,
                    mdxOptions: {
                        rehypePlugins: [
                            rehypeKatex,
                            rehypeHighlight,
                            rehypePrettyCode,
                        ],
                        remarkPlugins: [
                            remarkMath,
                            remarkGfm
                        ],
                        // format: 'mdx',
                    },
                },
                components: Component
            }).then((res) => res);
            return result;
        }
        catch {
            reject('Something went wrong');
        }
    })
}

export default MDXCompile;