// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3776ab"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ffd5",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Create Neural Network Background
    createNeuralNetwork();

    // Initialize custom cursor
    initCustomCursor();

    // Initialize typewriter effect
    initTypewriterEffect();

    // Load projects dynamically
    loadProjects();

    // Initialize skill bars animation
    initSkillBars();

    // Initialize AI Assistant
    initAIAssistant();

    // Add scroll effects
    initScrollEffects();

    // Show loading screen
    initLoadingScreen();

    // Add code highlighting
    highlightCode();

    // Initialize 3D card effects
    init3DCardEffects();

    // Initialize scroll to top button
    initScrollToTop();
});

// Custom Cursor
function initCustomCursor() {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    document.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Add a smooth animation with requestAnimationFrame
        requestAnimationFrame(() => {
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Add slight delay to cursor outline for smooth effect
            setTimeout(() => {
                cursorOutline.style.left = `${posX}px`;
                cursorOutline.style.top = `${posY}px`;
            }, 50);
        });
    });

    // Add cursor hover effects for different elements
    const buttons = document.querySelectorAll('button, .btn, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover-grow');
        });
        button.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover-grow');
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover-project');
        });
        card.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover-project');
        });
    });

    const links = document.querySelectorAll('a:not(.btn):not(.nav-link):not(.project-link)');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover-link');
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover-link');
        });
    });
}

