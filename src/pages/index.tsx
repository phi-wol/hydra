import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


import { FaArrowUp, FaFilePdf, FaVideo } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { LuTextSelect } from "react-icons/lu";

// Import videos from static directory
const night_results = "/videos/vis_results_hydra_r100_val_night.mp4";
const rain_results = "/videos/vis_results_hydra_r100_val_rain.mp4";

// Import teaser figure
import teaser_figure from "./figs/trafo_comp_v6.png";

// Import occupancy comparison figures
import occ_comp_1 from "./figs/occ_comp_1x400.jpg";
import occ_comp_2 from "./figs/occ_comp_2x400.jpg";
import occ_comp_3 from "./figs/occ_comp_3x400.jpg";

interface TitleProps {
    children: React.ReactNode;
}

interface VenueProps {
    website: string;
    children: React.ReactNode;
}

interface AbstractProps {
    children: React.ReactNode;
}

interface AuthorProps {
    website: string;
    firstAuthor?: boolean;
    affiliations?: string;
    lastAuthor?: boolean;
    children: React.ReactNode;
}

interface AffiliationProps {
    website: string;
    number?: string;
    children: React.ReactNode;
}

interface ActionLinkProps {
    url: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

interface ArticleProps {
    children: React.ReactNode;
}

interface MainProps {
    children: React.ReactNode;
}

interface FewShotResultProps {
    id: string;
    demos: string;
    demos_label: string;
    video: string;
    hidden?: boolean;
    children: React.ReactNode;
}

interface CarouselItemProps {
    video: string;
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC<VenueProps> = ({ website, children }) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC<AbstractProps> = ({ children }) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text-3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC<AuthorProps> = ({ children, website, firstAuthor, affiliations, lastAuthor }) => {
    return (
        <span className="text-center inline-block">
            <a href={website} target={"_blank"}
                className="font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                {children}
            </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
        </span>
    )
}

const Affiliation: React.FC<AffiliationProps> = ({ children, website, number }) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
                className="font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                {children}
            </a>
        </span>
    )
}

const ActionLink: React.FC<ActionLinkProps> = ({ children, url, icon }) => {
    return (
        <span className={"text-center inline-block my-3.5 sm:my-2 mx-2"}>
            <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"}
                className="text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl">
                <span className="align-middle inline-flex justify-center mr-0.25">{icon}&nbsp;</span>
                <span>{children}</span>
            </a>
        </span>
    )
}

const Article: React.FC<ArticleProps> = ({ children }) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}


