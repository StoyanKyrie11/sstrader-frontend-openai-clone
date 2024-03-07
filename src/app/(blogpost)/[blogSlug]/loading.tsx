function Loading() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-center bg-black">
      <div
        aria-label="Loading..."
        role="status"
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="flex items-center justify-center h-auto">
          <div className="relative">
            <div className="w-24 h-24 border-t-8 border-b-8 border-orange-400 rounded-full"></div>
            <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-b-8 rounded-full border-gray-200 animate-spin"></div>
          </div>
        </div>
        <span className="text-3xl font-semibold text-white mt-2 flex flex-row items-end">
          <div>Loading</div>
          <div className="w-3 h-3 border-t-2 border-b-2 rounded-full bg-orange-400 border-white animate-bounce1 mb-[1.5px]"></div>
          <div className="w-3 h-3 border-t-2 border-b-2 rounded-full bg-orange-400 border-white animate-bounce2 mb-[1.5px]"></div>
          <div className="w-3 h-3 border-t-2 border-b-2 rounded-full bg-orange-400 border-white animate-bounce3 mb-[1.5px]"></div>
        </span>
      </div>
    </div>
  );
}

export default Loading;
