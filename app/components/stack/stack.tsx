export default function Stack() {
  return (
    <div className="flex min-h-screen snap-start grow items-center">
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col md:grid md:grid-cols-2 justify-between">
        <div className="flex flex-col md:w-1/2">
          <div className="text-4xl font-bold mb-5">My Stack</div>
        </div>
        <div className="md:w-1/2">Backend</div>
        <div className="md:w-1/2">Devops</div>
        <div className="md:w-1/2">Other</div>
      </div>
    </div>
  );
}
