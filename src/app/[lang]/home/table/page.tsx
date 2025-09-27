import Table from "@/components/ui/Table";

type User = {
  name: string;
  email: string;
  age: number;
};

export default function TableExample() {
  const columns: { header: string; accessor: keyof User }[] = [
    { header: "نام", accessor: "name" },
    { header: "ایمیل", accessor: "email" },
    { header: "سن", accessor: "age" },
  ];

  const data: User[] = [
    { name: "علی", email: "ali@example.com", age: 25 },
    { name: "سارا", email: "sara@example.com", age: 30 },
  ];

  return (
    <div className="p-4">
      <Table columns={columns} data={data} />
    </div>
  );
}
