import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="page-enter px-6 pb-16 flex-col pt-16 flex items-center justify-center min-h-screen w-full text-center">
      <div className="flex items-center justify-center flex-col gap-6 max-w-md">
        <h2 className="text-[7rem] md:text-[10rem] font-black leading-none gradient-text">
          404
        </h2>
        <h1 className="text-3xl md:text-4xl -mt-2">Page Not Found</h1>
        <p className="text-base text-white/50 leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back home.
        </p>
        <div className="mt-2">
          <button onClick={() => navigate("/")} className="btn-outline">
            Return Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
