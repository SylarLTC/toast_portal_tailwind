import { useToast } from "./hooks/useToast";

export const App = () => {
  const toast = useToast();
  return (
    <div className="flex-center flex-col w-screen h-screen bg-slate-100">
      <div className="flex w-[240px] flex-col justify-center gap-y-[20px] rounded-[8px] bg-white p-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
        <button
          // className="flex justify-center items-center w-[196px] h-[30px] bg-green-400 rounded-[8px] text-white"
          className="btn btn-success"
          onClick={() => toast.success("Success!")}
        >
          Success
        </button>
        <button
          // className="flex justify-center items-center w-[196px] h-[30px] bg-green-400 rounded-[8px] text-white"
          className="btn btn-info"
          onClick={() => toast.info("Info!")}
        >
          Info
        </button>
        <button
          // className="flex justify-center items-center w-[196px] h-[30px] bg-green-400 rounded-[8px] text-white"
          className="btn btn-warning"
          onClick={() => toast.warning("Warning!")}
        >
          Warning
        </button>
        <button
          // className="flex justify-center items-center w-[196px] h-[30px] bg-green-400 rounded-[8px] text-white"
          className="btn btn-error"
          onClick={() => toast.error("Error!")}
        >
          Error
        </button>
      </div>
    </div>
  );
};
