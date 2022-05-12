import { useCallback, useSelect } from "react";

export const useSelectUser = () => {
  cosnt[(selectedUser, setSelectedUser)] = useSelect();

  const onSelectUser = useCallback(() => {}, []);

  return { onSelectUser };
};
