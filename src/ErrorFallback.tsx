import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Warning, ArrowClockwise } from "@phosph
import { Warning, ArrowClockwise } from "@phosphor-icons/react";


    <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Application Error

        </
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <pre className="text-xs text-
        <Alert variant="destructive" className="mb-6">
        
          onClick={resetErrorBoundary} 
          variant="outline"
          <ArrowClockwise size={16} />
        </Button>
        </Alert>
        
        <div className="bg-card border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">Error Details:</h3>
          <pre className="text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32">
            {error.message}
          </pre>
        </div>
        
        <Button 
          onClick={resetErrorBoundary} 
          className="w-full gap-2"
          variant="outline"
        >
          <ArrowClockwise size={16} />
          Try Again
        </Button>
      </div>


