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

const Loading = () => {
    return (
        <div aria-busy="true" aria-label="লোড হচ্ছে">
  
            <div className="my-6 flex animate-pulse items-center gap-4 rounded-2xl border border-gray-200/70 bg-white/70 p-4 md:p-6">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />
                <div className="space-y-2">
                    <div className="h-6 w-24 rounded bg-gray-200" />
                    <div className="h-3 w-44 rounded bg-gray-200" />
                </div>
            </div>

     
            <div className="my-4 flex animate-pulse items-center justify-end gap-3 rounded-2xl border border-gray-200/70 bg-white/70 p-4">
                <div className="h-4 w-12 rounded bg-gray-200" />
                <div className="h-10 w-36 rounded-lg bg-gray-200" />
            </div>
      
            <div className="mb-3 h-3 w-40 animate-pulse rounded bg-gray-200" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 4 }).map((_, i) => (
                    <CardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};

export default Loading;