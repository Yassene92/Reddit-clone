export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center py-4 border border-red-500">
      <div className="flex space-x-4 border border-blue-500 w-[95%] justify-center max-w-5xl">
        {/* LHS */}
        <div className="flex-col w-full border border-green-500 sm:w-2/3">
          {children && children[0 as keyof typeof children]}
        </div>
        {/* RHS */}
        <div className="flex-col flex-grow hidden border border-orange-500 sm:flex ">
          {children && children[1 as keyof typeof children]}
        </div>
      </div>
    </div>
  );
}
