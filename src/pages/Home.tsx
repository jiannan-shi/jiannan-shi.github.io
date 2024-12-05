import React, { useState } from "react";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import CategoryFilter from "../components/CategoryFilter";
import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";
import { Category } from "../types";

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24">
          {/* Left Column - Personal Info */}
          <div className="space-y-12 fade-in">
            <div className="space-y-8">
              <img
                src="https://jnanshi.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3e52b6a1-5185-4ed2-a004-8d3251325e0d%2F68f704ca-c0a0-4ddf-a543-2d64883ed385%2Fportrait.jpg?table=block&id=153857d3-0234-8074-b2a9-dbd94c86e15f&spaceId=3e52b6a1-5185-4ed2-a004-8d3251325e0d&width=1390&userId=&cache=v2"
                width="250"
                height="auto"
              ></img>
              <p style={{ color: "grey", fontStyle: "italic" }}>
                Alt text: A person with short black hair and glasses gazes
                calmly at the camera, dressed in a beige jacket and blue shirt.
                A verdant hillside and blurred rural scenery unfold softly in
                the background.
              </p>
              <br></br>
              <h1 className="heading-xl">Hi, 你好,</h1>
              <div className="text-body max-w-xl">
                <br></br>
                <p style={{ fontWeight: "bold" }}>
                  I am a sociologist, journalist, and social designer.
                </p>
                <br></br>
                <p>
                  I bring a unique interdisciplinary approach to exploring
                  digital technology and citizen resilience. My work combines
                  ethnographic research, participatory design, and multimedia
                  storytelling to illuminate marginalized voices and foster
                  cross-cultural dialogue.
                </p>
                <br></br>
                <p>
                  My projects have been recognized in academic journals,
                  cultural exhibitions, and international media, but what
                  matters most to me are the people I have spoken to and their
                  insights, which continue to inspire me with the wisdom of
                  resilience in this fragmented world.
                </p>
                <br></br>
                <p style={{ fontWeight: "bold" }}>M.Phil. in Sociology,</p>
                <p>University of Cambridge, UK</p>
                <br></br>
                <p style={{ fontWeight: "bold" }}>
                  B.A. (Hon) in Social Science,
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Minors in Interactive Media, Journalism,
                </p>
                <p>New York Univ. Shanghai, China & NYU Global Network, </p>
                <p>New York, US, and Prague, Czech Republic</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-500">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:jiannan.work@gmail.com" className="link-hover">
                  jiannan.work 'at' gmail 'dot' com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/in/jiannanshi/"
                className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                LinkedIn
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://calendar.app.google/c4XV4QLaHe2zNTcy7"
                className="link-hover"
              >
                Book a meeting with Jiannan
              </a>
            </div>
          </div>

          {/* Right Column - Project Highlights */}
          <div className="space-y-12 fade-in">
            <div className="flex flex-col space-y-8">
              <h2 className="heading-lg">Featured Work</h2>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
            <ProjectGrid projects={filteredProjects} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
