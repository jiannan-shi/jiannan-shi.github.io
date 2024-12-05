import React, { useEffect } from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import RoleCard from '../components/RoleCard';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { timelineEntries } from '../data/timeline';

const Home: React.FC = () => {

  const roles = [
    {
      title: "Journalism",
      description: "Using OSINT and community-engaged solutions journalism to tell stories that cross boundaries of all kinds - especially whether they are LGBTQ+ or technological.",
      path: "/journalism",
      imageUrl: "https://img.notionusercontent.com/s3/prod-files-secure%2F3e52b6a1-5185-4ed2-a004-8d3251325e0d%2F55d97d93-a2d0-4bb6-9092-89ec57886ef6%2FIMG_9510.heic/size/w=800?exp=1732476234&sig=qv7k1SS5NXnSxlJEYF2WYR93Yzek83jxQ2CNJRwti1E"
    },
    {
      title: "Research",
      description: "Researching on digital technology and citizen resilience, particularly in the context of global China.",
      path: "/research",
      imageUrl: "https://img.notionusercontent.com/s3/prod-files-secure%2F3e52b6a1-5185-4ed2-a004-8d3251325e0d%2F6cddf278-07e9-433a-a5ba-550b06fe27e3%2F0f4b736c-2580-420b-8bef-9d84bd9da4d9.png/size/w=800?exp=1732476344&sig=dg34h406TkBuzBxQTdf_9VvBjkyOj7frhCC5ZGBygZ0"
    },
    {
      title: "Social Design",
      description: "Creating community-driven local design solutions to local problems, through participatory processes.",
      path: "/social-design",
      imageUrl: "https://img.notionusercontent.com/s3/prod-files-secure%2F3e52b6a1-5185-4ed2-a004-8d3251325e0d%2Febe5c12d-fdad-4390-be0f-836c9668d5b6%2Fc9426b8e-75a7-433e-bb1a-397f697ed0ef.png/size/w=800?exp=1732476380&sig=To_iJ9f3wGZ-0BYw3DNAR2CkB5SU4QngjHidO8BMG9Q"
    }
  ];

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32">
            <div className="grid md:grid-cols-[1fr,1fr] gap-12 md:gap-24 items-center">
              {/* Profile Image */}
              <div className="relative aspect-square max-w-lg mx-auto md:mx-0">
                <img
                  src="https://img.notionusercontent.com/s3/prod-files-secure%2F3e52b6a1-5185-4ed2-a004-8d3251325e0d%2F298438f4-2bb5-4898-8a13-ab9276e35655%2FParis0329-107.jpg/size/w=800?exp=1732476539&sig=8-niG7TcpHy7g_gwP-qoeIVGTBUBg-ZFkVWLPuyhbNg"
                  alt="Jiannan Shi"
                  className="w-full h-full object-cover shadow-[0_2px_24px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* Introduction */}
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="heading-xl">Jiannan Shi</h1>
                  <br></br>
                  <p className="text-body max-w-xl">
                  I research and produce content about how humanity transcends boundaries, be they political, cultural, technological, intersectional, or otherwise.
                  </p>
<p>
In the past, I've led award-winning projects in digital literacy education for teenagers, socially engaged art events in museums and galleries, and co-authored several how-to guides on community building and placemaking.
</p>
<p>
Based in London, UK, en route from a small town on the lower bank of the Yellow River to global education in Shanghai, Prague, New York City, and Cambridge. Holding on to cosmopolitanism.
                  </p>
                </div>

                <div className="space-y-4 text-gray-900">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <MapPin className="w-5 h-5" />
                    <span>London, UK</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/jiannanshi/"
                    target="_blank"
                    className="group inline-flex items-center gap-2 text-gray-900 hover:text-black"
                  >
                    <span className="font-medium">CV/Resume</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="mailto:chiennan.shih@gmail.com"
                    className="font-medium text-gray-900 hover:text-black link-hover"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same */}
        <section className="py-24 bg-gradient-to-b from-[#f8f8f8] to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="space-y-16">
              <div className="max-w-2xl">
                <h2 className="heading-lg mb-4">My Work</h2>
                <p className="text-body">
                  My work revolves around citizen's wisdom of mediating, or working around various powers in the local realities of their lived experiences.
                </p>
<br></br>
                <p className="text-body">
                In particular, I am interested in how digital technologies affect society and how people - especially the underprivileged - use and appropriate them.
                </p>

              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {roles.map((role, index) => (
                  <RoleCard key={index} {...role} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="space-y-16">
              <div className="max-w-2xl">
                <h2 className="heading-lg mb-4">What's New</h2>
                <p className="text-body">
                  Recent updates and ongoing projects across my areas of work.
                </p>
              </div>

              <Timeline entries={timelineEntries} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
