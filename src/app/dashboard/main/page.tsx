import { SimpleWidget } from "@/app/components";
import { WidgetsGrid } from "@/app/components";


export const metadata = {
 title: 'Admin dashboard',
 description: 'Admin dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <WidgetsGrid />
    </div>
  );
}