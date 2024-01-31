import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="form max-w-sm mx-auto w-96">
        <h1 className="font-bold pb-5 text-xl">Transaction</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="input-group">
              <input
                type="text"
                {...register("name")}
                placeholder="Sallary, House Rend"
                className="form-input"
              />
            </div>
            <select className="form-input" {...register("type")}>
              <option value="Invesment" defaultValue>
                Invesment
              </option>
              <option value="Expense">Expense</option>
              <option value="Savings">Savings</option>
            </select>
            <div className="input-group">
              <input
                type="text"
                placeholder="Amount"
                {...register("amount")}
                className="form-input"
              />
            </div>

            <div className="submit-btn">
              <button className="border py-2 text-white bg-indigo-500 w-full">
                Make Transaction
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};