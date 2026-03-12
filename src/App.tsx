import { useEffect } from 'react';
import {
  Header,
  Sidebar,
  MetricsRow,
  FlowSection,
  StdioSection,
  ArchitectureSection,
  ConfigSection,
  ProtocolSection,
  ErrorsSection,
  ComparisonSection,
  ProjectSetupSection,
  AdvancedToolsSection,
  ResourcesSection,
  PromptsSection,
  RealWorldExamplesSection,
  BestPracticesSection,
  AdvancedPatternsSection,
  SDKSection,
  Footer,
} from './components';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle nav clicks - make target section visible immediately
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href) {
          const section = document.querySelector(href);
          if (section) {
            // Small delay to let scroll start, then make visible
            setTimeout(() => {
              section.classList.add('visible');
            }, 100);
          }
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <MetricsRow />

          <section id="flujo">
            <FlowSection />
          </section>
          <hr className="divider" />

          <section id="stdio">
            <StdioSection />
          </section>
          <hr className="divider" />

          <section id="anatomia">
            <ArchitectureSection />
          </section>
          <hr className="divider" />

          <section id="config">
            <ConfigSection />
          </section>
          <hr className="divider" />

          <section id="protocolo">
            <ProtocolSection />
          </section>
          <hr className="divider" />

          <section id="errores">
            <ErrorsSection />
          </section>
          <hr className="divider" />

          <section id="comparativa">
            <ComparisonSection />
          </section>
          <hr className="divider" />

          <section id="setup">
            <ProjectSetupSection />
          </section>
          <hr className="divider" />

          <section id="tools-avanzadas">
            <AdvancedToolsSection />
          </section>
          <hr className="divider" />

          <section id="resources">
            <ResourcesSection />
          </section>
          <hr className="divider" />

          <section id="prompts">
            <PromptsSection />
          </section>
          <hr className="divider" />

          <section id="ejemplos">
            <RealWorldExamplesSection />
          </section>
          <hr className="divider" />

          <section id="practicas">
            <BestPracticesSection />
          </section>
          <hr className="divider" />

          <section id="patrones">
            <AdvancedPatternsSection />
          </section>
          <hr className="divider" />

          <section id="sdk">
            <SDKSection />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
