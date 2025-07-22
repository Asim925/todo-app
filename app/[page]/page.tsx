import Table from "@/app/components/Table";

interface Props {
  params: {
    page?: string;
  };
}

const Page = async ({ params: { page } }: Props) => {
  const currentPage = parseInt(page || "1");
  const limit = 10;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${limit}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <>
      <Table todos={data} currentPage={currentPage} />
    </>
  );
};

export default Page;
