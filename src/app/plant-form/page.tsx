// app/plant-form/page.tsx
import PlantForm from "../components/PlantForm"; // ✅ if components is inside app

export default function PlantFormPage() {
  return (
    <main className="px-8 py-16">
      <PlantForm />
    </main>
  );
}
