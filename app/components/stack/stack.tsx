export default function Stack() {
  return (
    <div className="flex min-h-screen snap-start grow items-center">
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col md:flex md:flex-row">
        <div className="md:w-1/3 h-100">Frontend</div>
        <div className="md:w-1/3 h-100">Backend</div>
        <div className="md:w-1/3 h-100">DevOps</div>
      </div>
    </div>
  );
}
