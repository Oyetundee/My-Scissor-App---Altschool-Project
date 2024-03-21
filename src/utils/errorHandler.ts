import { toast } from "react-toastify";

export const handleAxiosError = async (error: any): Promise<void> => {
    console.log(error, "error");
    if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-credential"
    ) {
        toast.error("Invalid email or user not found");
    } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password");
    } else if (error.code === "auth/user-disabled") {
        console.log(
            "Your account has been disabled. Please contact support for assistance."
        );
    } else {
        toast.error("Error:", error.message);
    }
};
