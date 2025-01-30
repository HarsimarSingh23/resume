import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink, BookAIcon, FileCheckIcon, Bold } from 'lucide-react';

function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Create mathematical symbols as stars
    const createStars = () => {
      const container = document.querySelector('.space-bg');
      const mathSymbols = ['∑', '∫', '∏', '√', '∞', 'π', '±', '×', '÷', '∂', '∇', 'θ', 'λ', 'μ', 'σ', 'Ω'];
      
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('span');
        star.className = 'math-star';
        star.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.fontSize = `${Math.random() * 20 + 10}px`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        container?.appendChild(star);
      }
    };

    createStars();
    return () => observer.disconnect();
  }, []);

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-bg min-h-screen text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Harsimar Singh
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
          AI ML Engineer | Data Engineer | Data Analyst | Blogger 
        </h2>
        
        <div className="flex gap-6 mb-12">
          <a href="https://github.com/HarsimarSingh23" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sainiharsimar/" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sainiharsimar@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:+917696069592" className="hover:text-blue-400 transition-colors">
            <Phone size={24} />
          </a>
          <a href="https://sainiharsimar.medium.com/" className="hover:text-blue-400 transition-colors">
            <BookAIcon size={24} />
          </a>
          <a href="https://drive.google.com/file/d/1XEdhQD-GAescdzXuHrw9aWhM5x2rhsb8/view?usp=sharing" className="hover:text-blue-400 transition-colors">
            <FileCheckIcon size={24} />
          </a>
        </div>

        <button 
          onClick={scrollToExperience}
          className="absolute bottom-10 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Experience Section */}
      <div ref={experienceRef} className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 reveal">Experience</h2>
        
        <div className="space-y-0">
          <div className="reveal relative">
            <div className="experience-line"></div>
            <div className="experience-dot"></div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors ml-6">
              <h3 className="text-xl font-semibold mb-2">Head AI</h3>
              <p className="text-gray-400 mb-4">Vusic Technologies (VAAR Labs)• April 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Experimentation and fine tuning models - ChatGPT, LLAMA, RAG, Langchain</li>
                <li>Scrapper pipelines and data modelling for data ingestion, data transformations etc</li>
                <li>Created open source hugging face cache cleanup UI utility - <a href='https://github.com/HarsimarSingh23/hf_cleaner' >hf_cleaner</a>  </li>
              </ul>
            </div>
          </div>

          <div className="reveal relative">
            <div className="experience-line"></div>
            <div className="experience-dot"></div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors ml-6">
              <h3 className="text-xl font-semibold mb-2">Senior Data Analyst | Data Engineer</h3>
              <p className="text-gray-400 mb-4">Rapido • Feb 2022  - March 2024 </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Managed 90% of the ETL pipeline workflow ingesting terabytes of data.</li>
                <li>Created Automated workflows for driving up productivity</li>
                <li>Cross team contribution along with pod’s critical products, data sanity, data efficiency and data integrity by
                developing monitoring frameworks and alerts. </li>
              </ul>
            </div>
          </div>

          <div className="reveal relative">
            <div className="experience-line"></div>
            <div className="experience-dot"></div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors ml-6">
              <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
              <p className="text-gray-400 mb-4"> ZoloStays • Sept 2020 - Feb 2022</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Designed and implemented automated reporting at org wide level</li>
                <li>Setup dashboards and internal reporting used by CTOs and CFOs for visibility of organizational
                workflow.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-20 reveal text-center">Tools & Technologies</h2>
        
        <div className="legend">
        <ul className="legend-list">
          <li><span className="legend-color" style={{ backgroundColor: '#00758F' }}></span> MySQL</li>
          <li><span className="legend-color" style={{ backgroundColor: '#EE4C2C' }}></span> PyTorch</li>
          <li><span className="legend-color" style={{ backgroundColor: '#47A248' }}></span> MongoDB</li>
          <li><span className="legend-color" style={{ backgroundColor: '#E25A1C' }}></span> Apache Spark</li>
          <li><span className="legend-color" style={{ backgroundColor: '#E25A1C' }}></span> Apache Airflow</li>
          <li><span className="legend-color" style={{ backgroundColor: '#336791' }}></span> Postgres</li>
          <li><span className="legend-color" style={{ backgroundColor: '#4285F4' }}></span> Google Cloud Platform</li>
          <li><span className="legend-color" style={{ backgroundColor: '#326CE5' }}></span> Kubernetes</li>
          <li><span className="legend-color" style={{ backgroundColor: '#FF9900' }}></span> AWS</li>
          <li><span className="legend-color" style={{ backgroundColor: '#FFD21E' }}></span> Hugging Face</li>
        </ul>
      </div>
      

        <div className="solar-system reveal">
          <div className="sun">
            <img 
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
              alt="Python"
              className="w-20 h-20"
            />
          </div>

          <div className="orbit orbit-1">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" 
                alt="MYSQL"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-2">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" 
                alt="PyTorch"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-3">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" 
                alt="MongoDB"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="orbit orbit-4">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg" 
                alt="Apache Spark"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="orbit orbit-5">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg" 
                alt="Apache Airflow"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-6">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" 
                alt="Postgres"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-7">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" 
                alt="GCP"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-8">
            <div className="planet">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" 
                alt="Kubernetes"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-9">
            <div className="planet">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg" 
                alt="AWS"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="orbit orbit-10">
            <div className="planet">
              <img 
                src="https://huggingface.co/front/assets/huggingface_logo.svg" 
                alt="Hugging Face"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;