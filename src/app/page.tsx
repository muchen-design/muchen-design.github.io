import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      {/* Introduction Section */}
      <section className="mb-20">
        <h1 className="text-h1 font-heavy mb-8">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-body">
          Welcome to my portfolio. I'm a [your profession/focus] passionate about creating [what you create/do].
        </p>
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
