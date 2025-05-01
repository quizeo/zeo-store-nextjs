import { Skeleton } from "../ui/skeleton";

const LoadingTable = ({ rows = 5 }: { rows?: number }) => {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="h-8 w-full rounded" />
      </div>
    );
  });
  return <>{tableRows}</>;
};

export default LoadingTable;
