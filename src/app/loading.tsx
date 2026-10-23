const CardSkeleton = () => (
    <div className="animate-pulse rounded-2xl border border-gray-200/70 bg-white/70 p-4">
        <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gray-200" />
            <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-3 w-16 rounded bg-gray-200" />
            </div>
        </div>
        <div className="mt-4 h-3 w-14 rounded bg-gray-200" />
        <div className="mt-2 flex items-end justify-between">
            <div className="h-6 w-20 rounded bg-gray-200" />
            <div className="h-6 w-14 rounded-full bg-gray-200" />
        </div>
    </div>
);

const SectionSkeleton = ({ count }: { count: number }) => (
    <section className="my-8">
        <div className="mb-4 h-6 w-40 animate-pulse rounded bg-gray-200" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }).map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    </section>
);

const Loading = () => {
    return (
        <div aria-busy="true" aria-label="লোড হচ্ছে">
            <div className="my-6 animate-pulse rounded-3xl border border-gray-200/70 bg-white/70 p-6 md:p-10">
                <div className="h-6 w-40 rounded-full bg-gray-200" />
                <div className="mt-4 h-9 w-3/4 max-w-md rounded bg-gray-200" />
                <div className="mt-4 h-4 w-full max-w-xl rounded bg-gray-200" />
                <div className="mt-2 h-4 w-2/3 max-w-lg rounded bg-gray-200" />
                <div className="mt-6 h-10 w-32 rounded-lg bg-gray-200" />
            </div>

            <SectionSkeleton count={6} />
            <SectionSkeleton count={6} />
        </div>
    );
};

export default Loading;