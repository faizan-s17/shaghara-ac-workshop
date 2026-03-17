import './FloatingElements.css';

/**
 * Floating Decorative Elements
 * Premium floating background shapes for visual richness
 * - Blurred circles
 * - Gradient orbs
 * - Abstract shapes
 * - Light glow effects
 */

const FloatingElements = ({ variant = 'default' }) => {
  if (variant === 'hero') {
    // Hero section variant - more prominent elements
    return (
      <div className="floating-elements hero-floating">
        {/* Large blurred circle - top right */}
        <div 
          className="floating-shape floating-circle-large"
          style={{
            top: '-10%',
            right: '-5%',
            animationDelay: '0s'
          }}
        />
        
        {/* Medium gradient orb - center left */}
        <div 
          className="floating-shape floating-orb-medium"
          style={{
            top: '40%',
            left: '-8%',
            animationDelay: '-2s'
          }}
        />
        
        {/* Small glow orb - bottom right */}
        <div 
          className="floating-shape floating-glow-small"
          style={{
            bottom: '15%',
            right: '10%',
            animationDelay: '-4s'
          }}
        />
        
        {/* Abstract shape - top center */}
        <div 
          className="floating-shape floating-abstract"
          style={{
            top: '20%',
            left: '30%',
            animationDelay: '-1s'
          }}
        />
        
        {/* Tiny sparkle - center */}
        <div 
          className="floating-shape floating-sparkle"
          style={{
            top: '60%',
            right: '25%',
            animationDelay: '-3s'
          }}
        />
      </div>
    );
  }

  if (variant === 'section') {
    // Section variant - subtler elements
    return (
      <div className="floating-elements section-floating">
        {/* Blurred circle - left */}
        <div 
          className="floating-shape floating-circle-blur"
          style={{
            top: '20%',
            left: '-5%',
            animationDelay: '0s'
          }}
        />
        
        {/* Gradient blob - right */}
        <div 
          className="floating-shape floating-blob"
          style={{
            bottom: '30%',
            right: '-8%',
            animationDelay: '-3s'
          }}
        />
      </div>
    );
  }

  if (variant === 'minimal') {
    // Minimal variant - very subtle
    return (
      <div className="floating-elements minimal-floating">
        {/* Single soft glow */}
        <div 
          className="floating-shape floating-glow-minimal"
          style={{
            top: '50%',
            right: '0%',
            animationDelay: '0s'
          }}
        />
      </div>
    );
  }

  // Default variant - balanced elements
  return (
    <div className="floating-elements default-floating">
      {/* Top left orb */}
      <div 
        className="floating-shape floating-orb"
        style={{
          top: '10%',
          left: '5%',
          animationDelay: '0s'
        }}
      />
      
      {/* Bottom right blur */}
      <div 
        className="floating-shape floating-blur"
        style={{
          bottom: '20%',
          right: '10%',
          animationDelay: '-2s'
        }}
      />
    </div>
  );
};

export default FloatingElements;
