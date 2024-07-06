import SearchResult from "../pages/SearchResult";

export default function page({ params }: { params: { slug: string } }) {
  const dishName = params.slug.replace(/%20/g, " ");

  return <SearchResult dishName={dishName} />;
}
