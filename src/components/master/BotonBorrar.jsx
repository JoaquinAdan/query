import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api";

const BotonBorrar = ({user}) => {
  const queryClient = useQueryClient();

  const [id, setId] = useState("");
  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getUsers"]);
    },
  });
  const removeUser = async (userId) => {
    mutate(userId);
  };
  return (
    <button
      onClick={() => {
        setId(user.id);
        removeUser(user.id);
      }}
    >
      🛒
    </button>
  );
};

export default BotonBorrar;
