import Link from "next/link";

export default function AuthError({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Authentication Error
          </h1>
          <p className="text-gray-600">
            Something went wrong during sign in
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-800">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            This could be due to:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>Browser cookies are disabled</li>
            <li>Your Google account couldn't be verified</li>
            <li>A temporary server issue</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/auth/signin"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
          >
            Try Again
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Still having issues?{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
