const UrlDisplay = ({ url }) => {
  return (
    <div className="bg-zinc-100 px-5 py-3 rounded-md space-y-1">
      <p>
        <strong>Original:</strong> {url.originalUrl}
      </p>

      <p>
        <strong>Short URL:</strong>{" "}
        <a
          href={url.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {url.shortUrl}
        </a>
      </p>

      <p>
        <strong>Clicks:</strong> {url.clickCount}
      </p>

      <p className="text-sm text-gray-500">
        Created: {new Date(url.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default UrlDisplay;