// Typewriter Effect
function initTypewriterEffect() {
    const typewriterText = document.getElementById('typewriter-text');
    const texts = ['python_developer()', 'ai_engineer()', 'machine_learning_engineer()', 'problem_solver()'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before starting new word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// Project Data
const projectsData = [
    {
        title: "Advanced Task Mangement- System",
        description: "Task management system with advanced features like Add Task,Add Task,Delete Task,Mark Task as Completed,Show Tasks,Search Tasks,Save Tasks,Load Tasks",
        image: "images/Task_management.jpg",
        tags: ["Python", "CLI", "OOP","SQL"],
        demoLink: "#demo-link-1",
        codeLink: "https://github.com/Nathishwar-prog/Advanced_Python_Projects/blob/main/Task-Manager.py"
    },
    {
        title: "Advanced Library Management - System",
        description: "Full-featured Library processing, inventory management, and advanced product recommendation engine.",
        image: "images/Library_management.png",
        tags: ["Python", "OOP", "AWS"],
        demoLink: "#demo-link-2",
        codeLink: "https://github.com/Nathishwar-prog/Python-projects/blob/main/Advanced_library_Mangement.py"
    },
    {
        title: "ATM - Process",
        description: "ATM Process with advanced features like Withdraw,Deposit,Check Balance,Change Pin,Transfer Money",
        image: "images/Atm_process.jpg",
        tags: ["Python", "OOP"],
        demoLink: "#demo-link-3",
        codeLink: "https://github.com/Nathishwar-prog/Python-projects/blob/main/ATM_process.py"
    },
    {
        title: "Number Guessing Game Programming",
        description: "Real-time object detection system using YOLOv5 and OpenCV, optimized for edge devices with 30+ FPS performance.",
        image: "images/Number_guessing.png",
        tags: ["PyTorch", "OpenCV", "YOLO"],
        demoLink: "#demo-link-4",
        codeLink: "https://github.com/Nathishwar-prog/Python-projects/blob/main/Number%20guessing%20game.py"
    },
    {
        title: " Scientific Calculator",
        description: "Interactive data visualization platform built with Flask and D3.js, featuring real-time updates and custom filtering options.",
        image: "images/calculator.jpg",
        tags: ["Flask", "D3.js", "SQL"],
        demoLink: "#demo-link-5",
        codeLink: "https://github.com/Nathishwar-prog/Python-projects/blob/main/Calculator_project.py"
    },
    {
        title: "Word Guessing Game Programming",
        description: "AI agent trained using reinforcement learning to master complex game environments, achieving superhuman performance.",
        image: "images/word_guessing.jpg",
        tags: ["PyTorch", "RL", "Gymnasium"],
        demoLink: "#demo-link-6",
        codeLink: "https://github.com/Nathishwar-prog/Python-projects/blob/main/word%20guessing%20game.py"
    }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link demo">Live Demo</a>
                    <a href="${project.codeLink}" class="project-link code">View Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute('data-level');
                const levelBar = entry.target.querySelector('.skill-level');
                
                levelBar.style.width = `${skillLevel}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// AI Assistant Modal
function initAIAssistant() {
    const aiButton = document.getElementById('aiButton');
    const aiModal = document.getElementById('aiModal');
    const closeModal = document.getElementById('closeModal');
    const aiInput = document.getElementById('aiInput');
    const aiSendButton = document.getElementById('aiSendButton');
    const aiConversation = document.getElementById('aiConversation');
    
    // AI Assistant Responses
    const aiResponses = {
        greeting: "Hello! I'm your Python project assistant. How can I help you with your Python development journey?",
        default: "I'm still learning about specific projects. Can you try asking something about Python development in general?",
        python: "Python is a versatile language perfect for data science, web development, automation, and AI. What specific area interests you?",
        skills: "Nathishwar specializes in machine learning, data analysis with pandas/numpy, web development with Django/Flask, and cloud deployment.",
        projects: "There are 6 featured projects showcasing expertise in machine learning, web development, trading algorithms, computer vision, data visualization, and reinforcement learning.",
        contact: "You can reach out through the contact form at the bottom of the page or connect via LinkedIn and GitHub links in the social section.",
        experience: "Nathishwar has 2 years of experience working on diverse Python projects across multiple domains, with particular expertise in AI and ML.",
        thanks: "Thank you for reaching out! I'm here to help you with your Python development journey.",
        mlprojects: "Some of my ML featured projects include Django E-Commerce Platform, and Computer Vision Object Detector.",
        dlprojects: "Some of my DL featured projects include Reinforcement Learning Game AI, and Automated Trading Algorithm.",
        pythonprojects: "Some of my Python featured projects include Advanced Task Mangement- System, and Django E-Commerce Platform.",
        webprojects:"Some of my web featured projects include Django E-Commerce Platform, and Data Analytics Dashboard.",
        aiprojects:"Some of my Ai projects include AI-Powered chatbot and AI- Virtual Assistant (Name is Ruby)",
        summary:"Nathish is an ambitious engineering student with a strong passion for AI, ML, and software development. Focused on mastering advanced technology, he has built a solid foundation in Python, data science, and problem-solving techniques. He is actively developing AI-powered tools, including an AI Project Assistant, and has successfully published a Python package for quick invoice generation"
    };
    
    // Predefined responses based on keywords
    function getAIResponse(input) {
        const lowerInput = input.toLowerCase();
        
        if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
            return aiResponses.greeting;
        } else if (lowerInput.includes("python") && (lowerInput.includes("what") || lowerInput.includes("about"))) {
            return aiResponses.python;
        } else if (lowerInput.includes("skill") || lowerInput.includes("expertise")) {
            return aiResponses.skills;
        } else if (lowerInput.includes(" all project") || lowerInput.includes("portfolio")) {
            return aiResponses.projects;
        } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email")) {
            return aiResponses.contact;
        } else if (lowerInput.includes("experience") || lowerInput.includes("background")) {
            return aiResponses.experience;
        } else if (lowerInput.includes("thankyou") || lowerInput.includes("bye")){
            return aiResponses.thanks;

        } else if (lowerInput.includes("ml") && (lowerInput.includes("projects")) || lowerInput.includes("machine learning projects") || lowerInput.includes("show machine learning projects")) {
            return aiResponses.mlprojects;

        } else if (lowerInput.includes("dl") && (lowerInput.includes("projects") )|| lowerInput.includes("show dl projects") || lowerInput.includes("show machine learning projects")) {
            return aiResponses.dlprojects;
        
        } else if (lowerInput.includes("python") && (lowerInput.includes("projects")) || lowerInput.includes("show ml projects") || lowerInput.includes("show machine learning projects")) {
            return aiResponses.pythonprojects;
        } else if (lowerInput.includes("web")  && (lowerInput.includes("projects")) || lowerInput.includes("show ml projects") || lowerInput.includes("show machine learning projects")) {
            return aiResponses.webprojects;
        } else if (lowerInput.includes("ai") && (lowerInput.includes("projects")) || lowerInput.includes("show ml projects") || lowerInput.includes("show machine learning projects")) {
            return aiResponses.aiprojects;
        
        } else if (lowerInput.includes("summary") || lowerInput.includes("about") || lowerInput.includes("overview")) {
            return aiResponses.summary;
        }else {
            return aiResponses.default;
        }
    }
    
    // Show AI Modal
    aiButton.addEventListener('click', () => {
        aiModal.style.display = 'block';
        
        // Add initial greeting if conversation is empty
        if (aiConversation.children.length === 0) {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.textContent = aiResponses.greeting;
            aiConversation.appendChild(botMessage);
        }
    });
    
    // Close AI Modal
    closeModal.addEventListener('click', () => {
        aiModal.style.display = 'none';
    });
    
    // Send Message
    function sendMessage() {
        const message = aiInput.value.trim();
        if (message === '') return;
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = message;
        aiConversation.appendChild(userMessage);
        
        // Clear input
        aiInput.value = '';
        
        // Scroll to bottom
        aiConversation.scrollTop = aiConversation.scrollHeight;
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot typing';
        typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        aiConversation.appendChild(typingIndicator);
        
        // Get AI response after a short delay
        setTimeout(() => {
            // Remove typing indicator
            aiConversation.removeChild(typingIndicator);
            
            // Add bot response
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.textContent = getAIResponse(message);
            aiConversation.appendChild(botMessage);
            
            // Scroll to bottom again
            aiConversation.scrollTop = aiConversation.scrollHeight;
        }, 1000);
    }
    
    // Send message on button click
    aiSendButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === aiModal) {
            aiModal.style.display = 'none';
        }
    });
}

// Neural Network Background
function createNeuralNetwork() {
    // This function will be implemented using Three.js
    // For now, we'll use the particles.js background as a placeholder
    console.log("Neural network visualization initialized");
}

// Scroll Effects
function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // Optional: remove the class when section is out of view
                // entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroContent && heroVisual) {
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroVisual.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
}
// Add these functions to your existing script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize About Section
    initializeTerminal();
    initializeSkillMeters();
    initializeStatCards();
    
    // Initialize Contact Form (existing code)
    initializeContactForm();
});

function initializeTerminal() {
    const commands = document.querySelectorAll('.command.typing');
    let delay = 0;
    
    commands.forEach((command, index) => {
        setTimeout(() => {
            typeCommand(command);
        }, delay);
        delay += 2000; // Delay between commands
    });
}

function typeCommand(element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            // Show output after command is typed
            const output = element.closest('.command-line').nextElementSibling;
            if (output && output.classList.contains('output')) {
                setTimeout(() => {
                    output.style.opacity = '0';
                    output.style.display = 'block';
                    output.style.transition = 'opacity 0.5s ease';
                    requestAnimationFrame(() => {
                        output.style.opacity = '1';
                    });
                    
                    // If this output contains skill meters, animate them
                    if (output.classList.contains('skills')) {
                        animateSkillMeters(output);
                    }
                }, 500);
            }
        }
    }
    
    type();
}

function initializeSkillMeters() {
    const skillMeters = document.querySelectorAll('.skill-meter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const meter = entry.target;
                const level = meter.dataset.level;
                const fill = meter.querySelector('.meter-fill');
                
                setTimeout(() => {
                    fill.style.width = `${level}%`;
                }, 200);
                
                observer.unobserve(meter);
            }
        });
    }, { threshold: 0.5 });
    
    skillMeters.forEach(meter => observer.observe(meter));
}

function initializeStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.classList.add('visible');
                
                // Animate the number
                const numberElement = card.querySelector('.stat-number');
                const targetNumber = parseInt(numberElement.dataset.count);
                animateNumber(numberElement, targetNumber);
                
                // Animate the progress bar
                const progressBar = card.querySelector('.progress-bar');
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 200);
                
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.2 });
    
    statCards.forEach(card => observer.observe(card));
}

function animateNumber(element, target) {
    let current = 0;
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60 FPS
    
    function update() {
        current += step;
        if (current < target) {
            element.textContent = Math.round(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    update();
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                submitBtn.style.background = '#50fa7b';
                
                this.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<span class="btn-text">send_message()</span><i class="fas fa-paper-plane"></i>';
                    submitBtn.style.background = '';
                }, 2000);
            }, 1500);
        });
    }
}// About Section Animation
function initAboutSection() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.2 });
    
    statCards.forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// Initialize about section animations
document.addEventListener('DOMContentLoaded', function() {
    initAboutSection();
});

// Loading Screen
function initLoadingScreen() {
    const body = document.body;
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="python-logo">
                <span class="python-blue">Py</span><span class="python-yellow">Dev</span>
            </div>
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
            </div>
            <div class="loading-text">Initializing Python Environment...</div>
        </div>
    `;
    
    body.appendChild(loadingScreen);
    
    // Simulate loading progress
    const loadingBar = loadingScreen.querySelector('.loading-bar');
    const loadingText = loadingScreen.querySelector('.loading-text');
    let progress = 0;
    
    const loadingTexts = [
        "Initializing Python Environment...",
        "Loading Dependencies...",
        "Importing Modules...",
        "Connecting to Neural Network...",
        "Launching Portfolio..."
    ];
    
    const loadingInterval = setInterval(() => {
        progress += 1;
        loadingBar.style.width = `${progress}%`;
        
        // Update loading text at certain intervals
        if (progress === 20) {
            loadingText.textContent = loadingTexts[1];
        } else if (progress === 40) {
            loadingText.textContent = loadingTexts[2];
        } else if (progress === 60) {
            loadingText.textContent = loadingTexts[3];
        } else if (progress === 80) {
            loadingText.textContent = loadingTexts[4];
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Fade out and remove loading screen
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                body.removeChild(loadingScreen);
            }, 500);
        }
    }, 30);
}

