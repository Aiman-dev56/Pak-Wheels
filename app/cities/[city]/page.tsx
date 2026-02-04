export default async function CityPage({
  params,
}: {
  params: Promise<{ city?: string }>;
}) {
  const { city } = await params;

  if (!city) {
    return <div>City not found</div>;
  }

  const cityName = city.replace(/-/g, " ");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold capitalize">{cityName}</h1>
      <p className="mt-3 text-gray-600">Showing cars in {cityName}</p>
    </div>
  );
}
