const LinkRow = ({ link }) => {
  return (
    <div className="grid grid-cols-6 gap-4 px-6 py-4 items-center border-b text-sm
                    hover:bg-gray-50 transition">

      {/* Original URL */}
      <div className="col-span-2">
        <p className="font-medium truncate">{link.originalUrl}</p>
        <p className="text-xs text-gray-500 truncate">Original link</p>
      </div>

      {/* Short URL */}
      <div className="truncate">
        <a
          href={link.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          {link.shortUrl}
        </a>
      </div>

      {/* Clicks */}
      <div className="font-semibold text-gray-800">
        {link.clicks}
      </div>

      {/* Status */}
      <div>
        <span className="px-2 py-1 text-xs rounded-full
                         bg-green-100 text-green-700">
          Active
        </span>
      </div>

      {/* Created */}
      <div className="text-xs text-gray-500">
        {new Date(link.createdAt).toLocaleDateString()}
      </div>

      {/* Actions */}
      <div className="flex gap-3 text-gray-400">
        <button className="hover:text-blue-600">🔗</button>
        <button className="hover:text-gray-700">✏️</button>
        <button className="hover:text-red-500">🗑</button>
      </div>
    </div>
  );
};

export default LinkRow;
