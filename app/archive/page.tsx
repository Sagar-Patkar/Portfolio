"use client"
import Link from "next/link"
import { GoArrowLeft } from "react-icons/go";
import { projectDataArray } from "../../utility/projectData"
const Archive = () => {
    return (
        <div className="lg:py-0">
            <Link className="group mb-8 inline-flex items-center font-semibold leading-tight text-teal-300 " href="/">
                <div className="flex flex-row gap-2">
                    <span className="pt-1"><GoArrowLeft /></span>
                    <span>Back</span>
                </div>
            </Link>
            <ul className="group/list">
                {projectDataArray.length !== 0 && projectDataArray.map((data, index) => {
                    return (
                        <li className="mb-12" key={index}>
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" target="_blank" href={data?.url} aria-label={data?.name} rel="noopener noreferrer">
                                            <span>{data?.name}</span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        {data?.desc}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {data?.language.map((item, index) => {
                                            return (
                                                <li className="mr-1.5 mt-2" key={index}>
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                                        {item}
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Archive