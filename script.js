// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.add('active');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    }
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
    
    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // OJT Vlog Modal
    const vlogCards = document.querySelectorAll('.vlog-card');
    const vlogModal = document.querySelector('.vlog-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const videoFrame = document.getElementById('video-frame');
    const modalDescription = document.getElementById('modal-description');
    
    vlogCards.forEach(card => {
        card.addEventListener('click', function() {
            const week = this.getAttribute('data-week');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            
            // This would be your video URL for each week
            // For demonstration, we'll use a placeholder
            const videoUrl = `https://www.youtube.com/embed/placeholder-week-${week}`;
            
            if (modalTitle) modalTitle.textContent = title;
            if (videoFrame) videoFrame.src = videoUrl;
            if (modalDescription) modalDescription.innerHTML = `<p>${description}</p>`;
            
            if (vlogModal) vlogModal.style.display = 'flex';
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (vlogModal) vlogModal.style.display = 'none';
            if (videoFrame) videoFrame.src = '';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === vlogModal) {
            if (vlogModal) vlogModal.style.display = 'none';
            if (videoFrame) videoFrame.src = '';
        }
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show a success message
            
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            contactForm.reset();
        });
    }
    
    // Team buttons functionality
    const teamButtons = document.querySelectorAll('.team-buttons .btn');
    
    teamButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Reset all buttons
            teamButtons.forEach(b => {
                b.style.backgroundColor = '';
            });
            
            // Highlight clicked button
            this.style.backgroundColor = '#2980b9';
            
            // Show team info based on clicked button
            let teamInfo = '';
            
            switch(index) {
                case 0:
                    teamInfo = '<h3>Team 1: Development Team</h3><p>As a front-end developer in this team, I contributed to building user interfaces and implementing client-side functionality for various projects.</p>';
                    break;
                case 1:
                    teamInfo = '<h3>Team 2: QA Team</h3><p>In this team, I served as a QA expert, ensuring the quality and reliability of our software products through rigorous testing methodologies.</p>';
                    break;
                case 2:
                    teamInfo = '<h3>Team 3: Project Management</h3><p>As a sub Project Manager in this team, I coordinated tasks, managed timelines, and facilitated communication between team members to ensure project success.</p>';
                    break;
            }
            
            // Create or update team info element
            let teamInfoElement = document.querySelector('.team-info');
            
            if (!teamInfoElement) {
                teamInfoElement = document.createElement('div');
                teamInfoElement.className = 'team-info';
                document.querySelector('.team-buttons').insertAdjacentElement('afterend', teamInfoElement);
            }
            
            teamInfoElement.innerHTML = teamInfo;
            teamInfoElement.style.marginTop = '1.5rem';
            teamInfoElement.style.padding = '1rem';
            teamInfoElement.style.backgroundColor = '#f0f4f8';
            teamInfoElement.style.borderRadius = '8px';
            teamInfoElement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'var(--secondary)';
                header.style.boxShadow = 'none';
            }
        }
    });
    
    // Skill items animation on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    function checkSkills() {
        const triggerBottom = window.innerHeight * 0.8;
        
        skillItems.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            
            if (skillTop < triggerBottom) {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0) scale(1)';
            } else {
                skill.style.opacity = '0';
                skill.style.transform = 'translateY(20px) scale(0.9)';
            }
        });
    }
    
    // Set initial styles for skill items
    skillItems.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px) scale(0.9)';
        skill.style.transition = 'all 0.5s ease';
    });
    
    // Check skills position on page load and scroll
    window.addEventListener('scroll', checkSkills);
    window.addEventListener('load', checkSkills);

    // Enhanced PDF functionality with proper error handling and fallbacks
    function initializeSeminarCards() {
        const seminarCards = document.querySelectorAll('.seminar-card');
        
        // Corrected PDF mappings with proper paths
    const pdfMappings = {
        'webinar1.pdf': './pdfs/webinar/web1.pdf',
        'webinar2.pdf': './pdfs/webinar/web2.pdf',
        'webinar3.pdf': './pdfs/webinar/web3.pdf',
        'webinar4.pdf': './pdfs/webinar/web4.pdf',
        'webinar5.pdf': './pdfs/webinar/web5.pdf',
        
        // Seminar PDFs
        'seminar1.pdf': './pdfs/seminar/sem1.pdf',
        'seminar2.pdf': './pdfs/seminar/sem2.pdf',
        'seminar3.pdf': './pdfs/seminar/sem3.pdf',
        'seminar4.pdf': './pdfs/seminar/sem4.pdf',
        'seminar5.pdf': './pdfs/seminar/sem5.pdf',
        
        // Group Organized PDFs
        'group1.pdf': './pdfs/group/org1.pdf',
        'group2.pdf': './pdfs/group/org2.pdf',
        'group3.pdf': './pdfs/group/org3.pdf',
        'group4.pdf': './pdfs/group/org4.pdf',
        'group5.pdf': './pdfs/group/org5.pdf',
        
        // Industry Exposure PDFs
        'industry1.pdf': './pdfs/industry/ind1.pdf',
        'industry2.pdf': './pdfs/industry/ind2.pdf',
        
        // Regional Participation PDFs
        'regional1.pdf': './pdfs/regional/reg1.pdf',
        'regional2.pdf': './pdfs/regional/reg2.pdf'
    };
        
        seminarCards.forEach(card => {
            card.addEventListener('click', async function() {
                const pdfKey = this.getAttribute('data-pdf');
                const cardTitle = this.querySelector('h4').textContent;
                const cardDescription = this.querySelector('p').textContent;
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
                
                // Show loading state
                const cardIcon = this.querySelector('.card-icon');
                const originalIcon = cardIcon.innerHTML;
                cardIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                try {
                    if (pdfMappings[pdfKey]) {
                        const pdfPath = pdfMappings[pdfKey];
                        
                        // Check if PDF exists before trying to open it
                        const pdfExists = await checkPDFExists(pdfPath);
                        
                        if (pdfExists) {
                            // Try different methods to open PDF
                            if (!openPDFMultipleMethods(pdfPath, cardTitle)) {
                                throw new Error('PDF could not be opened');
                            }
                        } else {
                            throw new Error('PDF file not found');
                        }
                    } else {
                        throw new Error('PDF mapping not found');
                    }
                } catch (error) {
                    console.warn('PDF loading error:', error.message);
                    // Show fallback modal instead of just an alert
                    openPDFViewerFallback(cardTitle, cardDescription, pdfKey);
                } finally {
                    // Restore original icon after delay
                    setTimeout(() => {
                        cardIcon.innerHTML = originalIcon;
                    }, 500);
                }
            });
            
            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            });
        });
    }
    
    // Function to check if PDF exists
    async function checkPDFExists(pdfPath) {
        try {
            const response = await fetch(pdfPath, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
    
    // Function to try multiple methods of opening PDF
    function openPDFMultipleMethods(pdfPath, title) {
        try {
            // Method 1: Direct window.open
            const newWindow = window.open(pdfPath, '_blank');
            if (newWindow) {
                return true;
            }
            
            // Method 2: Create a temporary link and click it
            const link = document.createElement('a');
            link.href = pdfPath;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return true;
            
        } catch (error) {
            console.error('All PDF opening methods failed:', error);
            return false;
        }
    }
    
    // Enhanced fallback PDF viewer
    function openPDFViewerFallback(title, description, pdfKey) {
        const modal = document.createElement('div');
        modal.className = 'pdf-fallback-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 15, 26, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            border-radius: 15px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 212, 255, 0.3);
            position: relative;
            overflow: hidden;
        `;
        
        modalContent.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%2300d4ff" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>'); pointer-events: none;"></div>
            <div style="position: relative; z-index: 1;">
                <div style="color: #ff6b6b; font-size: 48px; margin-bottom: 20px;">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3 style="color: #ffffff; font-family: 'Orbitron', sans-serif; margin-bottom: 15px; font-size: 1.5rem;">PDF Not Available</h3>
                <h4 style="color: #00d4ff; margin-bottom: 10px;">${title}</h4>
                <p style="color: #b8c5d1; margin-bottom: 25px; line-height: 1.6;">${description}</p>
                
                <div style="background: rgba(255, 107, 107, 0.1); border: 1px solid rgba(255, 107, 107, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 25px;">
                    <p style="color: #ff6b6b; margin: 0; font-size: 0.9rem;">
                        <i class="fas fa-info-circle"></i> The PDF file could not be loaded. This might be due to:
                    </p>
                    <ul style="color: #b8c5d1; text-align: left; margin: 10px 0 0 20px; font-size: 0.85rem;">
                        <li>File not found in the expected location</li>
                        <li>Incorrect file path or naming</li>
                        <li>File permissions or server issues</li>
                        <li>Network connectivity problems</li>
                    </ul>
                </div>
                
                <div style="background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 25px;">
                    <p style="color: #00d4ff; margin: 0; font-size: 0.9rem;">
                        <i class="fas fa-wrench"></i> <strong>For Developers:</strong>
                    </p>
                    <p style="color: #b8c5d1; text-align: left; margin: 5px 0 0 0; font-size: 0.85rem;">
                        Check if the file exists at: <code style="background: rgba(255,255,255,0.1); padding: 2px 4px; border-radius: 3px; color: #fff;">pdfs/${pdfKey.split('.')[0].replace('1', '').replace('2', '').replace('3', '').replace('4', '').replace('5', '')}/${pdfKey}</code>
                    </p>
                </div>
                
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="retry-btn" style="
                        background: linear-gradient(45deg, #00d4ff, #0099cc);
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        font-family: 'Exo 2', sans-serif;
                    ">
                        <i class="fas fa-redo"></i> Retry Loading
                    </button>
                    <button class="contact-btn" style="
                        background: linear-gradient(45deg, #ff2a6d, #cc1f57);
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        font-family: 'Exo 2', sans-serif;
                    ">
                        <i class="fas fa-envelope"></i> Contact for PDF
                    </button>
                    <button class="close-btn" style="
                        background: rgba(255, 255, 255, 0.1);
                        color: #ffffff;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        padding: 12px 24px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        font-family: 'Exo 2', sans-serif;
                    ">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Add button hover effects
        const buttons = modalContent.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Close modal functionality
        const closeModal = () => {
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.9)';
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 300);
        };
        
        // Button event listeners
        modalContent.querySelector('.retry-btn').addEventListener('click', () => {
            closeModal();
            // Retry after a short delay
            setTimeout(() => {
                const card = document.querySelector(`[data-pdf="${pdfKey}"]`);
                if (card) card.click();
            }, 500);
        });
        
        modalContent.querySelector('.contact-btn').addEventListener('click', () => {
            closeModal();
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If no contact section, show email info
                alert('Please contact Jay-vee Ubaldo for the PDF document.\nEmail: jayveeubaldo110@gmail.com');
            }
        });
        
        modalContent.querySelector('.close-btn').addEventListener('click', closeModal);
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
        
        // Add entrance animation
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.9)';
        modal.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10);
    }
    
    // Initialize seminar cards functionality
    initializeSeminarCards();
    
    // Add section scroll animations
    const seminarCategories = document.querySelectorAll('.seminar-category');
    
    function animateSeminarCards() {
        const triggerBottom = window.innerHeight * 0.8;
        
        seminarCategories.forEach((category, index) => {
            const categoryTop = category.getBoundingClientRect().top;
            
            if (categoryTop < triggerBottom) {
                setTimeout(() => {
                    category.style.opacity = '1';
                    category.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Set initial styles for categories
    seminarCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'all 0.6s ease';
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', animateSeminarCards);
    window.addEventListener('load', animateSeminarCards);
});