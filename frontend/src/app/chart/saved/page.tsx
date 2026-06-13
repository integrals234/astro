import ChartShell from "@/components/chart/ChartShell";
import ChartCollectionPage from "@/components/charts/ChartCollectionPage";

export default function SavedChartsPage() {
  return (
    <ChartShell>
      <ChartCollectionPage mode="saved" />
    </ChartShell>
  );
}
