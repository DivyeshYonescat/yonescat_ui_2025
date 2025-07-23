export default function UiOverlay() {
  return (
    <div className="absolute left-10 top-1/3 z-10 text-white max-w-md">
      <h1 className="text-5xl font-bold leading-tight mb-4">
        AICM <span className="text-purple-200">Studio</span>
      </h1>
      <p className="mb-6 text-lg opacity-80">
        Cutting-edge creative solutions for the AI-driven world.
      </p>
      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md">
        Get Started
      </button>
    </div>
  );
}
