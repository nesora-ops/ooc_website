import { AlertCircle, CheckCircle2, Info } from "lucide-react";

import { cn } from "@/lib/utils";

type FormFeedbackStatus = "success" | "not-connected" | "error";

type FormFeedbackProps = {
  status: FormFeedbackStatus;
  title?: string;
  message: React.ReactNode;
  className?: string;
};

const statusMeta: Record<FormFeedbackStatus, { icon: typeof CheckCircle2; defaultTitle: string }> = {
  success: { icon: CheckCircle2, defaultTitle: "Thank you." },
  "not-connected": { icon: Info, defaultTitle: "Not yet connected" },
  error: { icon: AlertCircle, defaultTitle: "Something went wrong" },
};

export function FormFeedback({ status, title, message, className }: FormFeedbackProps) {
  const { icon: Icon, defaultTitle } = statusMeta[status];

  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-start gap-3 rounded-lg border p-6",
        status === "error" ? "border-destructive/40 bg-destructive/5" : "border-teal/40 bg-teal/5",
        className
      )}
    >
      <Icon className={cn("size-6", status === "error" ? "text-destructive" : "text-teal")} />
      <h3 className="font-heading text-lg font-semibold text-navy-ink">{title ?? defaultTitle}</h3>
      <div className="text-sm text-muted-foreground">{message}</div>
    </div>
  );
}
