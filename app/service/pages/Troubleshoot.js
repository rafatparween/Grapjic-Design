import Image from "next/image";

export default function Troubleshoot() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full">
        {/* Left: Devices */}
        <div className="flex justify-center items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/dignose.avif"
            alt="Printer"
            width={539}
            height={347}
            className="object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-light mb-6 text-black">
            Diagnose and solve
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            In this troubleshooting hub, you’ll find the top automated and self-service solutions for common computer and printer problems. Click the tabs to switch between computer and printer topics, then select an issue to view solutions.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 mt-16 text-lg font-medium">
        <button className="flex items-center gap-2 text-gray-700 hover:text-black">
          <span className="text-2xl">🖥</span> Computer Issues
        </button>
        <button className="flex items-center gap-2 text-blue-700 font-bold border-b-4 border-blue-700 pb-1">
          <span className="text-2xl">🖨</span> Printer Issues
        </button>
      </div>
    </div>
  );
}