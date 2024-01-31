const obj = [
  {
    type: "Savings",
    color: "#f9c74f",
    porcent: 45,
  },
  {
    type: "Invesment",
    color: "#f9c74f",
    porcent: 20,
  },
  {
    type: "Expense",
    color: "rgb(54,162,235)",
    porcent: 10,
  },
];

export const Labels = () => {
  return (
    <>
      {obj.map((v, i) => (
        <LabelComponent key={i} data={v} />
      ))}
    </>
  );
};

function LabelComponent({ data }) {
  if (!data) return <></>;

  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ backgroundColor: data.color ?? "#f9c74f" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.porcent ?? 0}%</h3>
    </div>
  );
}
