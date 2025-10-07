export const ReactIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="-10.5 -9.45 21 18.9"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="React"
    className={`h-6 w-6 ${className ?? ""}`}
    {...props}
  >
    {/* el punto central toma currentColor */}
    <circle cx="0" cy="0" r="2" fill="currentColor" />

    {/* órbitas heredan currentColor; grosor cercano a Lucide */}
    <g
      stroke="currentColor"
      strokeWidth={1.75}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse rx="10" ry="4.5" />
      <ellipse rx="10" ry="4.5" transform="rotate(60)" />
      <ellipse rx="10" ry="4.5" transform="rotate(120)" />
    </g>
  </svg>
);
