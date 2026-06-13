import ChartShell from "@/components/chart/ChartShell";
import ChartCollectionPage from "@/components/charts/ChartCollectionPage";

export default function RecentChartsPage() {
  return (
    <ChartShell>
      <ChartCollectionPage mode="recent" />
    </ChartShell>
  );
}
