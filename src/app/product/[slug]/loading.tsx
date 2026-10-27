const SummarySkeleton = () => (
    <div className="animate-pulse rounded-2xl border border-gray-200/70 bg-white/70 p-4">
        <div className="h-3 w-20 rounded bg-gray-200" />
        <div className="mt-3 h-7 w-24 rounded bg-gray-200" />
        <div className="mt-3 h-3 w-32 rounded bg-gray-200" />
    </div>
);

const RowSkeleton = () => (
    <div className="grid grid-cols-5 items-center gap-4 border-b border-gray-200/70 p-3 last:border-b-0">
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200" />
        <div className="ml-auto h-4 w-14 rounded bg-gray-200" />
        <div className="ml-auto h-4 w-14 rounded bg-gray-200" />
        <div className="ml-auto h-4 w-16 rounded bg-gray-200" />
    </div>
);

const Loading = () => {
    return (
        <div aria-busy="true" aria-label="লোড হচ্ছে">
  
            <div className="my-4 flex animate-pulse items-center gap-2">
                <div className="h-3 w-10 rounded bg-gray-200" />
                <div className="h-3 w-3 rounded bg-gray-200" />
                <div className="h-3 w-12 rounded bg-gray-200" />
                <div className="h-3 w-3 rounded bg-gray-200" />
                <div className="h-3 w-16 rounded bg-gray-200" />
            </div>


            <div className="my-6 flex animate-pulse items-center justify-between gap-4 rounded-3xl border border-gray-200/70 bg-white/70 p-4 md:p-6">
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 rounded-xl bg-gray-200" />
                    <div className="space-y-2">
                        <div className="h-7 w-36 rounded bg-gray-200" />
                        <div className="h-3 w-28 rounded bg-gray-200" />
                        <div className="h-3 w-52 rounded bg-gray-200" />
                    </div>
                </div>
                <div className="hidden h-24 w-32 rounded-xl bg-gray-200 sm:block" />
            </div>


            <section className="my-8">
                <div className="mb-4 h-6 w-40 animate-pulse rounded bg-gray-200" />
                <div className="grid gap-4 sm:grid-cols-3">
                    <SummarySkeleton />
                    <SummarySkeleton />
                    <SummarySkeleton />
                </div>
            </section>

   
            <section className="my-8">
                <div className="mb-4 h-6 w-48 animate-pulse rounded bg-gray-200" />
                <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70">
                    <div className="grid grid-cols-5 gap-4 border-b border-gray-200/70 p-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="h-3 w-16 rounded bg-gray-200" />
                        ))}
                    </div>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <RowSkeleton key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Loading;