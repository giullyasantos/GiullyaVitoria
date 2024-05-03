import React, { useEffect, useRef } from 'react';

const Background = () => {
  const splineContainerRef = useRef(null);  // Reference to the div where Spline will render the model

  useEffect(() => {
    // Dynamically load the Spline script
    const script = document.createElement('script');
    script.src = "https://my.spline.design/particlesforwebsite-55d021f7c68977d43d97b9d5ff2b7280/";  // You might need to change this URL to the correct Spline runtime URL
    script.async = true;
    script.onload = () => {
      // Initialize the Spline scene after the script is loaded
      const spline = new window.Spline({
        target: splineContainerRef.current,
        url: '../images/particles.spline',  // Path to your .spline file
      });

      // Save the spline object to the window for global access (optional)
      window.spline = spline;
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;

      // Set the animation progress based on scroll
      if (window.spline) {
        window.spline.setAnimationProgress('CameraZoom', scrollFraction);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={splineContainerRef} style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default Background;
