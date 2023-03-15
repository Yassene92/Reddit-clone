'use client';

export default function AuthInputs() {
  return (
    <>
      <form action="" className="py-4 ">
        <input
          className="w-full h-10 py-2 pl-4 pr-3 placeholder-gray-500 bg-gray-100 border-none outline-none rounded-2xl ring-0 hover:ring-1 ring-gray-300 text-blackl placeholder:hover:-translate-y-3 placeholder:hover:scale-90 text-md "
          type="text"
          placeholder="Username"
          name="Username"
          // value={}
          //  onChange={handleChange}
        />
      </form>
    </>
  );
}
