import { useForm } from "react-hook-form";
import api from "../../services/api";

const CreateUrlModal = ({ onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post("/url", {
        originalUrl: data.originalUrl,
      });
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to create url", error.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black/50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Create Short Link</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("originalUrl", { required: true })}
              placeholder="Paste long URL here"
              className="border rounded px-3 py-2"
            />

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-black text-white rounded"
            >
              cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-black text-white rounded"
            >
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUrlModal;