const FewShotResult: React.FC<FewShotResultProps> = ({ children, id, demos, demos_label, video, hidden }) => {
    // Result for Few-Shot Manipulation with Demos on left, and video on right
    return (
        // add hidden if hide is true
        <div id={id}
            className={"grasp-result flex flex-row flex-wrap justify-items-center items-center mt-6" + (hidden ? " hidden" : "")}>
            <div className="sm:basis-1/3 align-middle items-center sm:pr-5 md:pr-10 pb-4 sm:pb-0">
                <p className="text-center font-medium text-2xl !mt-0 !mb-2">{children}</p>
                <img src={demos} alt={typeof children === 'string' ? children : 'Demo'} className="mx-auto !my-4 max-w-[80%] sm:max-w-[100%]" />
                <p className="text-center !mt-2 !mb-0">{demos_label}</p>
            </div>
            <div className="sm:basis-2/3">
                <video controls muted playsInline
                    className="rounded-lg w-full max-w-[720px]">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}


export const Head: HeadFC = () => <title>ICRA 2025: Unleashing HyDRa</title>

const carouselResponsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


const CarouselItem: React.FC<CarouselItemProps> = ({ children, video }) => {
    return (
        <div>
            <video autoPlay muted playsInline loop title={video}
                className="carousel-video px-1.5 rounded-xl">
                <source src={video} type="video/mp4" />
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    <Title>
                        <span className="font-extrabold">Unleashing </span>
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-600">HyDRa</span>
                        <span className="font-extrabold">:</span><br />
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Hy</span>
                        <span className="font-extrabold">brid Fusion, </span>
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">D</span>
                        <span className="font-extrabold">epth Consistency and </span>
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Ra</span>
                        <span className="font-extrabold">dar for Unified 3D Perception</span>
                    </Title>

                    <Venue website={"https://2025.ieee-icra.org/"}>
                        <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-emerald-400 hover:to-indigo-600
                        hover:transition-all">ICRA 2025</span>
                    </Venue>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={"https://scholar.google.com/citations?user=jt16iokAAAAJ&hl=en/"}>Philipp Wolters</Author>
                        <Author website={"https://scholar.google.com/citations?hl=en&user=8pdVZM0AAAAJ"}>Johannes Gilg</Author>
                        <Author website={"https://scholar.google.com/citations?hl=en&user=TWJuTroAAAAJ"}>Torben Teepe</Author>
                        <Author website={"https://arxiv.org/abs/2403.07746"}>Anouar Laouichi</Author>
                        <Author website={"https://scholar.google.com/citations?user=8UnqeIwAAAAJ&hl=en"}>Martin Hoffmann</Author>
                        <Author website={"https://scholar.google.com/citations?hl=en&user=OCVPHl0AAAAJ"} lastAuthor={true}>Gerhard Rigoll</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={"https://www.tum.de/"}>Technical University of Munich</Affiliation>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://arxiv.org/abs/2403.07746"} icon={<FaFilePdf />}>Paper</ActionLink>
                        <ActionLink url={"#video"} icon={<FaVideo />}>Video</ActionLink>
                        <ActionLink url={"https://github.com/phi-wol/hydra"} icon={<AiFillGithub />}>Code</ActionLink>
                    </p>

                    {/* <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://arxiv.org/abs/2411.19860"} icon={<FaFilePdf />}>Follow-up Project</ActionLink>
                    </p> */}

                    {/* Teaser Figure */}
                    <img
                        src={teaser_figure}
                        alt="Overview of HyDRa's hybrid fusion approach"
                        className="border-2 border-slate-100 rounded-xl mx-auto max-w-[75%] sm:max-w-[70%]"
                    />

                    <div className="flex justify-center">
                        <p className="text-center text-xl !mt-0 !mb-2 font-medium max-w-[100%] md:max-w-[75%]">
                            HyDRa addresses the critical bottlenecks in vision-centric 3D perception via a new hybrid fusion approach, achieving stronger and more robust depth predictions.
                            <br />
                            <br />
                        </p>
                    </div>
                </Article>

                {/* <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    <div
                        className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4">
                        <div className="relative pb-8 mb-3">
                            <Carousel responsive={carouselResponsive} infinite={true} showDots={true}
                                renderDotsOutside={true}
                                beforeChange={(previousSlide, { currentSlide }) => {
                                    // play all carousel-video, as the browser doesn't like autoplaying them all
                                    const videos = document.getElementsByClassName("carousel-video");
                                    for (let i = 0; i < videos.length; i++) {
                                        // play if video is paused
                                        if ((videos[i] as HTMLVideoElement).paused) {
                                            (videos[i] as HTMLVideoElement).play();
                                            console.log("Started playing video " + (videos[i] as HTMLVideoElement).src);
                                        }
                                    }
                                }}>
                                <CarouselItem video={clear_mug}>"Clear Mug"</CarouselItem>
                                <CarouselItem video={measuring_scoop}>"Measuring Scoop"</CarouselItem>
                                <CarouselItem video={teddy_bear}>"Teddy Bear"</CarouselItem>
                                <CarouselItem video={blue_mug}>"Blue Mug</CarouselItem>
                                <CarouselItem video={screwdriver}>"Screwdriver"</CarouselItem>
                                <CarouselItem video={water_jug}>"Water Jug</CarouselItem>
                                <CarouselItem video={measuring_beaker}>"Measuring Beaker"</CarouselItem>
                                <CarouselItem video={wooden_rack}>"Wooden Rack</CarouselItem>
                                <CarouselItem video={transparent_rack}>"Transparent Rack"</CarouselItem>
                            </Carousel>
                        </div>
                        <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                            We designate novel objects to grasp using <b>open-ended language queries</b>, and achieve
                            this using only ten demonstrations across four object categories.
                        </p>
                    </div>
                </div> */}

                <div className="w-full my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    <Article>
                        <Abstract>
                            Low-cost, vision-centric 3D perception systems for
                            autonomous driving have made significant progress in recent
                            years, narrowing the gap to expensive LiDAR-based methods.
                            The primary challenge in becoming a fully reliable alternative
                            lies in robust depth prediction capabilities, as camera-based
                            systems struggle with long detection ranges and adverse lighting
                            and weather conditions. In this work, we introduce HyDRa, a
                            novel camera-radar fusion architecture for diverse 3D percep-
                            tion tasks. Building upon the principles of dense Bird's-Eye-
                            View (BEV)-based architectures, HyDRa introduces a hybrid
                            fusion approach to combine the strengths of complementary
                            camera and radar features in two distinct representation spaces.
                            Our Height Association Transformer module leverages radar
                            features already in the perspective view to produce more
                            robust and accurate depth predictions. In the BEV, we refine
                            the initial sparse representation by a Radar-weighted Depth
                            Consistency. HyDRa achieves a new state-of-the-art for camera-
                            radar fusion of 64.2 NDS (+1.8) and 58.4 AMOTA (+1.5) on
                            the public nuScenes dataset. Moreover, our new semantically
                            rich and spatially accurate BEV features can be directly
                            converted into a powerful occupancy representation, beating
                            all previous camera-based methods on the Occ3D benchmark.
                        </Abstract>
                    </Article>
                </div>

                <Article>
                    {/* YouTube Video */}
                    <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/g4Y4LQ0nDrA"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen className="rounded-lg"></iframe>
                    </div>

                    {/* Results */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">3D Perception Results</h2>

                    <h3 id="language-guided" className="!mt-4">3D Object Detection</h3>
                    <p>We achieve state-of-the-art results on a variety of benchmarks and tasks.
                        The same architecture is usable for 3D object detection, multi-object tracking and semantic occupancy prediction, reconstructing the complete, surrounding scene.
                        This leads to the strongest nuScenes detection scores, best-in-class mAP values on View-of-Delft and we outperform all occupancy baselines in mIoU on Occ3D.</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <div className="w-full sm:w-1/2">
                            <p className="text-center font-medium mb-2">Night Time</p>
                            <video autoPlay controls muted playsInline loop
                                className="rounded-lg w-full">
                                <source src={night_results} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="text-center font-medium mb-2">Rainy Weather</p>
                            <video autoPlay controls muted playsInline loop
                                className="rounded-lg w-full">
                                <source src={rain_results} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <h3 className="!mt-4" id="few-shot">Occupancy Prediction in Adverse Conditions</h3>
                    <p>
                        We provide qualitative results to showcase the robustness and generalization capabilities of
                        HyDRa in challenging scenarios. We compare HyDRa with the baseline method FB-OCC in crowded urban scenarios,
                        challenging lighting conditions, and adverse weather conditions.
                    </p>
                    <div className="my-4 leading-8">
                        <span className="text-xl mr-1">Show qualitative results for: </span>
                        <select className="rounded-xl" onChange={(e) => {
                            // Get the target div
                            const selected = e.target.value;
                            const targetDiv = document.getElementById(selected);

                            // Hide all scenes
                            const scenes = ["scene1", "scene2", "scene3"];
                            scenes.forEach(scene => {
                                const div = document.getElementById(scene);
                                if (div && div !== targetDiv) {
                                    div.classList.add("hidden");
                                }
                            });

                            // Show selected scene
                            if (targetDiv) {
                                targetDiv.classList.remove("hidden");
                            }
                        }}>
                            <option value="scene1">Dark and Rainy Night Scene</option>
                            <option value="scene2">Longt Distance and Poor Lighting</option>
                            <option value="scene3">Dense Traffic with Occlusions</option>
                        </select>
                    </div>

                    {/* Occupancy Comparison Results */}
                    <div id="scene1" className="mt-6">
                        <img
                            src={occ_comp_1}
                            alt="Occupancy comparison in dark and rainy night scene"
                            className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[95%]"
                        />
                    </div>

                    <div id="scene2" className="mt-6 hidden">
                        <img
                            src={occ_comp_2}
                            alt="Occupancy comparison with long distance and poor lighting"
                            className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[95%]"
                        />
                    </div>

                    <div id="scene3" className="mt-6 hidden">
                        <img
                            src={occ_comp_3}
                            alt="Occupancy comparison in dense traffic with occlusions"
                            className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[95%]"
                        />
                    </div>

                    <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800">{
                                `@article{wolters2024unleashing,
  title={Unleashing hydra: Hybrid fusion, depth consistency and radar for unified 3d perception},
  author={Wolters, Philipp and Gilg, Johannes and Teepe, Torben and Herzog, Fabian and Laouichi, Anouar and Hofmann, Martin and Rigoll, Gerhard},
  journal={arXiv preprint arXiv:2403.07746},
  year={2024}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible"
                                onClick={() => {
                                    // Select all text in the code block
                                    let bib = document.getElementById("citation-bib");
                                    let range = document.createRange();
                                    let selection = window.getSelection();

                                    // Check not null
                                    if (bib == null || range == null || selection == null) {
                                        return;
                                    }
                                    range.selectNode(bib);
                                    selection.removeAllRanges();
                                    selection.addRange(range);
                                }}>
                                <LuTextSelect />
                            </button>
                        </div>
                    </div>
                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-blue-500" onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            <span
                                className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp />&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                    <div className="mt-2.5 text-center">
                        Website borrowed from&nbsp;
                        <a href="https://github.com/f3rm/f3rm.github.io" target="_blank" className="text-blue-500">
                            <span
                                className="align-text-top inline-flex justify-center mr-0.25"><AiFillGithub />&nbsp;</span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </footer>
            </Main >
        </>
    )
}

export default IndexPage
