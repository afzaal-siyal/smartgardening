type Props = {
  name: string;
  email: string;
};

export default function UserProfileCard({
  name,
  email,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">
        Profile Information
      </h3>

      <div className="space-y-3">
        <p>
          <strong>Name:</strong> {name}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}