// Code Highlighting
function highlightCode() {
    const codeElements = document.querySelectorAll('pre code');
    
    codeElements.forEach(element => {
        // Add line numbers
        const code = element.innerHTML.trim();
        const lines = code.split('\n');
        const numberedLines = lines.map((line, index) => 
            `<span class="line-number">${index + 1}</span>${line}`
        );
        element.innerHTML = numberedLines.join('\n');
        
        // Basic syntax highlighting (a more complete implementation would use a library like highlight.js)
        const keywords = ['class', 'def', 'self', 'return', 'import', 'from', 'while', 'True', 'False'];
        const strings = /"[^"]*"|'[^']*'/g;
        const comments = /#.*/g;
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            element.innerHTML = element.innerHTML.replace(
                regex, 
                `<span class="keyword">${keyword}</span>`
            );
        });
        
        // Highlight strings
        element.innerHTML = element.innerHTML.replace(
            strings,
            match => `<span class="string">${match}</span>`
        );
        
        // Highlight comments
        element.innerHTML = element.innerHTML.replace(
            comments,
            match => `<span class="comment">${match}</span>`
        );
    });
}

// 3D Card Effects
function init3DCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.boxShadow = `${(centerX - x) / 20}px ${(centerY - y) / 20}px 20px rgba(0, 0, 0, 0.3)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all functions// First, add this script tag to your HTML file (preferably just before the closing </body> tag)
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Initialize EmailJS with your User ID (you'll get this when you sign up)
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("mRDW4PxD_6t8S7phT");
})();

// Add this JavaScript code to your website
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Sending...</span>';
    submitBtn.disabled = true;
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'nathishwarc@gmail.com'
    };
    
    // Send email using EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS
    emailjs.send('service_rd6icwl', 'template_yo12ftq', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            const formContainer = document.querySelector('.terminal-body');
            const originalContent = formContainer.innerHTML;
            formContainer.innerHTML = `
                <div class="success-message">
                    <div class="terminal-line">>>> Message sent successfully!</div>
                    <div class="terminal-line">>>> Thank you for reaching out, ${name}.</div>
                    <div class="terminal-line">>>> I will get back to you soon.</div>
                    <button class="reset-btn">Send another message</button>
                </div>
            `;
            
            // Add event listener to reset button
            document.querySelector('.reset-btn').addEventListener('click', function() {
                formContainer.innerHTML = originalContent;
                // Re-initialize the form event listener
                document.getElementById('contactForm').addEventListener('submit', arguments.callee.caller);
            });
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            
            // Reset button and show error
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            alert('Failed to send message. Please try again later.');
        });
});