import { VisitorCounter } from "@/components/VisitorCounter";

export function Footer() {
  return (
    <footer
      className="py-16 px-6 border-t border-border"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          
          {/* Visitor Counter */}
          <VisitorCounter />

          {/* Branding */}
          <div className="text-center space-y-2">
            <p className="font-gothic text-xl text-foreground">
              Bhavesh
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 Bhavesh Desale. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
