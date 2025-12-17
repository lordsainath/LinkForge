import LinkRow from "./LinkRow";

const LinksTable = ({ links }) => {
  if (!links.length) {
    return (
      <div className="bg-white rounded-lg p-6 text-center text-gray-500">
        You haven’t created any links yet.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 px-6 py-3 text-xs font-semibold text-gray-500 border-b">
        <div className="col-span-2">LINK</div>
        <div>SHORT URL</div>
        <div>CLICKS</div>
        <div>STATUS</div>
        <div>CREATED</div>
        <div>ACTIONS</div>
      </div>

      {/* Table Body */}
      <div>
        {links.map((link) => (
          <LinkRow key={link._id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default LinksTable;
