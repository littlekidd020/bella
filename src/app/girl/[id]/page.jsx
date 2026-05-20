import { girls } from "@/lib/data";
import ClientWrapper from "./ClientWrapper";

// Generate static routes for all girls to pre-render the pages at build time
// This eliminates the need for edge runtime and makes the site 100x faster
export async function generateStaticParams() {
  return girls.map((girl) => ({
    id: girl.id.toString(),
  }));
}

export default function GirlDetailsPage() {
  return <ClientWrapper />;
}
