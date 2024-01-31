import "boxicons";

const obj = [
  {
    name: "Savings",
    color: "#f9c74f",
  },
  {
    name: "Invesment",
    color: "#f9c74f",
  },
  {
    name: "Expense",
    color: "rgb(54,162,235)",
  },
];

export const List = () => {
  return (
    <>
      <div className="flex flex-col py-6 gap-3">
        <h1 className="py-4 text-xl font-bold">History</h1>
        {obj.map((v, i) => (
          <Transaction key={i} category={v} />
        ))}
      </div>
    </>
  );
};

function Transaction({ category }) {
  if (!category) return null;

  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="trash"
        />
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}
