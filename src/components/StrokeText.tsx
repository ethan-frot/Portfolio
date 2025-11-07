interface StrokeTextProps {
  children: React.ReactNode;
  className?: string;
  strokeWidth?: string;
}

export default function StrokeText({
  children,
  className = "",
  strokeWidth = "1px"
}: StrokeTextProps) {
  return (
    <span
      className={className}
      style={{
        WebkitTextStroke: `${strokeWidth} rgb(var(--foreground))`,
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  );
}
