import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { fadeInUp } from '../utils/animations';
import styles from './Contact.module.css';
import '../styles/theme.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
  };

  // Paper airplane animation variants
  const airplaneVariants = {
    initial: { x: 0, y: 0, rotate: 0, scale: 0 },
    animate: { 
      x: [0, 100, 200, 300, 400], 
      y: [0, -50, -20, -70, -200], 
      rotate: [0, 15, 25, 35, 45],
      scale: [0, 1, 1.2, 1, 0.8],
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  // Contact form variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.1, 
        staggerChildren: 0.1,
        when: "beforeChildren" 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
  };

  // Success message variants
  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, type: "spring", stiffness: 200 } 
    }
  };

  // Decorative elements variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  // Character blinking animation
  const blinkVariants = {
    blink: {
      opacity: [1, 1, 0, 1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 3,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className={styles.title}
        >
          Contact Me
        </motion.h1>

        <div className={styles.contentLayout}>
          <div className={styles.formColumn}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  ref={formRef}
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -50, transition: { duration: 0.1 } }}
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                  key="contact-form"
                >
                  <motion.div className={styles.inputGroup} variants={itemVariants}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div className={styles.inputGroup} variants={itemVariants}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Your email address"
                    />
                  </motion.div>

                  <motion.div className={styles.inputGroup} variants={itemVariants}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Write your message here..."
                      rows={5}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className={styles.submitButton}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isAnimating}
                  >
                    {isAnimating ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  className={styles.successMessage}
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  key="success-message"
                >
                  <motion.div 
                    className={styles.successIcon}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  >
                    ✓
                  </motion.div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. I'll get back to you shortly.</p>
                  <motion.button
                    onClick={resetForm}
                    className={`${styles.submitButton} ${styles.resetButton}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {isAnimating && (
              <motion.div 
                className={styles.airplane}
                variants={airplaneVariants}
                initial="initial"
                animate="animate"
              >
                ✈️
              </motion.div>
            )}
          </div>

          <div className={styles.characterColumn}>
            <div className={styles.character}>
              <motion.div 
                className={styles.characterBody}
                variants={floatingVariants}
                animate="animate"
              >
                <div className={styles.head}>
                  <div className={styles.face}>
                    <motion.div 
                      className={styles.eyes}
                      variants={blinkVariants}
                      animate="blink"
                    >
                      <div className={styles.eye}></div>
                      <div className={styles.eye}></div>
                    </motion.div>
                    <div className={styles.mouth}></div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.arm} style={{ transform: 'rotate(-25deg)' }}></div>
                  <div className={styles.arm} style={{ transform: 'rotate(25deg)' }}></div>
                </div>
              </motion.div>
              
              <div className={styles.shadow}></div>
              
              <motion.div 
                className={styles.speechBubble}
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p>Hello there! I'd love to hear from you.</p>
              </motion.div>
            </div>
            
            <div className={styles.connectInfo}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Or connect with me on:
              </motion.h3>
              
              <motion.div 
                className={styles.socialIcons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={styles.socialIcon}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className={styles.socialIcon}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={styles.socialIcon}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div 
          className={`${styles.floatingElement} ${styles.element1}`}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            transition: { 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse" as const, 
              ease: "easeInOut"
            }
          }}
        >
          ✨
        </motion.div>
        
        <motion.div 
          className={`${styles.floatingElement} ${styles.element2}`}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -8, 0],
            transition: { 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" as const,
              delay: 0.5,
              ease: "easeInOut"
            }
          }}
        >
          📱
        </motion.div>
        
        <motion.div 
          className={`${styles.floatingElement} ${styles.element3}`}
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 10, 0],
            transition: { 
              duration: 3.5, 
              repeat: Infinity,
              repeatType: "reverse" as const,
              delay: 1,
              ease: "easeInOut" 
            }
          }}
        >
          💻
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact; 