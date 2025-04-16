const Project = () => {
    return (
        <section className="relative landscape:min-h-(--section) portrait:min-h-svh px-4 md:px-14 flex  portrait:flex-col-reverse">
            <article className="flex-3/4 "></article>
            <div className="not-portrait:flex-1/4 text-header  flex flex-row-reverse overflow-hidden items-stretch">
                <div className=" relative flex-2/3 bg-yellow-400 flex">
                    <div className="absolute top-0 left-0 transform rotate-90 origin-bottom-left -translate-y-[90%] translate-x-[10px]">
                        PRO
                    </div>
                    <div className="absolute top-0 left-0 transform rotate-90 origin-bottom-left -translate-y-[90%] -translate-x-1/3">
                        JECTS.
                    </div>
                </div>
                <div className="flex-1/3  shrink-0"></div>
            </div>
        </section>
    );
};

export default Project;
