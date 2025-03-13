import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hello, I am Muchen
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A product designer with over a decade of experience, I have led multiple projects across various product areas.
          </p>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/about/profile.jpg"
              alt="Muchen"
              fill
              className="rounded-2xl object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-h2 font-heavy mb-16">Projects</h2>
        
        {/* Project 1 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <img src="/project1-1.jpg" alt="Project 1" className="w-full h-64 object-cover rounded-lg" />
            <img src="/project1-2.jpg" alt="Project 1" className="w-full h-64 object-cover rounded-lg" />
            <img src="/project1-3.jpg" alt="Project 1" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <h3 className="text-h3 font-heavy mb-4">Project Title 1</h3>
          <p className="text-body">
            Description of your first project. Explain the key features, technologies used, and your role in the project.
          </p>
        </div>

        {/* Project 2 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <img src="/project2-1.jpg" alt="Project 2" className="w-full h-64 object-cover rounded-lg" />
            <img src="/project2-2.jpg" alt="Project 2" className="w-full h-64 object-cover rounded-lg" />
            <img src="/project2-3.jpg" alt="Project 2" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <h3 className="text-h3 font-heavy mb-4">Project Title 2</h3>
          <p className="text-body">
            Description of your second project. Highlight the challenges overcome and the impact of the project.
          </p>
        </div>

        {/* Project 3 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <img src="/project3-1.jpg" alt="Project 3" className="w-full h-64 object-cover rounded-lg" />
            <img src="/project3-2.jpg" alt="Project 3" className="w-full h-64 object-cover rounded-lg" />
            <img src="/project3-3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <h3 className="text-h3 font-heavy mb-4">Project Title 3</h3>
          <p className="text-body">
            Description of your third project. Discuss the unique aspects and what you learned from this experience.
          </p>
        </div>
      </section>
    </main>
  );
}
