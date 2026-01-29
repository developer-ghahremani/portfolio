import { Dialog, DialogContent } from "@mui/material";
import { CheckCircle } from "lucide-react";
import AppButton from "./button";

type ConfirmationModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

const ConfirmationModal = (props: ConfirmationModalProps) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent className="flex flex-col items-center text-center gap-4 bg-background! shadow-none!">
        <CheckCircle className="text-primary " size={50} />

        <h2 className="text-2xl font-semibold text-primary">{props.title}</h2>

        <p className="text-muted-foreground max-w-md leading-relaxed text-justify">
          {props.message}
        </p>

        <AppButton buttonElements={{ onClick: () => props.onClose() }} className="self-end">
          Close
        </AppButton>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
