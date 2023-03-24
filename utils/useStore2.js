import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore2 = create(
  persist(
    (set) => ({
      userDetails2: {
        firstName: "",
        email: "",
        lastName: "",
        id: "",
        isBlocked: false,
        mobile: "",
      },
      addDetails2: (details) => {
        set({
          userDetails2: details,
        });
      },
      getDetailsFromStorage: () => {
        const storedDetails = localStorage.getItem("useDetails2");
        if (storedDetails) {
          set({
            useDetails2: JSON.parse(storedDetails),
          });
        }
      },
    }),
    { name: "useDetails2" }
  )
);

export default useStore2;
