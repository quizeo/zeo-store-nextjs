"use client";

import { useActionState } from "react"; // Update this import
import { useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/type";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  // Update the hook name here
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
