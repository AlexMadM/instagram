import { ComponentPropsWithoutRef, ReactNode } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import s from "./modal.module.scss";
import Close from "@/assets/Close";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";

export type ModalProps = {
  children: ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  title?: string;
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Dialog>, "onOpenChange" | "open">;
export const Modal = ({ children, title, ...props }: ModalProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={cn(s.overlay, "bg-black bg-opacity-50")} />
        <DialogPrimitive.Content className={cn(s.content, "bg-light-100 rounded-lg shadow-lg")}>
          <div className={cn(s.header, "bg-light-300 p-6 rounded-t-lg")}>
            <DialogPrimitive.Title asChild>
              <Typography as={"h2"} variant={"h2"} className="text-dark-900">
                {title}
              </Typography>
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              className={cn(s.closeButton, "text-dark-300 hover:text-dark-900")}
            >
              <Close height={24} width={24} />
            </DialogPrimitive.Close>
          </div>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
