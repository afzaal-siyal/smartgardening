"use client";

type DashboardHeaderProps = {
  user: any;
  onLogout: () => void;
};

export default function DashboardHeader({
  user,
  onLogout,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg md:flex-row md:items-center md:justify-between">

      <div className="flex items-center gap-4">

        <img
          src={
            user?.user_metadata?.avatar_url ||
            "https://ui-avatars.com/api/?name=User"
          }
          alt="Profile"
          className="h-16 w-16 rounded-full border-4 border-green-100 object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold">
            {user?.user_metadata?.full_name || "Gardener"}
          </h2>

          <p className="text-gray-500">
            {user?.email}
          </p>

          <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Premium Member
          </span>
        </div>

      </div>

      <button
        onClick={onLogout}
        className="
          rounded-xl
          bg-gradient-to-r
          from-red-500
          to-rose-500
          px-6
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        Logout
      </button>

    </div>
  );
}