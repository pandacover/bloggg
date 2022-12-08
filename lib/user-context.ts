import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const UserContext = createContext<contextType | null>(null);

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context)
		throw new Error("useUserContext must be used inside UserContext Provider");

	return context;
};
