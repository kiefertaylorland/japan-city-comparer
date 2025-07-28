import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
}

/**
 * A Link component that automatically scrolls to the top when clicked
 */
export const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ 
  children, 
  onClick, 
  ...props 
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Scroll to top immediately when link is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};
