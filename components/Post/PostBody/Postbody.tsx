import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from 'rehype-highlight'
import axiosClient from "@/lib/axiosServer";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostBodyProps {
    className?: string,
    body: string,
    title: string
}
const Postbody: React.FC<PostBodyProps> = async ({
    className,
    body,
    title
}) => {
    const data = body;
    const components = {
        h1: (props: any) => (
            <h1 className={"m-0 text-dark dark:text-white" + props.className}>{props.children}</h1>
        ),
        pre: (props: any) => {
            return <pre className={props.className ? props.className : ' ' + " bg-[#F6F8FA] dark:bg-[#16181D] overflow-x-auto border-2 rounded"}>{props.children}</pre>

        },
        code: (props: any) => {
            if (props.className != undefined) {
                return <code className={"text-base bg-[#F6F8FA] dark:bg-[#16181D]"}>{props.children}</code>
            } else {
                return <code className={"p-1 rounded-md bg-zinc-300 dark:bg-zinc-700"}>{props.children}</code>
            }
        },
        p: (props: any) => (
            <p className="m-0">{props.children}</p>
        )
    }

    const options = {
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeHighlight, rehypeKatex, rehypePrettyCode],
        }
    }

    // components: {
    //     h1: (props:any) => {
    //         (<h1 className={"m-0 text-dark dark:text-white" + props.className}>{props.children}</h1>)
    //     },
    //     pre: (props) => {
    //          (
    //             <pre className={props.className ? props.className : '' + " bg-[#F6F8FA] dark:bg-[#16181D] overflow-x-auto border-2 rounded"}>{props.children}</pre>
    //         )
    //     },
    //     code: (props) => {
    //         if (props.className != undefined) {
    //             return (
    //                 <code className={"text-base bg-[#F6F8FA] dark:bg-[#16181D]"}>{props.children}</code>
    //             )
    //         } else {
    //             return (
    //                 <code className="p-1 rounded-md bg-zinc-300 dark:bg-zinc-700">{props.children}</code>
    //             )
    //         }
    //     },
    //     p:(props:any) => {
    //         return (
    //             <p className="m-0">{props.children}</p>
    //         )
    //     }

    return (
        <div className={className + "prose prose-base dark:prose-invert"}>
            <h1>{title}</h1>
            <MDXRemote source={data} components={components} options={options} />
        </div >
    )
}

export default Postbody