import { cn } from "@/lib/utils";

interface PlaceholderTextProps {
  children: React.ReactNode;
  className?: string;
  showHint?: boolean;
}

export const PlaceholderText = ({ children, className, showHint = true }: PlaceholderTextProps) => {
  return (
    <span className={cn("relative inline", className)}>
      <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
        {children}
      </span>
      {showHint && (
        <span className="ml-2 text-xs font-body font-normal text-accent opacity-70">
          ← Edite aqui
        </span>
      )}
    </span>
  );
};

interface PlaceholderBlockProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export const PlaceholderBlock = ({ children, className, label }: PlaceholderBlockProps) => {
  return (
    <div className={cn("relative border-2 border-dashed border-accent/40 rounded-lg p-4 bg-accent/5", className)}>
      {label && (
        <span className="absolute -top-3 left-4 bg-background px-2 text-xs font-body text-accent">
          {label}
        </span>
      )}
      {children}
    </div>
  );
};
